import $ from 'jquery';
import QRious from 'qrious';
import { Decimal } from "decimal.js";
import validate from 'uuid-validate';
import URLUtils from '../utils/url.js';
import MixinUtils from '../utils/mixin.js';
import blueLogo from '../home/logo.png';
import userdefaultAvatar from './userAvatar.svg';
import appDefaultAvatar from './appAvatar.svg';
import conversationAvatar from './conversationAvatar.svg';
import shareAvatar from './sendAvatar.svg';
import addressAvatar from './addressAvatar.svg';
import transferAvatar from './transferAvatar.svg';

function Schema(router, api) {
  this.router = router;
  this.api = api;
  this.template = require('./basic.html');
  this.scanTemplate = require('./scan.html');
  this.withdrawalTemplate = require('./withdrawal.html');
  this.ErrorGeneral = require('../error.html');
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
      case "transfer": 
        this.renderTransfer(id);
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
    if ((!!action && action !== 'open') || !validate(id)) return this.renderError();
    $('body').attr('class', 'schema static layout');
    const appInfo = {
      logoURL: blueLogo,
      avatarUrl: appDefaultAvatar,
      title: "Bot",
      info: id.slice(0, 6) + '...' + id.slice(-4),
      buttonURL: `mixin://apps/${id}${location.search}`
    }
    if (action === 'open') {
      appInfo['actionText'] = i18n.t("schema.bot.btn.open");
      appInfo['buttonIntro'] = i18n.t("schema.bot.btn.intro.open");
    } else {
      appInfo['actionText'] = i18n.t("schema.btn.view");
      appInfo['buttonIntro'] = i18n.t("schema.bot.btn.intro.view");
    }
    $('#layout-container').html(self.template(appInfo));
    $('.info').attr('class', 'info new-margin');
    self.router.updatePageLinks();
  },
  renderUser: function (id) {
    const self = this;
    $('body').attr('class', 'schema static layout');
    if (!validate(id)) return this.renderError();
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
    if (!validate(id)) return this.renderError();
    $('body').attr('class', 'schema static layout');
    const conversationInfo = {
      logoURL: blueLogo,
      avatarUrl: conversationAvatar,
      title: "Conversation",
      info: id.slice(0, 6) + '...' + id.slice(-4),
      buttonURL: `mixin://conversations/${id}${location.search}`,
      actionText: i18n.t('schema.conversation.btn.chat'),
      buttonIntro: i18n.t('schema.conversation.btn.intro.chat')
    }
    $('#layout-container').html(self.template(conversationInfo));
    $('.info').attr('class', 'info new-margin');
    self.router.updatePageLinks();
  },
  renderTransfer: function (id) {
    const self = this;
    const platform = MixinUtils.environment();
    if (!validate(id)) return this.renderError();
    $('body').attr('class', 'schema layout');
    const transferInfo = {
      logoURL: blueLogo,
      avatarUrl: transferAvatar,
      title: "Transfer",
      info: id.slice(0, 6) + '...' + id.slice(-4),
      mixinURL: `mixin://transfer/${id}`,
    }
    $('#layout-container').html(self.scanTemplate(transferInfo));
    if (!platform) $('.main').attr('class', 'main browser');
    new QRious({
      element: document.getElementById('qrcode'),
      backgroundAlpha: 0,
      value: transferInfo['mixinURL'],
      level: 'H',
      size: 500
    });
    self.router.updatePageLinks();
  },
  renderSend: function () {
    const self = this;
    const categories = ['text', 'image', 'contact', 'app_card', 'live', 'post']
    const category = URLUtils.getUrlParameter("category");
    const data = URLUtils.getUrlParameter("data");
    if (!categories.includes(category) || !data) return this.renderError();

    $('body').attr('class', 'schema static layout');
    const shareInfo = {
      logoURL: blueLogo,
      avatarUrl: shareAvatar,
      title: "Share Message",
      info: category,
      buttonURL: `mixin://send${location.search}`,
      actionText: i18n.t('schema.send.btn.share'),
      buttonIntro: i18n.t('schema.send.btn.intro.share')
    };
    $('#layout-container').html(self.template(shareInfo));
    $('.info').attr('class', 'info new-margin');
    self.router.updatePageLinks();
  },
  renderAddress: function () {
    const self = this;
    const platform = MixinUtils.environment();
    const asset = URLUtils.getUrlParameter("asset");
    const label = URLUtils.getUrlParameter("label");
    const action = URLUtils.getUrlParameter("action");
    const destination = URLUtils.getUrlParameter("destination");
    const address = URLUtils.getUrlParameter("address");
    const info = action ? address : destination;
    if (
      !info
      || !asset || !validate(asset)
      || (!action && !label) 
      || (!!action && (action !== 'delete' || !validate(address))) 
    ) return this.renderError();
    $('body').attr('class', 'schema layout');
    const addressInfo = {
      logoURL: blueLogo,
      avatarUrl: addressAvatar,
      title: `${action ? 'Delete Address' : "Add Address"}`,
      info: info.slice(0, 6) + '...' + info.slice(-4),
      mixinURL: `mixin://address${location.search}`,
    };
    $('#layout-container').html(self.scanTemplate(addressInfo));      
    if (!platform) $('.main').attr('class', 'main browser');
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
    const platform = MixinUtils.environment();
    const address = URLUtils.getUrlParameter("address");
    const asset_id = URLUtils.getUrlParameter("asset");
    const amount = URLUtils.getUrlParameter("amount");
    const trace_id = URLUtils.getUrlParameter("trace");
    if (!address || !asset_id || !amount || !trace_id || !validate(address) || !validate(asset_id) || !validate(trace_id)) 
      return this.renderError();
    $('body').attr('class', 'schema layout withdrawal');
    self.api.network.assetsShow(function(resp) {
      if (resp.error) {
        return;
      }
      const asset = resp.data;
      const withdrawalInfo = {
        logoURL: blueLogo,
        info: address.slice(0, 6) + '...' + address.slice(-4),
        assetUrl: asset.icon_url,
        tokenAmount: amount,
        usdAmount: `${new Decimal(asset.price_usd).times(amount).toNumber().toFixed(2).toString()} USD`,
        mixinURL: `mixin://withdrawal${location.search}`,
      };
      $('#layout-container').html(self.withdrawalTemplate(withdrawalInfo));
      if (!platform) $('.main').attr('class', 'main browser');
      new QRious({
        element: document.getElementById('qrcode'),
        backgroundAlpha: 0,
        value: withdrawalInfo['mixinURL'],
        level: 'H',
        size: 500
      });
      self.router.updatePageLinks();
    }, asset_id)
  },
  renderError: function () {
    this.api.notify('error', i18n.t('general.errors.10002'));
    $('#layout-container').html(this.ErrorGeneral());
    $('body').attr('class', 'error layout');
    this.router.updatePageLinks();
    return true;
  }
};

export default Schema;
