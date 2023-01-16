import $ from 'jquery';
import QRious from 'qrious';
import URLUtils from '../utils/url.js';
import blueLogo from '../home/logo.png';
import userdefaultAvatar from './userAvatar.svg';
import appDefaultAvatar from './appAvatar.svg';
import shareAvatar from './sendAvatar.svg';
import addressAvatar from './addressAvatar.svg';

function Schema(router, api) {
  this.router = router;
  this.api = api;
  this.template = require('./basic.html');
  this.scanTemplate = require('./scan.html');
}

Schema.prototype = {
  render: function (id) {
    const type = location.pathname.split('/')[1];
    switch (type) {
      case "apps":
        this.renderApp(id);
        break;
      case "users": 
        this.renderUser(id);
        break;
      case "conversations": 
        this.renderConversation(id);
        break;
      case "send":
        this.renderSend();
        break;
      case "address":
        this.renderAddress();
        break;
      case "withdrawal":
        this.renderWithdrawal();
        break;
      default:
        this.api.error({error: {code: 10002}});
    }
  },
  renderApp: function (id) {
    const self = this;
    const action = URLUtils.getUrlParameter("action");
    $('body').attr('class', 'schema layout');
    const appInfo = {
      logoURL: blueLogo,
      avatarUrl: appDefaultAvatar,
      title: "Bot",
      info: id.slice(0, 6) + '...' + id.slice(-4),
    }
    if (action === 'open') {
      appInfo['actionText'] = i18n.t("schema.bot.btn.open");
      appInfo['buttonIntro'] = i18n.t("schema.bot.btn.intro.open");
      appInfo['buttonURL'] = `mixin://apps/${id}${location.search}`;
    } else {
      appInfo['actionText'] = i18n.t("schema.btn.view");
      appInfo['buttonIntro'] = i18n.t("schema.bot.btn.intro.view");
      appInfo['buttonURL'] = `mixin://apps/${id}`;
    }
    $('#layout-container').html(self.template(appInfo));
    $('.info').attr('class', 'info new-margin');
    self.router.updatePageLinks();
  },
  renderUser: function (id) {
    const self = this;
    $('body').attr('class', 'schema layout');
    const userInfo = {
      logoURL: blueLogo,
      avatarUrl: userdefaultAvatar,
      title: "User",
      info: id.slice(0, 6) + '...' + id.slice(-4),
      buttonURL: `mixin://users/${id}`,
      actionText: i18n.t('schema.btn.view'),
      buttonIntro: i18n.t('schema.user.btn.intro.view')
    }
    $('#layout-container').html(self.template(userInfo));
    $('.info').attr('class', 'info new-margin');
    self.router.updatePageLinks();
  },
  renderConversation: function (id) {
    const self = this;
    $('body').attr('class', 'schema layout');
    const conversationInfo = {
      logoURL: blueLogo,
      avatarUrl: userdefaultAvatar,
      title: "Conversation",
      info: id.slice(0, 6) + '...' + id.slice(-4),
      buttonURL: `mixin://conversations/${id}`,
      actionText: i18n.t('schema.conversation.btn.chat'),
      buttonIntro: i18n.t('schema.conversation.btn.intro.chat')
    }
    $('#layout-container').html(self.template(conversationInfo));
    $('.info').attr('class', 'info new-margin');
    self.router.updatePageLinks();
  },
  renderSend: function () {
    // todo: snapshot
    const self = this;
    const categories = ['text', 'image', 'contact', 'app_card', 'live', 'post']
    const category = URLUtils.getUrlParameter("category");
    if (!categories.includes(category)) self.api.error({error: {code: 10002}});

    $('body').attr('class', 'schema layout');
    const shareInfo = {
      logoURL: blueLogo,
      avatarUrl: shareAvatar,
      title: "Share Message",
      info: category,
      buttonURL: `mixin://apps/send${location.search}`,
      actionText: i18n.t('schema.send.btn.share'),
      buttonIntro: i18n.t('schema.send.btn.intro.share')
    };
    $('#layout-container').html(self.template(shareInfo));
    $('.info').attr('class', 'info new-margin');
    self.router.updatePageLinks();
  },
  renderAddress: function () {
    const self = this;
    const action = URLUtils.getUrlParameter("action");
    const destination = URLUtils.getUrlParameter("destination");
    const address = URLUtils.getUrlParameter("address");
    if (!!action && action !== 'delete') self.api.error({error: {code: 10002}});

    $('body').attr('class', 'schema layout');
    const info = action ? address : destination;
    const addressInfo = {
      logoURL: blueLogo,
      avatarUrl: addressAvatar,
      title: `${action ? 'Delete Address' : "Add Address"}`,
      info: info.slice(0, 6) + '...' + info.slice(-4),
      mixinURL: `mixin://address${location.search}`,
    };
    $('#layout-container').html(self.scanTemplate(addressInfo));
    new QRious({
      element: document.getElementById('qrcode'),
      backgroundAlpha: 0,
      value: addressInfo['mixinURL'],
      level: 'H',
      size: 500
    });
    self.router.updatePageLinks();
  },
  renderWithdrawal: function () {
    const self = this;
    const address = URLUtils.getUrlParameter("address");
    $('body').attr('class', 'schema layout');
    const withdrawalInfo = {
      logoURL: blueLogo,
      avatarUrl: shareAvatar,
      title: `Send to `, // todo: fix this
      info: address.slice(0, 6) + '...' + address.slice(-4),
      mixinURL: `mixin://withdrawal${location.search}`,
    };
    $('#layout-container').html(self.template(shareInfo));
    new QRious({
      element: document.getElementById('qrcode'),
      backgroundAlpha: 0,
      value: withdrawalInfo['mixinURL'],
      level: 'H',
      size: 500
    });
    self.router.updatePageLinks();

  }
};

export default Schema;