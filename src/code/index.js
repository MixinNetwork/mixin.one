import './index.scss';
import $ from 'jquery';
import QRious from 'qrious';
import { Decimal } from "decimal.js";
import MixinUtils from '../utils/mixin.js';
import blueLogo from '../home/logo.png';
import botIcon from './robot.svg';
import groupDefaultAvatar from './group.png';
import completeIcon from '../home/payment_complete.svg';

function Code(router, api) {
  this.router = router;
  this.api = api;
  this.templatePayment = require('./payment.html');
  this.templateChat = require('./chat.html');

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
    chatInfo['hasAvatar'] = chatInfo.type === 'conversation' || (chatInfo.type === 'user' && !!chatInfo.avatar_url);
    if (chatInfo.type === 'conversation') chatInfo['avatar_url'] = groupDefaultAvatar;
    const full_name = chatInfo.type === 'conversation' ? chatInfo.name : chatInfo.full_name;
    chatInfo['firstLetter'] = full_name.trim()[0] || '^_^';
    chatInfo['logoURL'] = blueLogo;
    chatInfo['full_name'] = full_name.trim().length > 0 ? full_name.trim() : '^_^';
    chatInfo['isBot'] = !!chatInfo.app;
    chatInfo['botIcon'] = botIcon;
    chatInfo['info'] = chatInfo.type === 'conversation' ? `${chatInfo.participants.length} ${i18n.t('code.group.members')}` : chatInfo.identity_number;
    chatInfo['hasIntro'] = chatInfo.type === 'conversation' ? !!chatInfo.announcement : !!chatInfo.biography;
    chatInfo['intro'] = chatInfo.type === 'conversation' ? chatInfo.announcement : chatInfo.biography;
    chatInfo['showExtraButton'] = chatInfo.type === 'user' && !!chatInfo.app && !chatInfo.app.home_uri.split("://")[1].split("/")[0].includes("mixin.one");
    chatInfo['actionText'] = 
      chatInfo.type === 'conversation' 
        ? i18n.t('code.group.join') 
        : chatInfo['showExtraButton']
          ? i18n.t('code.bot.open')
          : i18n.t('code.user.chat');
    chatInfo['buttonURL'] = chatInfo['showExtraButton'] ? `mixin://apps/${chatInfo.app.app_id}?action=open` : "mixin://codes/" + chatInfo.code_id;
    chatInfo['extraURL'] = "mixin://codes/" + chatInfo.code_id;
    chatInfo['extraText'] = i18n.t('code.user.chat');
    chatInfo['showButtonIntro'] = !(chatInfo.type === 'user' && !!chatInfo.app);
    chatInfo['buttonIntro'] = chatInfo.type === 'user' ? i18n.t('code.user.btn.intro') : i18n.t('code.group.btn.intro');
    $('#layout-container').html(self.templateChat(chatInfo));
    if (!chatInfo['hasIntro']) $('.info').attr('class', 'info new-margin');
    if (chatInfo['showExtraButton']) $('.action-btn').attr('class', 'btn action-btn new-margin');
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
        payment['logoURL'] = blueLogo;
        payment['info'] = `${payment.threshold}/${totalNumber}`;
        payment['hasMemo'] = !!payment.memo;
        payment['memo'] = payment.memo;
        payment['assetUrl'] = asset.data.icon_url;
        payment['tokenAmount'] = `${payment.amount} ${asset.data.symbol}`;
        const useAmount = new Decimal(asset.data.price_usd).times(payment.amount);
        payment['usdAmount'] = `${useAmount.toNumber().toFixed(2).toString()} USD`;
        payment['complete'] = complete;
        payment['successURL'] = completeIcon;
        payment['mixinURL'] = "mixin://codes/" + payment.code_id;
        var preloadImage = new Image();
        preloadImage.src = asset.data.icon_url;
        preloadImage.onload = () => {
          $('#layout-container').html(self.templatePayment(payment));
          if (!platform) $('.main').attr('class', 'main browser');
          new QRious({
            element: document.getElementById('qrcode'),
            backgroundAlpha: 0,
            value: 'https://mixin.one/codes/' + payment.code_id,
            level: 'H',
            size: 500
          });
          self.router.updatePageLinks();
          let timer = !complete && setInterval(() => {
            self.api.code.fetch((resp) => {
              if (resp.data.status === 'paid') {
                payment['complete'] = true;
                $('#layout-container').html(self.templatePayment(payment));
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
