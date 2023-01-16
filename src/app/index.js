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
      buttonURL: `mixin://apps/${id}` + location.search
    }
    if (action === 'open') {
      appInfo['actionText'] = i18n.t("app.btn.open");
      appInfo['buttonIntro'] = i18n.t("app.btn.intro.open");
    } else {
      appInfo['actionText'] = i18n.t("app.btn.chat");
      appInfo['buttonIntro'] = i18n.t("app.btn.intro.chat");
    }
    $('#layout-container').html(self.template(appInfo));
    $('.info').attr('class', 'info new-margin');
    self.router.updatePageLinks();
  },
};

export default App;
