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
          let path = `/pay?recipient=${data.user.user_id}&asset=${data.asset.asset_id}&amount=${amount}&memo=${encodeURI(memo)}&trace=${uuidv4()}`;
          let platform = MixinUtils.environment();
          let route = `https://${window.location.host}${path}`;
          if (platform == 'Android' || platform == 'iOS') {
            window.location = `mixin://mixin.one/send?text=${encodeURIComponent(route)}`;
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
    const traceId = URLUtils.getUrlParameter("trace");
    const memo = URLUtils.getUrlParameter("memo");
    if (!self.validateAddress(address) || !self.validateNewParams(assetId, amount, traceId, memo)) {
      self.api.notify('error', i18n.t('general.errors.10002'));
      $('#layout-container').html(self.ErrorGeneral());
      $('body').attr('class', 'error layout');
      self.router.updatePageLinks();
      return true;
    }
    self.api.network.assetsShow((resp) => {
      if (resp.error && (resp.error.code === 400 || resp.error.code === 10002)) {
        $('#layout-container').html(self.ErrorGeneral());
        $('body').attr('class', 'error layout');
        self.router.updatePageLinks();
        return false;
      }
      const asset = resp.data;
      var preloadImage = new Image();
      preloadImage.src = asset.icon_url;

      const fullName = address;
      const useAmount = new Decimal(asset.price_usd).times(amount);
      const mixinURL = `mixin://mixin.one/pay${window.location.search}`;
      const data = {
        logoURL: blueLogo,
        title: i18n.t('pay.recipient.title', { name: fullName }),
        hasSubTitle: false,
        hasMemo: !!memo,
        memo,
        iconUrl: asset.icon_url,
        iconTitle: `${amount} ${asset.symbol}`,
        iconSubTitle: `${useAmount.toNumber().toFixed(2).toString()} USD`,
        showQRCode: true,
        qrCodeIcon,
        tip: i18n.t('code.payment.mobile.scan'),
        successURL: completeIcon,
        mixinURL
      };

      let st = 'Pay ' + data.iconTitle  + ' to ' + fullName;
      $('title').html(st + ' | Mixin - Secure Digital Assets and Messages on Mixin');
      $('body').attr('class', 'pay code layout');
      $('#layout-container').html(self.template(data));
      const platform = MixinUtils.environment();
      if (!platform) $('.main').attr('class', 'main browser');          
      if (data.hasMemo) $('.scan-container').attr('class', 'scan-container new-margin');
      initQRCode(mixinURL)
      self.router.updatePageLinks();
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
        mixinURL
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
        initQRCode(mixinURL)
      }
      self.router.updatePageLinks();
      if (payment.status === 'paid') {
        data.complete = true;
        $('#layout-container').html(self.template(data));
        if (!platform) $('.main').attr('class', 'main browser'); 
        if (data.hasMemo) $('.scan-container').attr('class', 'scan-container new-margin'); 
        return true
      };
      setTimeout(function() {
        self.refreshPayment(params);
      }, 1500);
    }, recipientId, assetId, amount, traceId);
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
    if (traceId && !validate(traceId)) {
      return false;
    }
    if (memo && memo.length > 200) {
      return false;
    }
    return parseFloat(amount) > 0;
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
  }
};

export default Pay;
