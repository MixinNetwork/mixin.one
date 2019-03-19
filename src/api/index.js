import $ from 'jquery';
import Noty from 'noty';
import MixinUtils from '../utils/mixin.js';
import Account from './account.js';
import Network from './network.js';
import Code from './code.js';
import Authorization from './authorization.js';
import Payment from './payment.js';

function API(router, root, blazeRoot) {
  this.router = router;
  this.root = root;
  this.account = new Account(this);
  this.network = new Network(this);
  this.code = new Code(this);
  this.authorization = new Authorization(this, blazeRoot);
  this.payment = new Payment(this);
  this.Error404 = require('../404.html');
  this.ErrorGeneral = require('../error.html');
}

API.prototype = {
  request: function(method, path, params, callback) {
    const self = this;
    $.ajax({
      type: method,
      url: self.root + path,
      contentType: "application/json",
      data: JSON.stringify(params),
      beforeSend: function(xhr) {
        xhr.setRequestHeader("Authorization", "Bearer " + self.account.token());
        var conversationId = MixinUtils.conversationId();
        if (conversationId) {
          xhr.setRequestHeader("Mixin-Conversation-ID", conversationId);
        }
      },
      success: function(resp) {
        var consumed = false;
        if (typeof callback === 'function') {
          consumed = callback(resp);
        }
        if (!consumed && resp.error !== null && resp.error !== undefined) {
          self.error(resp);
        }
      },
      error: function(event) {
        self.error(event.responseJSON, callback);
      }
    });
  },

  externalRequest: function(method, path, callback) {
    const self = this;
    $.ajax({
      type: method,
      url: path,
      contentType: "application/json",
      success: function(resp) {
        var consumed = false;
        if (typeof callback === 'function') {
          consumed = callback(resp);
        }
      }
    });
  },

  error: function(resp, callback) {
    if (resp == null || resp == undefined || resp.error === null || resp.error === undefined) {
      resp = {error: { code: 0, description: 'unknown error' }};
    }

    var consumed = false;
    if (typeof callback === 'function') {
      consumed = callback(resp);
    }
    if (!consumed) {
      switch (resp.error.code) {
        case 401:
          this.account.clear();
          this.router.replace('/oauth/authorize?client_id=5aa9ae63-9370-4ca7-ac64-87cabf6f2339&scope=PROFILE:READ&response_type=code&redirect_uri=https://mixin.one/oauth/callback');
          break;
        case 404:
          $('#layout-container').html(this.Error404());
          $('body').attr('class', 'error layout');
          this.router.updatePageLinks();
          break;
        default:
          if ($('#layout-container > .spinner-container').length === 1) {
            $('#layout-container').html(this.ErrorGeneral());
            $('body').attr('class', 'error layout');
            this.router.updatePageLinks();
          }
          this.notify('error', i18n.t('general.errors.' + resp.error.code));
          break;
      }
    }
  },

  notify: function(type, text) {
    new Noty({
      type: type,
      layout: 'top',
      theme: 'nest',
      text: text,
      timeout: 3000,
      progressBar: false,
      queue: 'api',
      killer: 'api',
      force: true,
      animation: {
        open: 'animated bounceInDown',
        close: 'animated slideOutUp noty'
      }
    }).show();
  }
};

export default API;
