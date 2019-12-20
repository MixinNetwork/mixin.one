import './index.scss';
import $ from 'jquery';
import QRious from 'qrious';

function Code(router, api) {
  this.router = router;
  this.api = api;
  this.templateUser = require('./user.html');
  this.templateGroup = require('./group.html');
}

Code.prototype = {
  render: function (id) {
    const self = this;
    self.api.code.fetch(function(resp) {
      if (resp.error) {
        return;
      }
      resp.data['code_id'] = id;
      switch (resp.data.type) {
        case 'user':
          self.renderUser(resp.data);
          break;
        case 'conversation':
          self.renderGroup(resp.data);
          break;
        default:
          self.api.error({error: {code: 10002}});
      }
    }, id);
  },

  renderUser: function(user) {
    const self = this;
    $('body').attr('class', 'user code layout');
    user['hasAvatar'] = user.avatar_url !== '';
    user['firstLetter'] = user.full_name.trim()[0] || '^_^';
    user['logoURL'] = require('../home/logo.png').default;
    user['full_name'] = user.full_name.trim().length > 0 ? user.full_name.trim() : '^_^';
    $('#layout-container').html(self.templateUser(user));
    new QRious({
      element: document.getElementById('mixin-code'),
      backgroundAlpha: 0,
      foreground: '#00B0E9',
      value: 'https://mixin.one/codes/' + user.code_id,
      level: 'H',
      size: 500
    });
    self.router.updatePageLinks();
  },

  renderGroup: function(group) {
    const self = this;
    $('body').attr('class', 'group code layout');
    group['logoURL'] = require('../home/logo.png').default;
    group['name'] = group.name.trim().length > 0 ? group.name.trim() : '^_^';
    group['participantsCount'] = group.participants.length;
    $('#layout-container').html(self.templateGroup(group));
    new QRious({
      element: document.getElementById('mixin-code'),
      backgroundAlpha: 0,
      foreground: '#00B0E9',
      value: 'https://mixin.one/codes/' + group.code_id,
      level: 'H',
      size: 500
    });
    self.router.updatePageLinks();
  }
};

export default Code;
