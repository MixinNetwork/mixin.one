import $ from 'zepto-webpack';
import validate from 'uuid-validate';
import URLUtils from '../utils/url.js';
import MixinUtils from '../utils/mixin.js';
import { initQRCode } from '../utils/modal.js';
import blueLogo from '../assets/icons/logo.png';
import userdefaultAvatar from '../assets/icons/userAvatar.svg';
import appDefaultAvatar from '../assets/icons/appAvatar.svg';
import conversationAvatar from '../assets/icons/conversationAvatar.svg';
import shareAvatar from '../assets/icons/sendAvatar.svg';
import qrCodeIcon from '../assets/icons/qrcode.svg';

function Schema(router, api) {
  this.router = router;
  this.api = api;
  this.template = require('../code/index.html');
  this.ErrorGeneral = require('../error.html');
}

Schema.prototype = {
  render: function (id) {
    const type = location.pathname.split('/')[1];
    if (['apps', 'users', 'conversations', 'send'].includes(type))
      return this.renderBasicSchema(type, id);

    return this.api.error({error: {code: 10002}});
  },

  renderBasicSchema: function (type, id) {
    const self = this;
    const isValid = self.checkParams(type, id);
    if (!isValid) return this.renderError();
    $('body').attr('class', `${type} schema code layout`);

    const platform = MixinUtils.environment();
    const action = URLUtils.getUrlParameter("action");
    const data = {
      logoURL: blueLogo,
      basic: true,
      hasAvatar: true,
      avatarUrl: self.getAvatar(type),
      title: type === 'address' 
        ? i18n.t(`schema.title.${type}.${action ? 'delete' : "add"}`) 
        : i18n.t(`schema.title.${type}`),
      subTitle: self.getSubTitle(type, id),
      qrCodeIcon,
    };

    if (['apps', 'users', 'conversations', 'send'].includes(type)) {
      const btn = self.getButtonInfo(type);
      data.showActionButton = true;
      data.actionText = btn.actionText;
      data.buttonIntro = btn.buttonIntro;
    } else {
      data.showQRCode = true;
      data.tip = type === 'address' 
        ? i18n.t(`schema.address.btn.intro.${action ? 'delete' : "add"}`) 
        : i18n.t("code.payment.mobile.scan");
    }
    $('#layout-container').html(self.template(data));
    $('.subTitle').attr('class', 'subTitle new-margin');
    if (!platform) $('.main').attr('class', 'main browser');
    self.router.updatePageLinks();
  },
  
  renderError: function () {
    this.api.notify('error', i18n.t('general.errors.10002'));
    $('#layout-container').html(this.ErrorGeneral());
    $('body').attr('class', 'error layout');
    this.router.updatePageLinks();
    return true;
  },

  checkParams: function (type, id) {
    switch (type) {
      case "apps": {
        const action = URLUtils.getUrlParameter("action");
        if ((!!action && action !== 'open') || !validate(id)) return false;
        break;
      }
      case "users": 
      case "conversations": 
      case "send": {
        const categories = ['text', 'image', 'contact', 'app_card', 'live', 'post', 'sticker'];
        const category = URLUtils.getUrlParameter("category");
        const data = URLUtils.getUrlParameter("data");
        if (!categories.includes(category) || !data) return false;
        break;
      }
      default:
        return false;
    };
    return true;
  },

  getAvatar: function (type) {
    const map = {
      'apps': appDefaultAvatar,
      'users': userdefaultAvatar,
      'conversations': conversationAvatar,
      'send': shareAvatar,
    };
    return map[type];
  },

  getSubTitle: function (type, id) {
    if (type === 'send') return URLUtils.getUrlParameter("category");

    return id.slice(0, 6) + '...' + id.slice(-4);
  },
  
  getButtonInfo: function (type) {
    const info = {};
    if (type === 'apps') {
        const action = URLUtils.getUrlParameter("action");
        info['actionText'] = i18n.t(`schema.${action === 'open' ? 'bot.btn.open' : 'btn.view'}`);
        info['buttonIntro'] = i18n.t(`schema.bot.btn.intro.${action === 'open' ? 'open' : 'view'}`);
        return info;
    } else if (type === 'users') {
      info['actionText'] = i18n.t('schema.btn.view');
      info['buttonIntro'] = i18n.t('schema.user.btn.intro.view');
      return info;
    } else if (type === 'conversations') {
      info['actionText'] = i18n.t('schema.conversation.btn.chat');
      info['buttonIntro'] = i18n.t('schema.conversation.btn.intro.chat');
      return info;
    } else {
      info['actionText'] = i18n.t('schema.send.btn.share');
      info['buttonIntro'] = i18n.t('schema.send.btn.intro.share');
      return info;
    }
  }
};

export default Schema;
