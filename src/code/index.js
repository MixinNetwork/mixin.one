import './index.scss';
import $ from 'jquery';
import QRious from 'qrious';

function Code(router, api) {
  this.router = router;
  this.api = api;
  this.templateGroup = require('./group.html');
  this.templateChat = require('./chat.html');

  this.chatType = ['user', 'conversation'];
  this.paymenType = 'payment';
}

Code.prototype = {
  render: function (id) {
    const self = this;
    self.api.code.fetch(function(resp) {
      if (resp.error) {
        return;
      }
      resp.data['code_id'] = id;

      if (self.chatType.includes(resp.data.type)) {
        self.renderChat(resp.data);
        return;
      }

      if (this.paymenType === resp.data.type) {
        self.renderGroup(resp.data);
        return;
      }

      self.api.error({error: {code: 10002}});
    }, id);
  },

  renderChat: function(chatInfo) {
    const self = this;
    $('body').attr('class', 'chat code layout');
    chatInfo['chatType'] = chatInfo.type === 'conversation' ? 'conversation' : chatInfo.app ? 'bot' : 'user';
    chatInfo['hasAvatar'] = chatInfo.avatar_url !== '';
    const full_name = chatInfo.type === 'conversation' ? chatInfo.name : chatInfo.full_name;
    chatInfo['firstLetter'] = full_name.trim()[0] || '^_^';
    chatInfo['logoURL'] = require('../home/logo.png').default;
    chatInfo['full_name'] = full_name.trim().length > 0 ? full_name.trim() : '^_^';
    chatInfo['info'] = chatInfo.type === 'conversation' ? `${chatInfo.participants.length} members` : chatInfo.identity_number;
    chatInfo['intro'] = chatInfo.type === 'conversation' ? chatInfo.announcement : chatInfo.biography;
    chatInfo['actionText'] = chatInfo.type === 'conversation' ? 'Join Group' : 'Chat';
    chatInfo['mixinUrl'] = "mixin://codes/" + chatInfo.code_id;
    $('#layout-container').html(self.templateChat(chatInfo));
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
