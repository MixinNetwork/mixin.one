import $ from 'jquery';
import QRCode from 'qrcode';
import { Decimal } from "decimal.js";
import validate from 'uuid-validate';
import URLUtils from '../utils/url.js';
import MixinUtils from '../utils/mixin.js';
import blueLogo from '../assets/icons/logo.png';
import userdefaultAvatar from '../assets/icons/userAvatar.svg';
import appDefaultAvatar from '../assets/icons/appAvatar.svg';
import conversationAvatar from '../assets/icons/conversationAvatar.svg';
import shareAvatar from '../assets/icons/sendAvatar.svg';
import addressAvatar from '../assets/icons/addressAvatar.svg';
import transferAvatar from '../assets/icons/transferAvatar.svg';
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

    if (type === 'withdrawal') return this.renderWithdrawal();

    if (['apps', 'users', 'conversations', 'transfer', 'send', 'address'].includes(type))
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
    const mixinURL = self.getMixinUrl(type, id);
    const data = {
      logoURL: blueLogo,
      basic: true,
      hasAvatar: true,
      avatarUrl: self.getAvatar(type),
      title: type === 'address' 
        ? i18n.t(`schema.title.${type}.${action ? 'delete' : "add"}`) 
        : i18n.t(`schema.title.${type}`),
      subTitle: self.getSubTitle(type, id),
      complete: false,
      qrCodeIcon,
      mixinURL
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
    if (['apps', 'users', 'conversations', 'send'].includes(type)) {
      $('.subTitle').attr('class', 'subTitle new-margin');
    } else {
      self.initQRCode(mixinURL);
    }
    if (!platform) $('.main').attr('class', 'main browser');
    self.router.updatePageLinks();
  },
  renderWithdrawal: function () {
    const self = this;
    const isValid = self.checkParams('withdrawal');
    if (!isValid) return this.renderError();
    $('body').attr('class', 'withdrawal schema code layout');
    
    const platform = MixinUtils.environment();
    const address = URLUtils.getUrlParameter("address");
    const asset_id = URLUtils.getUrlParameter("asset");
    const amount = URLUtils.getUrlParameter("amount");
    self.api.network.assetsShow(function(resp) {
      if (resp.error) return;
      const asset = resp.data;
      const preloadImage = new Image();
      preloadImage.src = asset.icon_url;
      preloadImage.onload = function() {
        const withdrawalInfo = {
          logoURL: blueLogo,
          hasAvatar: true,
          avatarUrl: addressAvatar,
          title: i18n.t(`schema.title.withdrawal`),
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
        self.initQRCode(withdrawalInfo.mixinURL);
        if (!platform) $('.main').attr('class', 'main browser');
        self.router.updatePageLinks();
      };
    }, asset_id)
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
      case "transfer": {
        return validate(id);
      }
      case "send": {
        const categories = ['text', 'image', 'contact', 'app_card', 'live', 'post', 'sticker'];
        const category = URLUtils.getUrlParameter("category");
        const data = URLUtils.getUrlParameter("data");
        if (!categories.includes(category) || !data) return false;
        break;
      }
      case "address": {
        const action = URLUtils.getUrlParameter("action");
        const address = URLUtils.getUrlParameter("address");
        const asset = URLUtils.getUrlParameter("asset");
        const label = URLUtils.getUrlParameter("label");
        const destination = URLUtils.getUrlParameter("destination");
        const info = action ? address : destination;
        if (
          !info
          || !asset || !validate(asset)
          || (!action && !label) 
          || (!!action && (action !== 'delete' || !validate(address))) 
        ) return false;
        break;
      }
      case 'withdrawal': {
        const address = URLUtils.getUrlParameter("address");
        const asset_id = URLUtils.getUrlParameter("asset");
        const amount = URLUtils.getUrlParameter("amount");
        const trace_id = URLUtils.getUrlParameter("trace");
        if (!address || !asset_id || !amount || !trace_id || !validate(address) || !validate(asset_id) || !validate(trace_id))
          return false;
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
      'transfer': transferAvatar,
      'address': addressAvatar,
    };
    return map[type];
  },
  getSubTitle: function (type, id) {
    if (type === 'send') return URLUtils.getUrlParameter("category");

    if (type === 'address') {
      const action = URLUtils.getUrlParameter("action");
      const destination = URLUtils.getUrlParameter("destination");
      const address = URLUtils.getUrlParameter("address");
      id = action ? address : destination;
    }

    return id.slice(0, 6) + '...' + id.slice(-4);
  },
  getMixinUrl: function (type, id) {
    return id 
      ? `mixin://${type}/${id}${location.search}` 
      : `mixin://${type}${location.search}`;
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
    });
    $('.qrcode-modal').on('click', function() {
      $(this).toggleClass('active', 'false');
    });
  }
};

export default Schema;
