import ReconnectingWebSocket from 'reconnecting-websocket';
import pako from 'pako';
import { v4 as uuidv4 } from 'uuid';

function Authorization(api, endpoint) {
  this.api = api;
  this.endpoint = endpoint;
}

Authorization.prototype = {
  connect: function (callback, clientId, scope, codeChallenge) {
    const self = this;
    self.handled = false;
    self.callback = callback;
    self.ws = new ReconnectingWebSocket(self.endpoint, "Mixin-OAuth-1", {
      maxReconnectionDelay: 5000,
      minReconnectionDelay: 1000,
      reconnectionDelayGrowFactor: 1.2,
      connectionTimeout: 8000,
      maxRetries: Infinity,
      debug: false
    });

    self.ws.addEventListener("message", function(event) {
      if (self.handled) {
        return;
      }
      var fileReader = new FileReader();
      fileReader.onload = function() {
        var msg = pako.ungzip(new Uint8Array(this.result), { to: 'string' });
        var authorization = JSON.parse(msg);
        if (self.callback(authorization)) {
          self.handled = true;
          return;
        }
        setTimeout(function() {
          self.sendRefreshCode(clientId, scope, codeChallenge, authorization.data);
        }, 1000);
      };
      fileReader.readAsArrayBuffer(event.data);
    });

    self.ws.addEventListener("open", function (event) {
      self.sendRefreshCode(clientId, scope, codeChallenge);
    });
  },

  sendRefreshCode: function (clientId, scope, codeChallenge, authorization) {
    const self = this;
    if (self.handled) {
      return;
    }

    self.send({
      id: uuidv4().toUpperCase(),
      action: 'REFRESH_OAUTH_CODE',
      params: {
        "client_id": clientId,
        "scope": scope,
        "code_challenge": codeChallenge,
        "authorization_id": authorization ? authorization.authorization_id : ""
      }
    });
  },

  send: function (msg) {
    try {
      this.ws.send(pako.gzip(JSON.stringify(msg)));
    } catch (e) {
      if (e instanceof DOMException) {
      } else {
        console.error(e);
      }
    }
  },

  requestAccessToken: function (callback, authorizationCode) {
    var params = {
      "client_id": "5aa9ae63-9370-4ca7-ac64-87cabf6f2339",
      "code": authorizationCode
    };
    this.api.request('POST', '/oauth/token', params, function(resp) {
      if (resp.data) {
        if (resp.data.scope.indexOf('PROFILE:READ') < 0) {
          resp.error = { code: 403, description: 'Access denied.' };
          return callback(resp);
        }
        window.localStorage.setItem('access_token', resp.data.access_token);
      }
      return callback(resp);
    });
  }
};

export default Authorization;
