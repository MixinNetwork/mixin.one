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
