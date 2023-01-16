import $ from 'jquery';
import URLUtils from '../utils/url.js';
import blueLogo from '../home/logo.png';
import defaultAvatar from './userAvatar.svg';

function Schema(router, api) {
  this.router = router;
  this.api = api;
  this.templateUser = require('./user.html');
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
      default:
        this.api.error({error: {code: 10002}});
    }
  },
  renderApp: function (id) {
    const self = this;
    const action = URLUtils.getUrlParameter("action");
    $('body').attr('class', 'app layout');
    const appInfo = {
      logoURL: blueLogo,
      avatarUrl: defaultAvatar,
      fullName: "Bot",
      info: id.slice(0, 6) + '...' + id.slice(-4),
    }
    if (action === 'open') {
      appInfo['actionText'] = i18n.t("app.btn.open");
      appInfo['buttonIntro'] = i18n.t("app.btn.intro.open");
      appInfo['buttonURL'] = `mixin://apps/${id}` + location.search;
    } else {
      appInfo['actionText'] = i18n.t("app.btn.chat");
      appInfo['buttonIntro'] = i18n.t("app.btn.intro.chat");
      appInfo['buttonURL'] = `mixin://apps/${id}`;
    }
    $('#layout-container').html(self.templateUser(appInfo));
    $('.info').attr('class', 'info new-margin');
    self.router.updatePageLinks();
  },
  renderUser: function (id) {
    const self = this;
    $('body').attr('class', 'user layout');
    const userInfo = {
      logoURL: blueLogo,
      avatarUrl: defaultAvatar,
      fullName: "User",
      info: id.slice(0, 6) + '...' + id.slice(-4),
      buttonURL: `mixin://users/${id}`,
      actionText: i18n.t('code.user.chat'),
      buttonIntro: i18n.t('code.user.btn.intro')
    }
    $('#layout-container').html(self.templateUser(userInfo));
    $('.info').attr('class', 'info new-margin');
    self.router.updatePageLinks();
  },
};

export default Schema;
