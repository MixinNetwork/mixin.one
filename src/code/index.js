import './index.scss';
import $ from 'jquery';
import QRious from 'qrious';

function Code(router, api) {
  this.router = router;
  this.api = api;
  this.templatePayment = require('./payment.html');
  this.templateChat = require('./chat.html');

  this.chatType = ['user', 'conversation'];
  this.paymentType = 'payment';
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

      if (self.paymentType === resp.data.type) {
        self.renderPayment(resp.data);
        return;
      }

      self.api.error({error: {code: 10002}});
    }, id);
  },

  renderChat: function(chatInfo) {
    const self = this;
    $('body').attr('class', 'chat code layout');
    chatInfo['chatType'] = chatInfo.type === 'conversation' ? 'conversation' : chatInfo.app ? 'bot' : 'user';
    chatInfo['hasAvatar'] = !!chatInfo.avatar_url;
    const full_name = chatInfo.type === 'conversation' ? chatInfo.name : chatInfo.full_name;
    chatInfo['firstLetter'] = full_name.trim()[0] || '^_^';
    chatInfo['logoURL'] = require('../home/logo.png').default;
    chatInfo['full_name'] = full_name.trim().length > 0 ? full_name.trim() : '^_^';
    chatInfo['info'] = chatInfo.type === 'conversation' ? `${chatInfo.participants.length} members` : chatInfo.identity_number;
    chatInfo['hasIntro'] = chatInfo.type === 'conversation' ? !!chatInfo.announcement : !!chatInfo.biography;
    chatInfo['intro'] = chatInfo.type === 'conversation' ? chatInfo.announcement : chatInfo.biography;
    chatInfo['actionText'] = chatInfo.type === 'conversation' ? 'Join Group' : 'Chat';
    chatInfo['mixinUrl'] = "mixin://codes/" + chatInfo.code_id;
    $('#layout-container').html(self.templateChat(chatInfo));
    self.router.updatePageLinks();
  },

  renderPayment: function(payment) {
    const self = this;
    $('body').attr('class', 'payment code layout');
    if (payment.receivers.length > 0) {
      self.api.network.assetsShow((asset) => {
        self.api.account.fetch(payment.receivers, (resp) => {
          if (resp.error) return false;
          const users = resp.data;
          const totalNumber = resp.data.length;
          const complete = payment.status === 'paid';
          payment['logoURL'] = require('../home/logo.png').default;
          payment['hasFirstAvatar'] = !!users[0].avatar_url;
          payment['firstAvatar'] = {
            fullName: users[0].full_name,
            avatarUrl: users[0].avatar_url,
            firstLetter: users[0].full_name.trim()[0] || '^_^'
          };
          payment['hasSecondAvatar'] = !!users[1].avatar_url;
          payment['secondAvatar'] = {
            fullName: users[1].full_name,
            avatarUrl: users[1].avatar_url,
            firstLetter: users[1].full_name.trim()[0] || '^_^'
          };
          payment['hasThirdAvatar'] = totalNumber > 2;
          payment['thirdAvatar'] = `+${totalNumber - 2}`;

          payment['info'] = payment['multisig'] ? `${payment.threshold}/${totalNumber}` : resp.data[0].identity_number;
          payment['hasMemo'] = !!payment.memo;
          payment['memo'] = payment.memo;
          payment['assetUrl'] = asset.data.icon_url;
          payment['complete'] = complete;
          payment['successURL'] = require('./payment_complete.svg').default;
          $('#layout-container').html(self.templatePayment(payment));
          new QRious({
            element: document.getElementById('qrcode'),
            backgroundAlpha: 0,
            value: 'https://mixin.one/codes/' + payment.code_id,
            level: 'H',
            size: 500
          });
          self.router.updatePageLinks();
          let timer = !complete && setInterval(() => {
            self.api.code.fetch((resp) => {
              if (resp.data.status === 'paid') {
                payment['complete'] = true;
                $('#layout-container').html(self.templatePayment(payment));
                clearInterval(timer);
              }
            }, payment.code_id);
          }, 1000 * 3)
        })
      }, payment.asset_id)
    }
  }
};

export default Code;
