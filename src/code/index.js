import './index.scss';
import $ from 'jquery';
import QRious from 'qrious';
import { Decimal } from "decimal.js";
import MixinUtils from '../utils/mixin.js';
import blueLogo from '../home/logo.png';
import botIcon from './robot.svg';
import verifiedBotIcon from './verifiedBot.svg';
import groupDefaultAvatar from './group.png';
import qrCodeIcon from './qrcode.svg';
import completeIcon from '../home/payment_complete.svg';

function Code(router, api) {
  this.router = router;
  this.api = api;
  this.template = require('./index.html');

  this.chatType = ['user', 'conversation'];
  this.paymentType = 'payment';
}

Code.prototype = {
  render: function (id) {
    const self = this;
    self.api.code.fetch(function(resp) {
      if (resp.error) {
        return;
      }
      resp.data['code_id'] = id;

      if (self.chatType.includes(resp.data.type)) {
        self.renderChat(resp.data);
        return;
      }

      if (self.paymentType === resp.data.type) {
        self.renderPayment(resp.data);
        return;
      }

      self.api.error({error: {code: 10002}});
    }, id);
  },

  renderChat: function(chatInfo) {
    const platform = MixinUtils.environment();
    const self = this;
    $('body').attr('class', 'chat code layout');
    const hasAvatar = chatInfo.type === 'user' && !chatInfo.avatar_url ? false : true;
    const full_name = chatInfo.type === 'conversation' ? chatInfo.name : chatInfo.full_name;
    const showExtraButton = chatInfo.type === 'user' && !!chatInfo.app && !chatInfo.app.home_uri.split("://")[1].split("/")[0].includes("mixin.one");
    const data = {
      logoURL: blueLogo,
      basic: true,
      hasAvatar,
      avatarUrl: hasAvatar && chatInfo.type === 'conversation' ? groupDefaultAvatar : chatInfo.avatar_url,
      firstLetter: full_name.trim()[0] || '^_^',
      title: full_name.trim().length > 0 ? full_name.trim() : '^_^',
      isBot: !!chatInfo.app,
      botIcon: !!chatInfo.app && chatInfo.app.is_verified ? verifiedBotIcon : botIcon,
      subTitle: chatInfo.type === 'conversation' ? `${chatInfo.participants.length} ${i18n.t('code.group.members')}` : chatInfo.identity_number,
      hasContent: chatInfo.type === 'conversation' ? !!chatInfo.announcement : !!chatInfo.biography,
      content: chatInfo.type === 'conversation' ? chatInfo.announcement : chatInfo.biography,
      showActionButton: true,
      buttonURL: showExtraButton ? `mixin://apps/${chatInfo.app.app_id}?action=open` : "mixin://codes/" + chatInfo.code_id,
      actionText: 
        chatInfo.type === 'conversation' 
          ? i18n.t('code.group.join') 
          : showExtraButton
            ? i18n.t('code.bot.open')
            : i18n.t('code.user.chat'),
      showExtraButton,
      extraURL: "mixin://codes/" + chatInfo.code_id,
      extraText: i18n.t('code.user.chat'),
      buttonIntro: 
        chatInfo.type === 'conversation' 
          ? i18n.t('code.group.btn.intro') 
          : !!chatInfo.app 
            ? i18n.t('schema.bot.btn.intro.view') 
            : i18n.t('code.user.btn.intro') 
    }
    chatInfo['showButtonIntro'] = !(chatInfo.type === 'user' && !!chatInfo.app);
    $('#layout-container').html(self.template(data));
    if (!data.hasContent) $('.subTitle').attr('class', 'subTitle new-margin');
    if (i18n.locale.includes('zh')) $('.extra-btn-container').attr('class', 'zh extra-btn-container');
    if (!platform) $('.main').attr('class', 'main browser');
    self.router.updatePageLinks();
  },

  renderPayment: function(payment) {
    const self = this;
    $('body').attr('class', 'payment code layout');
    const totalNumber = payment.receivers.length;

    if (totalNumber > 1) {
      self.api.network.assetsShow((asset) => {
        const platform = MixinUtils.environment();
        const complete = payment.status === 'paid';        
        const usdAmount = new Decimal(asset.data.price_usd).times(payment.amount);
        const mixinURL = "mixin://codes/" + payment.code_id;
        const data = {
          logoURL: blueLogo,
          basic: false,
          title: i18n.t('code.multisig.title'),
          hasSubTitle: true,
          subTitle: `${payment.threshold}/${totalNumber}`,
          hasMemo: !!payment.memo,
          memo: payment.memo,
          iconUrl: asset.data.icon_url,
          iconTitle: `${payment.amount} ${asset.data.symbol}`,
          iconSubTitle: `${usdAmount.toNumber().toFixed(2).toString()} USD`,
          isBot: false,
          botIcon: undefined,
          showActionButton: false,
          showQRCode: true,
          qrCodeIcon,
          tip: i18n.t('code.payment.mobile.scan'),
          complete,
          successURL: completeIcon,
          showMixinButton: true,
          mixinURL
        };
        var preloadImage = new Image();
        preloadImage.src = asset.data.icon_url;
        preloadImage.onload = () => {
          $('#layout-container').html(self.template(data));
          if (!platform) $('.main').attr('class', 'main browser');
          if (data.hasMemo) $('.scan-container').attr('class', 'scan-container new-margin');
          new QRious({
            element: document.getElementById('qrcode'),
            backgroundAlpha: 0,
            value: mixinURL,
            level: 'H',
            size: 140
          });
          new QRious({
            element: document.getElementById('qrcode-modal'),
            backgroundAlpha: 0,
            value: mixinURL,
            level: 'H',
            size: 188
          });
          $('#qrcode-modal-btn').on('click', function() {
            $('.qrcode-modal').toggleClass('active', 'true');
          })
          $('.qrcode-modal').on('click', function(e) {
            $(this).toggleClass('active', 'false');
          })
          self.router.updatePageLinks();
          let timer = !complete && setInterval(() => {
            self.api.code.fetch((resp) => {
              if (resp.data.status === 'paid') {
                data.complete = true;
                $('#layout-container').html(self.template(data));
                if (!platform) $('.main').attr('class', 'main browser'); 
                if (data.hasMemo) $('.scan-container').attr('class', 'scan-container new-margin');
                clearInterval(timer);
              }
            }, payment.code_id);
          }, 1000 * 3);
        };
      }, payment.asset_id);
      return;
    }

    self.api.error({error: {code: 10002}});
  }
};

export default Code;
