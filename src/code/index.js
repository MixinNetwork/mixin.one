import './index.scss';
import $ from 'zepto-webpack';
import { Decimal } from "decimal.js";
import MixinUtils from '../utils/mixin.js';
import URLUtils from '../utils/url.js';
import { initQRCode } from '../utils/modal.js';
import blueLogo from '../assets/icons/logo.png';
import botIcon from '../assets/icons/robot.svg';
import qrCodeIcon from '../assets/icons/qrcode.svg';
import defaultGroupAvatar from '../assets/icons/groupAvatar.svg';
import verifiedBotIcon from '../assets/icons/verifiedBot.svg';
import defaultAppAvatar from '../assets/icons/appAvatar.svg';
import defaultUserAvatar from '../assets/icons/userAvatar.svg';
import completeIcon from '../assets/icons/payment_complete.svg';

function Code(router, api) {
  this.router = router;
  this.api = api;
  this.template = require('./index.html');
}

Code.prototype = {
  render: function (id) {
    const self = this;
    self.api.code.fetch(function(resp) {
      if (resp.error) {
        return;
      }
      resp.data['code_id'] = id;

      switch(resp.data.type) {
        case 'user':
        case 'conversation':
          self.renderChat(resp.data);
          break;
        case 'payment':
        case 'multisig_request':
          self.renderMultiSig(resp.data.type, resp.data);
          break;
        case 'authorization':
          self.renderAuthorization(resp.data);
          break;
        default:
          self.api.error({error: {code: 10002}});
      };
    }, id);
  },

  renderChat: function(chatInfo) {
    const platform = MixinUtils.environment();
    const self = this;
    $('body').attr('class', 'chat code layout');
    const full_name = chatInfo.type === 'conversation' ? chatInfo.name : chatInfo.full_name;
    const defaultAvatar = !!chatInfo.app ? defaultAppAvatar : defaultUserAvatar;
    const data = {
      logoURL: blueLogo,
      basic: true,
      hasAvatar: true,
      avatarUrl: chatInfo.type === 'conversation' 
        ? defaultGroupAvatar
        : !!chatInfo.avatar_url 
          ? chatInfo.avatar_url
          : defaultAvatar,
      firstLetter: full_name.trim()[0] || '^_^',
      title: full_name.trim().length > 0 ? full_name.trim() : '^_^',
      isBot: !!chatInfo.app,
      botIcon: !!chatInfo.app && chatInfo.app.is_verified ? verifiedBotIcon : botIcon,
      subTitle: chatInfo.type === 'conversation' ? `${chatInfo.participants.length} ${i18n.t('code.group.members')}` : chatInfo.identity_number,
      hasContent: chatInfo.type === 'conversation' ? !!chatInfo.announcement : !!chatInfo.biography,
      content: chatInfo.type === 'conversation' ? chatInfo.announcement : chatInfo.biography,
      showActionButton: true,
      mixinURL: "mixin://mixin.one/codes/" + chatInfo.code_id,
      actionText: chatInfo.type === 'conversation' ? i18n.t('code.user.chat') :i18n.t('schema.btn.view'),
      buttonIntro: 
        chatInfo.type === 'conversation' 
          ? i18n.t('code.group.btn.intro') 
          : !!chatInfo.app 
            ? i18n.t('schema.bot.btn.intro.view') 
            : i18n.t('schema.user.btn.intro.view') 
    };
    chatInfo['showButtonIntro'] = !(chatInfo.type === 'user' && !!chatInfo.app);
    $('#layout-container').html(self.template(data));
    if (!data.hasContent) $('.subTitle').attr('class', 'subTitle new-margin');
    if (i18n.locale.includes('zh')) $('.extra-btn-container').attr('class', 'zh extra-btn-container');
    if (!platform) $('.main').attr('class', 'main browser');
    self.router.updatePageLinks();
  },

  renderMultiSig: function(type, multisig) {
    const self = this;
    $('body').attr('class', `multisig code layout`);
    self.api.network.assetsShow((asset) => {
      const platform = MixinUtils.environment();
      const complete = type === 'payment' 
        ? multisig.status === 'paid'
        : multisig.state === 'signed';
      const totalNumber = type === 'payment' 
        ? multisig.receivers.length
        : multisig.senders.length;      
      const usdAmount = new Decimal(asset.data.price_usd).times(multisig.amount);
      const mixinURL = "mixin://mixin.one/codes/" + multisig.code_id;
      const data = {
        logoURL: blueLogo,
        title: i18n.t('code.multisig.title'),
        hasSubTitle: true,
        subTitle: `${multisig.threshold}/${totalNumber}`,
        hasMemo: !!multisig.memo,
        memo: multisig.memo,
        iconUrl: asset.data.icon_url,
        iconTitle: `${multisig.amount} ${asset.data.symbol}`,
        iconSubTitle: `${usdAmount.toNumber().toFixed(2).toString()} USD`,
        showQRCode: true,
        qrCodeIcon,
        tip: i18n.t('code.payment.mobile.scan'),
        complete,
        successURL: completeIcon,
        mixinURL
      };
      var preloadImage = new Image();
      preloadImage.src = asset.data.icon_url;
      preloadImage.onload = () => {
        $('#layout-container').html(self.template(data));
        if (!platform) $('.main').attr('class', 'main browser');
        if (data.hasMemo) $('.scan-container').attr('class', 'scan-container new-margin');
        initQRCode(mixinURL);
        self.router.updatePageLinks();
      }

      const timer = !complete && setInterval(() => {
        self.api.code.fetch((resp) => {
          if (!resp.error) {
            const complete = type === 'payment' 
              ? resp.data.status === 'paid'
              : resp.data.state === 'signed';  
            if (complete) {
              clearInterval(timer);
              data.complete = true;
              $('#layout-container').html(self.template(data));
              if (!platform) $('.main').attr('class', 'main browser'); 
              if (data.hasMemo) $('.scan-container').attr('class', 'scan-container new-margin');
            }
          }
        }, multisig.code_id);
      }, 1000 * 3);
    }, multisig.asset_id);
  },

  renderAuthorization: function(auth) {
    const self = this;
    const state = URLUtils.getUrlParameter("state");
    const returnTo = URLUtils.getUrlParameter("return_to");
    if (auth.authorization_code.length > 16) {
      var redirectUri = auth.app.redirect_uri + '?code=' + auth.authorization_code + '&state=' + state;
      if (returnTo && returnTo.length > 0) {
        redirectUri = redirectUri + '&return_to=' + encodeURIComponent(returnTo);
      }
      window.location.replace(redirectUri);
      return true;
    }
    if (auth.scopes.length === 0) {
      var redirectUri = auth.app.redirect_uri + '?error=access_denied&state=' + state;
      if (returnTo && returnTo.length > 0) {
        redirectUri = redirectUri + '&return_to=' + encodeURIComponent(returnTo);
      }
      window.location.replace(redirectUri);
      return true;
    }

    if ($('.oauth.code.layout').data('code-id') !== auth.code_id) {
      $('body').attr('class', 'oauth code layout');
      $('body').attr('data-code-id', auth.code_id);
      let platform = MixinUtils.environment();
      const mixinURL = 'mixin://mixin.one/codes/' + auth.code_id;
      if (platform == 'Android' || platform == 'iOS') {
        window.location.replace(mixinURL);
        return false;
      }
      const data = {
        logoURL: blueLogo,
        title: i18n.t('oauth.title'),
        iconUrl: auth.app.icon_url ? auth.app.icon_url : defaultAppAvatar,
        iconTitle: auth.app.name,
        isBot: !!auth.app,
        botIcon: auth.app.is_verified ? verifiedBotIcon : botIcon,
        iconSubTitle: auth.app.app_number,
        showQRCode: true,
        qrCodeIcon,
        tip: i18n.t('code.oauth.mobile.scan'),
        mixinURL
      };
      $('.oauth.code.layout #layout-container').html(self.template(data));
      if (!platform) $('.main').attr('class', 'main browser');
      initQRCode(mixinURL);
    }

    setTimeout(() => {
      self.api.code.fetch((resp) => {
        if (!resp.error) self.renderAuthorization(resp.data);
      }, auth.code_id);
    }, 1000);
  }
};

export default Code;
