import './code.scss';
import $ from 'jquery';
import QRious from 'qrious';
import URLUtils from '../utils/url.js';
import MixinUtils from '../utils/mixin.js';

function OAuth(router, api) {
  this.router = router;
  this.api = api;
  this.ErrorGeneral = require('../error.html');
  this.templateCode = require('./code.html');
}

OAuth.prototype = {
  authorize: function () {
    const self = this;
    const clientId = URLUtils.getUrlParameter("client_id");
    const scope = URLUtils.getUrlParameter("scope");
    const codeChallenge = URLUtils.getUrlParameter("code_challenge");
    const state = URLUtils.getUrlParameter("state");
    const returnTo = URLUtils.getUrlParameter("return_to");
    self.api.authorization.connect(function (resp) {
      if (resp.error) {
        self.api.notify('error', i18n.t('general.errors.' + resp.error.code));
        if (resp.error.code === 400 || resp.error.code === 10002) {
          $('#layout-container').html(self.ErrorGeneral());
          $('body').attr('class', 'error layout');
          self.router.updatePageLinks();
          return true;
        }
        return false;
      }

      var auth = resp.data;
      if (!auth) {
        return false;
      }
      if (auth.authorization_code.length > 16) {
        var redirectUri = auth.app.redirect_uri + '?code=' + auth.authorization_code + '&state=' + state;
        if (returnTo && returnTo.length > 0) {
          redirectUri = redirectUri + '&return_to=' + encodeURIComponent(returnTo);
        }
        window.location.replace(redirectUri);
        return true;
      }
      if (auth.scopes.length === 0) {
        var redirectUri = auth.app.redirect_uri + '?error=access_denied&state=' + state;
        if (returnTo && returnTo.length > 0) {
          redirectUri = redirectUri + '&return_to=' + encodeURIComponent(returnTo);
        }
        window.location.replace(redirectUri);
        return true;
      }
      if ($('.oauth.code.layout').data('code-id') === auth.code_id) {
        return false;
      }
      $('body').attr('class', 'oauth code layout');
      $('body').attr('data-code-id', auth.code_id);
      if (MixinUtils.environment()) {
        window.location.replace('mixin://codes/' + auth.code_id);
        return false;
      }
      auth['logoURL'] = require('../home/logo.png').default;
      $('.oauth.code.layout #layout-container').html(self.templateCode(auth));
      new QRious({
        element: document.getElementById('mixin-code'),
        backgroundAlpha: 0,
        foreground: '#00B0E9',
        value: WEB_ROOT + '/codes/' + auth.code_id,
        level: 'H',
        size: 500
      });
      return false;
    }, clientId, scope, codeChallenge);
  },

  callback: function () {
    const self = this;
    const authorizationCode = URLUtils.getUrlParameter("code");
    const authorizationError = URLUtils.getUrlParameter("error");
    if (authorizationError === 'access_denied') {
      self.api.notify('error', i18n.t('general.errors.403'));
      self.router.replace('/');
      return;
    }
    self.api.authorization.requestAccessToken(function (resp) {
      if (resp.error && resp.error.code === 403) {
        self.api.notify('error', i18n.t('general.errors.403'));
        self.router.replace('/');
        return true;
      }
      if (resp.error) {
        return false;
      }
      self.router.replace('/receipts/new');
    }, authorizationCode);
  }
};

export default OAuth;
