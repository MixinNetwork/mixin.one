function Account(api) {
  this.api = api;
}

Account.prototype = {
  check: function (callback) {
    this.api.request('GET', '/me', undefined, function(resp) {
      if (typeof callback === 'function') {
        return callback(resp);
      }
    });
  },

  fetch: function (ids, callback) {
    this.api.request('POST', `/users/fetch`, ids, function(resp) {
      if (typeof callback === 'function') {
        return callback(resp);
      }
    });
  },

  assets: function (callback) {
    this.api.request('GET', '/assets', undefined, function(resp) {
      if (!!resp.error && resp.error.code === 403) {
        resp.error.code = 401;
        return
      }
      if (typeof callback === 'function') {
        return callback(resp);
      }
    });
  },

  token: function () {
    let str = window.localStorage.getItem('access_token');
    if (str == null || str == undefined) {
      return '';
    }
    return str;
  },

  clear: function (callback) {
    window.localStorage.clear();
    if (typeof callback === 'function') {
      callback();
    }
  }
};

export default Account;
