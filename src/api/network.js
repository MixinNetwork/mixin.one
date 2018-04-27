function Network(api) {
  this.api = api;
}

Network.prototype = {
  index: function (callback) {
    this.api.request('GET', '/network', undefined, function(resp) {
      if (typeof callback === 'function') {
        return callback(resp);
      }
    });
  },

  snapshotsIndex: function (callback, asset, offset, limit) {
    var path = '/network/snapshots?asset=' + asset + '&offset=' + offset + '&limit=' + limit;
    this.api.request('GET', path, undefined, function(resp) {
      return callback(resp);
    });
  },

  snapshotsShow: function (callback, id) {
    this.api.request('GET', '/network/snapshots/' + id, undefined, function(resp) {
      if (typeof callback === 'function') {
        return callback(resp);
      }
    });
  },

  assetsShow: function (callback, id) {
    this.api.request('GET', '/network/assets/' + id, undefined, function(resp) {
      if (typeof callback === 'function') {
        return callback(resp);
      }
    });
  }
};

export default Network;
