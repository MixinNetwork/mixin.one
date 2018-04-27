import './index.scss';
import $ from 'jquery';
import QRious from 'qrious';
import URLUtils from '../utils/url.js';
var validate = require('uuid-validate');

function Pay(router, api) {
  this.router = router;
  this.api = api;
  this.ErrorGeneral = require('../error.html');
  this.template = require('./index.html');
}

Pay.prototype = {
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
      payment['logoURL'] = require('../home/logo.png');
      payment['isPaid'] = payment.status === 'paid';
      $('body').attr('class', 'pay layout');
      $('#layout-container').html(self.template(payment));
      new QRious({
        element: document.getElementById('mixin-code'),
        backgroundAlpha: 0,
        foreground: '#00B0E9',
        value: window.location.toString(),
        level: 'H',
        size: 500
      });
      self.router.updatePageLinks();
      if (payment.isPaid) {
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
    if (memo && memo.length > 32) {
      return false;
    }
    return parseFloat(amount) > 0;
  }
};

export default Pay;
