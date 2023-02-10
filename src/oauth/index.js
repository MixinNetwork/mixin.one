import '../code/index.scss';
import $ from 'jquery';
import QRCode from 'qrcode';
import URLUtils from '../utils/url.js';
import MixinUtils from '../utils/mixin.js';
import blueLogo from '../assets/icons/logo.png';
import defaultAppAvatar from '../assets/icons/appAvatar.svg';
import botIcon from '../assets/icons/robot.svg';
import verifiedBotIcon from '../assets/icons/verifiedBot.svg';
import qrCodeIcon from '../assets/icons/qrcode.svg';

function OAuth(router, api) {
  this.router = router;
  this.api = api;
  this.ErrorGeneral = require('../error.html');
  this.template = require('../code/index.html');
}

OAuth.prototype = {
  authorize: function (data, params) {
    const self = this;
    const clientId = params.client_id || "";
    let scope = params.scope || "";
    scope = scope.replace(/\+/g, ' ');
    const codeChallenge = params.code_challenge || "";
    const state = params.state || "";
    const returnTo = params.return_to || "";
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
      let platform = MixinUtils.environment();
      console.log(platform)
      const mixinURL = 'mixin://codes/' + auth.code_id;
      if (platform == 'Android' || platform == 'iOS') {
        window.location.replace(mixinURL);
        return false;
      }
      const data = {
        logoURL: blueLogo,
        basic: false,
        title: i18n.t('oauth.title'),
        hasSubTitle: false,
        hasMemo: false,
        iconUrl: auth.app.icon_url ? auth.app.icon_url : defaultAppAvatar,
        iconTitle: auth.app.name,
        isBot: !!auth.app,
        botIcon: auth.app.is_verified ? verifiedBotIcon : botIcon,
        iconSubTitle: auth.app.app_number,
        showActionButton: false,
        showQRCode: true,
        complete: false,
        qrCodeIcon,
        tip: i18n.t('code.oauth.mobile.scan'),
        mixinURL
      }
      $('.oauth.code.layout #layout-container').html(self.template(data));
      if (!platform) $('.main').attr('class', 'main browser');
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
