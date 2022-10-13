import './index.scss';
import $ from 'jquery';
import QRious from 'qrious';
import { Decimal } from 'decimal.js';
import { v4 as uuidv4 } from 'uuid';
import MixinUtils from '../utils/mixin.js';
import URLUtils from '../utils/url.js';
import arrow from './arrow.svg';
import blueLogo from './logo.png';
import complete from '../home/payment_complete.svg';

var validate = require('uuid-validate');

function Pay(router, api) {
  this.router = router;
  this.api = api;
  this.ErrorGeneral = require('../error.html');
  this.template = require('./index.html');
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
        $('body').attr('class', 'pay layout');
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
          if (platform == 'Android' || platform == 'iOS') {
            let route = `https://${window.location.host}${path}`;
            window.location = `mixin://send?text=${encodeURIComponent(route)}`;
          } else {
            self.router.replace(path);
          }
        });
      });
    });
  },

  render: function (id) {
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
    self.refreshPayment(recipientId, assetId, amount, traceId, memo);
  },

  refreshPayment: function (recipientId, assetId, amount, traceId, memo) {
    const self = this;
    self.api.payment.validate(function (resp) {
      if (resp.error) {
        if (resp.error.code === 400 || resp.error.code === 10002) {
          $('#layout-container').html(self.ErrorGeneral());
          $('body').attr('class', 'error layout');
          self.router.updatePageLinks();
        }
        return false;
      }
      var payment = resp.data;
      payment['params'] = window.location.search;
      payment['logoURL'] = blueLogo;
      payment['complete'] = payment.status === 'paid';
      payment['fullName'] = payment.recipient.full_name.trim();
      payment['info'] = payment.recipient.identity_number;
      payment['hasMemo'] = !!memo;
      payment['memo'] = memo;
      payment['successURL'] = complete;
      payment['assetUrl'] = payment.asset.icon_url;
      payment['tokenAmount'] = `${payment.amount} ${payment.asset.symbol}`;
      const useAmount = new Decimal(payment.asset.price_usd).times(payment.amount);
      payment['usdAmount'] = `${useAmount.toNumber().toFixed(2).toString()} USD`;
      $('body').attr('class', 'pay layout');
      $('#layout-container').html(self.template(payment));
      new QRious({
        element: document.getElementById('qrcode'),
        backgroundAlpha: 0,
        value: window.location.toString().replace(window.location.host, "mixin.one"),
        level: 'H',
        size: 500
      });
      self.router.updatePageLinks();
      if (payment.complete) {
        return true;
      }
      setTimeout(function() {
        self.refreshPayment(recipientId, assetId, amount, traceId, memo);
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
  }
};

export default Pay;
