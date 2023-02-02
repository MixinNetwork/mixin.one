import $ from 'jquery';
import QRCode from 'qrcode';
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
import qrCodeIcon from '../code/qrcode.svg';

function Schema(router, api) {
  this.router = router;
  this.api = api;
  this.template = require('../code/index.html');
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
    $('body').attr('class', 'schema code layout');
    const appInfo = {
      logoURL: blueLogo,
      basic: true,
      hasAvatar: true,
      avatarUrl: appDefaultAvatar,
      title: "Bot",
      subTitle: id.slice(0, 6) + '...' + id.slice(-4),
      showActionButton: true,
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
    $('.subTitle').attr('class', 'subTitle new-margin');
    self.router.updatePageLinks();
  },
  renderUser: function (id) {
    const self = this;
    $('body').attr('class', 'schema code layout');
    if (!validate(id)) return this.renderError();
    const userInfo = {
      logoURL: blueLogo,
      basic: true,
      hasAvatar: true,
      avatarUrl: userdefaultAvatar,
      title: "User",
      subTitle: id.slice(0, 6) + '...' + id.slice(-4),
      showActionButton: true,
      buttonURL: `mixin://users/${id}`,
      actionText: i18n.t('schema.btn.view'),
      buttonIntro: i18n.t('schema.user.btn.intro.view')
    }
    $('#layout-container').html(self.template(userInfo));
    $('.subTitle').attr('class', 'subTitle new-margin');
    self.router.updatePageLinks();
  },
  renderConversation: function (id) {
    const self = this;
    if (!validate(id)) return this.renderError();
    $('body').attr('class', 'schema code layout');
    const conversationInfo = {
      logoURL: blueLogo,
      basic: true,
      hasAvatar: true,
      avatarUrl: conversationAvatar,
      title: "Conversation",
      subTitle: id.slice(0, 6) + '...' + id.slice(-4),
      showActionButton: true,
      buttonURL: `mixin://conversations/${id}${location.search}`,
      actionText: i18n.t('schema.conversation.btn.chat'),
      buttonIntro: i18n.t('schema.conversation.btn.intro.chat')
    }
    $('#layout-container').html(self.template(conversationInfo));
    $('.subTitle').attr('class', 'subTitle new-margin');
    self.router.updatePageLinks();
  },
  renderTransfer: function (id) {
    const self = this;
    const platform = MixinUtils.environment();
    if (!validate(id)) return this.renderError();
    $('body').attr('class', 'transfer schema code layout');
    const transferInfo = {
      logoURL: blueLogo,
      basic: true,
      hasAvatar: true,
      avatarUrl: transferAvatar,
      title: "Transfer",
      subTitle: id.slice(0, 6) + '...' + id.slice(-4),
      showQRCode: true,
      complete: false,
      qrCodeIcon,
      mixinURL: `mixin://transfer/${id}`,
      tip: i18n.t("code.payment.mobile.scan")
    }
    $('#layout-container').html(self.template(transferInfo));
    if (!platform) $('.main').attr('class', 'main browser');
    self.initQRCode(transferInfo.mixinURL)
    self.router.updatePageLinks();
  },
  renderSend: function () {
    const self = this;
    const platform = MixinUtils.environment();
    const categories = ['text', 'image', 'contact', 'app_card', 'live', 'post', 'sticker']
    const category = URLUtils.getUrlParameter("category");
    const data = URLUtils.getUrlParameter("data");
    if (!categories.includes(category) || !data) return this.renderError();

    $('body').attr('class', 'schema code layout');
    const shareInfo = {
      logoURL: blueLogo,
      basic: true,
      hasAvatar: true,
      avatarUrl: shareAvatar,
      title: "Share Message",
      subTitle: category,
      showActionButton: true,
      buttonURL: `mixin://send${location.search}`,
      actionText: i18n.t('schema.send.btn.share'),
      buttonIntro: i18n.t('schema.send.btn.intro.share')
    };
    $('#layout-container').html(self.template(shareInfo));
    if (!platform) $('.main').attr('class', 'main browser');
    $('.subTitle').attr('class', 'subTitle new-margin');
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
    $('body').attr('class', 'address schema code layout');
    const addressInfo = {
      logoURL: blueLogo,
      basic: true,
      hasAvatar: true,
      avatarUrl: addressAvatar,
      title: `${action ? 'Delete Address' : "Add Address"}`,
      subTitle: info.slice(0, 6) + '...' + info.slice(-4),
      showQRCode: true,
      complete: false,
      qrCodeIcon,
      tip: action ? i18n.t("schema.address.btn.intro.delete") : i18n.t("schema.address.btn.intro.add"),
      mixinURL: `mixin://address${location.search}`,
    };
    $('#layout-container').html(self.template(addressInfo));      
    if (!platform) $('.main').attr('class', 'main browser');
    self.initQRCode(addressInfo.mixinURL)
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
    $('body').attr('class', 'withdrawal schema code layout');
    self.api.network.assetsShow(function(resp) {
      if (resp.error) {
        return;
      }
      const asset = resp.data;
      const preloadImage = new Image();
      preloadImage.src = asset.icon_url;
      const withdrawalInfo = {
        logoURL: blueLogo,
        basic: window.innerWidth > 768,
        hasAvatar: true,
        avatarUrl: addressAvatar,
        title: "Withdraw",
        hasSubTitle: true,
        subTitle: address.slice(0, 6) + '...' + address.slice(-4),
        iconUrl: asset.icon_url,
        iconTitle: `${amount} ${asset.symbol}`,
        iconSubTitle: `${new Decimal(asset.price_usd).times(amount).toNumber().toFixed(2).toString()} USD`,
        showQRCode: true,
        qrCodeIcon,
        tip: i18n.t("schema.withdrawal.btn.intro"),
        mixinURL: `mixin://withdrawal${location.search}`,
      };
      $('#layout-container').html(self.template(withdrawalInfo));
      self.initQRCode(withdrawalInfo.mixinURL)
      if (!platform) $('.main').attr('class', 'main browser');
      $(window).on('resize', function() {
        if (window.innerWidth <= 768) withdrawalInfo.basic = false;
        else withdrawalInfo.basic = true;
        $('#layout-container').html(self.template(withdrawalInfo));
        self.initQRCode(withdrawalInfo.mixinURL)
        if (!platform) $('.main').attr('class', 'main browser');
      })
      self.router.updatePageLinks();
    }, asset_id)
  },
  renderError: function () {
    this.api.notify('error', i18n.t('general.errors.10002'));
    $('#layout-container').html(this.ErrorGeneral());
    $('body').attr('class', 'error layout');
    this.router.updatePageLinks();
    return true;
  },
  initQRCode: function (mixinURL) {
    QRCode.toCanvas(
      document.getElementById('qrcode'),
      mixinURL,
      {
        errorCorrectionLevel: "H",
        margin: 0,
        width: 140
      }
    );
    QRCode.toCanvas(
      document.getElementById('qrcode-modal'),
      mixinURL,
      {
        errorCorrectionLevel: "H",
        margin: 0,
        width: 188
      }
    );
    $('#qrcode-modal-btn').on('click', function() {
      $('.qrcode-modal').toggleClass('active', 'true');
    })
    $('.qrcode-modal').on('click', function(e) {
      $(this).toggleClass('active', 'false');
    })
  }
};

export default Schema;
