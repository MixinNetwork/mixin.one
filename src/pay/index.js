import './index.scss';
import $ from 'zepto-webpack';
import { Decimal } from 'decimal.js';
import { v4 as uuidv4 } from 'uuid';
import MixinUtils from '../utils/mixin.js';
import AddressUtils from '../utils/address.js';
import URLUtils from '../utils/url.js';
import { initQRCode } from '../utils/modal.js';
import arrow from '../assets/icons/arrow.svg';
import blueLogo from '../assets/icons/logo.png';
import qrCodeIcon from '../assets/icons/qrcode.svg';
import completeIcon from '../assets/icons/payment_complete.svg';
import redirectingIcon from '../assets/icons/redirecting.svg';
import transferAvatar from '../assets/icons/transferAvatar.svg';

var validate = require('uuid-validate');

function Pay(router, api) {
  this.router = router;
  this.api = api;
  this.ErrorGeneral = require('../error.html');
  this.template = require('../code/index.html');
  this.templateNew = require('./new.html');
}

Pay.prototype = {
  new: function () {
    const self = this;
    const defaultIcon = "https://images.mixin.one/yH_I5b0GiV2zDmvrXRyr3bK5xusjfy5q7FX3lw3mM2Ryx4Dfuj6Xcw8SHNRnDKm7ZVE3_LvpKlLdcLrlFQUBhds=s128";
    let data = {
      arrowURL: arrow
    };
    self.api.account.check(function (user) {
      if (!user.data) {
        return
      }
      data.user = user.data;
      self.api.account.assets(function (assets) {
        if (!assets.data) {
          return
        }
        data.assets = assets.data.sort((i, j) => {
          if (new Decimal(i.price_usd).times(i.balance).cmp(new Decimal(j.price_usd).times(j.balance)) === -1) {
            return 1;
          }
          if (new Decimal(i.price_usd).times(i.balance).cmp(new Decimal(j.price_usd).times(j.balance)) === 1) {
            return -1;
          }
          if (i.icon_url === defaultIcon && j.icon_url !== defaultIcon) {
            return 1;
          }
          if (i.icon_url !== defaultIcon && j.icon_url === defaultIcon) {
            return -1;
          }
          if ((new Decimal(i.balance)).cmp(j.balance) === -1) {
            return 1;
          }
          if ((new Decimal(i.balance)).cmp(j.balance) === 1) {
            return -1;
          }
          return 0;
        });
        if (data.assets.length > 0) {
          data.asset = data.assets[0];
          let assetId = window.localStorage.getItem('selected_id');
          if (!!assetId) {
            data.asset = data.assets.find((e) => {
              return e.asset_id === assetId;
            });
          }
        }
        $('body').attr('class', 'pay code layout');
        $('#layout-container').html(self.templateNew(data));
        $('.asset.selected').on('click', () => {
          $('.modal').show();
        });
        $('.close', '.modal').on('click', () => {
          $('.modal').hide();
        });
        $('li', '.assets').on('click', (e) => {
          window.localStorage.setItem('selected_id', $(e.currentTarget).data('id'));
          window.location = '/receipts/new';
        });
        $('.receipt-form').on('submit', (e) => {
          e.preventDefault();
          let amount = $('.amount').val();
          let memo = $('.memo').val().trim();
          let path = `/pay/${data.user.user_id}?asset=${data.asset.asset_id}&amount=${amount}&memo=${encodeURI(memo)}&trace=${uuidv4()}`;
          let platform = MixinUtils.environment();
          let route = `https://${window.location.host}${path}`;
          if (platform == 'Android' || platform == 'iOS') {
            window.location = `https://mixin.one/send?text=${encodeURIComponent(route)}`;
          } else {
            window.location = route;
          }
        });
      });
    });
  },

  render: function () {
    const self = this;
    const recipientId = URLUtils.getUrlParameter("recipient");
    const assetId = URLUtils.getUrlParameter("asset");
    const amount = URLUtils.getUrlParameter("amount");
    const traceId = URLUtils.getUrlParameter("trace");
    const memo = URLUtils.getUrlParameter("memo");
    if (!self.validateParams(recipientId, assetId, amount, traceId, memo)) {
      self.api.notify('error', i18n.t('general.errors.10002'));
      $('#layout-container').html(self.ErrorGeneral());
      $('body').attr('class', 'error layout');
      self.router.updatePageLinks();
      return true;
    }
    self.api.network.assetsShow((resp) => {
      var preloadImage = new Image();
      preloadImage.src = resp.data.icon_url;
      const params = {
        isInitialized: false,
        recipientId, assetId, amount, traceId, memo
      }
      self.refreshPayment(params);
    }, assetId)
  },

  renderNew: function(address) {
    const self = this;
    const assetId = URLUtils.getUrlParameter("asset");
    const amount = URLUtils.getUrlParameter("amount");
    const memo = URLUtils.getUrlParameter("memo");
    let traceId = URLUtils.getUrlParameter("trace");
    if (traceId == "") {
      traceId = uuidv4();
    }
    if (!self.validateAddress(address) || !self.validateNewParams(assetId, amount, traceId, memo)) {
      self.api.notify('error', i18n.t('general.errors.10002'));
      $('#layout-container').html(self.ErrorGeneral());
      $('body').attr('class', 'error layout');
      self.router.updatePageLinks();
      return true;
    }
    self.api.network.assetsShow((resp) => {
      if (resp.error && (resp.error.code === 404)) resp.error = undefined;
      const asset = resp.data;
      if (asset) {
        var preloadImage = new Image();
        preloadImage.src = asset.icon_url;
      }
      const params = {
        isInitialized: false,
        address, asset, amount, traceId, memo
      };
      self.refreshSafePayment(params);
    }, assetId)
  },

  refreshPayment: function (params) {
    const { isInitialized, recipientId, assetId, amount, traceId, memo } = params;
    const self = this;
    self.api.payment.validate(function (resp) {
      if (resp.error) {
        if (resp.error.code === 400 || resp.error.code === 10002) {
          $('#layout-container').html(self.ErrorGeneral());
          $('body').attr('class', 'error layout');
          self.router.updatePageLinks();
        }
        if (!isInitialized) {
          return false;
        }
        setTimeout(function() {
          self.refreshPayment(params);
        }, 1500);
      }
      const payment = resp.data;
      const fullName = payment.recipient.full_name.trim();
      const useAmount = new Decimal(payment.asset.price_usd).times(payment.amount);
      const mixinURL = `mixin://pay${window.location.search}`;
      const qrCodeURL = `https://mixin.one/pay${self.queryFilter()}`;
      const data = {
        logoURL: blueLogo,
        title: i18n.t('pay.recipient.title', { name: fullName }),
        hasSubTitle: true,
        subTitle: payment.recipient.identity_number,
        hasMemo: !!memo,
        memo,
        iconUrl: payment.asset.icon_url,
        iconTitle: `${payment.amount} ${payment.asset.symbol}`,
        iconSubTitle: `${useAmount.toNumber().toFixed(2).toString()} USD`,
        showQRCode: true,
        qrCodeIcon,
        tip: i18n.t('code.payment.mobile.scan'),
        complete: payment.status === 'paid',
        successURL: completeIcon,
        mixinURL,
        redirectingIcon
      };
      if (!isInitialized) {
        params.isInitialized = true;
        let st = 'Pay ' + data.iconTitle  + ' to ' + fullName;
        $('title').html(st + ' | Mixin - Secure Digital Assets and Messages on Mixin');
        $('body').attr('class', 'pay code layout');
        $('#layout-container').html(self.template(data));
        const platform = MixinUtils.environment();
        if (!platform) $('.main').attr('class', 'main browser');
        if (data.hasMemo) $('.scan-container').attr('class', 'scan-container new-margin');
        initQRCode(qrCodeURL);
      }
      self.router.updatePageLinks();
      if (payment.status === 'paid') {
        data.complete = true;
        $('#layout-container').html(self.template(data));
        const platform = MixinUtils.environment();
        if (!platform) $('.main').attr('class', 'main browser');
        if (data.hasMemo) $('.scan-container').attr('class', 'scan-container new-margin');
        self.redirect();
        return true;
      };
      setTimeout(function() {
        self.refreshPayment(params);
      }, 1500);
    }, recipientId, assetId, amount, traceId);
  },

  refreshSafePayment: function (params) {
    const self = this;
    const { isInitialized, address, asset, amount, traceId, memo } = params;
    self.api.payment.fetchSafeTrace(function (resp) {
      if (resp.error) {
        if (resp.error.code === 404) {
          resp.error = undefined;
        } else {
          if (resp.error.code === 400 || resp.error.code === 10002) {
            $('#layout-container').html(self.ErrorGeneral());
            $('body').attr('class', 'error layout');
            self.router.updatePageLinks();
          }
          if (!isInitialized) {
            return false;
          }
        }
      }

      const payment = resp.data;
      const mixinURL = `mixin://mixin.one${window.location.pathname}${window.location.search}`;
      const qrCodeURL = `https://mixin.one${window.location.pathname}${self.queryFilter()}`;
      const data = {
        logoURL: blueLogo,
        title: i18n.t('schema.title.transfer'),
        hasSubTitle: true,
        subTitle: address.slice(0, 6) + '...' + address.slice(-6),
        hasMemo: !!memo,
        memo,
        showQRCode: true,
        qrCodeIcon,
        tip: i18n.t('code.payment.mobile.scan'),
        successURL: completeIcon,
        mixinURL,
        redirectingIcon
      };
      if (asset && amount) {
        const useAmount = new Decimal(asset.price_usd).times(amount);
        data.iconUrl = asset.icon_url;
        data.iconTitle = `${amount} ${asset.symbol}`;
        data.iconSubTitle = `${useAmount.toNumber().toFixed(2).toString()} USD`;
      } else {
        data.basic = true;
        data.hasAvatar = true;
        data.avatarUrl = transferAvatar;
      }

      if (!isInitialized) {
        params.isInitialized = true;
        let st = 'Pay ' + data.iconTitle  + ' to ' + address;
        let bodyClass = 'pay code layout';
        if (!asset) {
          st = 'Pay to ' + address;
          bodyClass += ' schema';
        }
        $('title').html(st + ' | Mixin - Secure Digital Assets and Messages on Mixin');
        $('body').attr('class', bodyClass);
        $('#layout-container').html(self.template(data));
        const platform = MixinUtils.environment();
        if (!platform) $('.main').attr('class', 'main browser');
        if (data.hasMemo) $('.scan-container').attr('class', 'scan-container new-margin');
        initQRCode(qrCodeURL);
      }
      self.router.updatePageLinks();

      if (payment && payment.state !== 'unspent') {
        data.complete = true;
        $('#layout-container').html(self.template(data));
        const platform = MixinUtils.environment();
        if (!platform) $('.main').attr('class', 'main browser');
        if (data.hasMemo) $('.scan-container').attr('class', 'scan-container new-margin');
        self.redirect();
        return true;
      }
      setTimeout(function() {
        self.refreshSafePayment(params);
      }, 1500);
    }, traceId);
  },

  redirect: function () {
    const returnTo = URLUtils.getUrlParameter("return_to");
    if (returnTo) {
      try {
        const uri = new URL(decodeURIComponent(returnTo));
        if (uri.protocol === "http:" || uri.protocol === "https:") {
          $("#redirect-container").toggleClass('active', true);
          const timer = setTimeout(() => {
            window.location.replace(returnTo);
          }, 1500);
          $('#cancel-redirect-btn').on('click', function() {
            clearTimeout(timer);
            $("#redirect-container").toggleClass('active', false);
          });
        }
      } catch (err) {
        console.log("invalid return_to", err);
      }
    }
  },

  validateParams: function(recipientId, assetId, amount, traceId, memo) {
    if (!validate(recipientId)) {
      return false;
    }
    if (!validate(assetId)) {
      return false;
    }
    if (!validate(traceId)) {
      return false;
    }
    if (memo && memo.length > 200) {
      return false;
    }
    return parseFloat(amount) > 0;
  },

  validateNewParams: function(assetId, amount, traceId, memo) {
    if (assetId && !validate(assetId)) {
      return false;
    }
    if (memo && memo.length > 200) {
      return false;
    }
    if (amount && parseFloat(amount) <= 0) {
      return false;
    }
    if (!validate(traceId)) {
      return false;
    }
    return true;
  },

  validateAddress: function (address) {
    const prefix = address.slice(0, 3);
    switch (prefix) {
      case "XIN":
        return AddressUtils.verifyMainnetAddress(address);
      case "MIX":
        return AddressUtils.verifyMixAddress(address);
      default:
        return validate(address);
    }
  },

  queryFilter: function() {
    const query = window.location.search.slice(1);
    const items = query.split("&").filter(item => item.split("=")[0] !== 'return_to');
    return `?${items.join('&')}`;
  }
};

export default Pay;
