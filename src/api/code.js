function Code(api) {
  this.api = api;
}

Code.prototype = {
  fetch: function (callback, id) {
    this.api.request('GET', '/codes/' + id, undefined, function(resp) {
      return callback(resp);
    });
  },
  generateSchema: function(callback, target) {
    this.api.request('POST', '/schemes', { target }, function(resp) {
      return callback(resp);
    });
  }
};

export default Code;
