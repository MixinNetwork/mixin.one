import $ from 'jquery';
import URLUtils from '../utils/url.js';
import blueLogo from '../home/logo.png';
import defaultAvatar from './userAvatar.svg';

function User(router, api) {
  this.router = router;
  this.api = api;
  this.template = require('./index.html');
}

User.prototype = {
  render: function (id) {
    const self = this;
    $('body').attr('class', 'user layout');
    const userInfo = {
      logoURL: blueLogo,
      avatarUrl: defaultAvatar,
      info: id.slice(0, 6) + '...' + id.slice(-4),
      buttonURL: `mixin://users/${id}`,
      actionText: i18n.t('code.user.chat'),
      buttonIntro: i18n.t('code.user.btn.intro')
    }
    $('#layout-container').html(self.template(userInfo));
    $('.info').attr('class', 'info new-margin');
    self.router.updatePageLinks();
  },
};

export default User;
