import $ from 'jquery';
import URLUtils from '../utils/url.js';
import blueLogo from '../home/logo.png';
import defaultAvatar from './appAvatar.svg';

function App(router, api) {
  this.router = router;
  this.api = api;
  this.template = require('./index.html');
}

App.prototype = {
  render: function (id) {
    const self = this;
    const action = URLUtils.getUrlParameter("action");
    $('body').attr('class', 'app layout');
    const appInfo = {
      logoURL: blueLogo,
      avatarUrl: defaultAvatar,
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
    $('#layout-container').html(self.template(appInfo));
    $('.info').attr('class', 'info new-margin');
    self.router.updatePageLinks();
  },
};

export default App;
