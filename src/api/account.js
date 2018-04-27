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

  token: function () {
    return window.localStorage.getItem('access_token');
  },

  clear: function (callback) {
    window.localStorage.clear();
    if (typeof callback === 'function') {
      callback();
    }
  }
};

export default Account;
