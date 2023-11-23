function Payment(api) {
  this.api = api;
}

Payment.prototype = {
  validate: function (callback, recipientId, assetId, amount, traceId) {
    var params = {
      opponent_id: recipientId,
      asset_id: assetId,
      amount: amount,
      trace_id: traceId
    };
    this.api.request('POST', '/payments', params, function(resp) {
      return callback(resp);
    });
  },

  fetchSafeTrace: function(callback, traceId) {
    this.api.request('GET', `/safe/transactions/${traceId}`, undefined, function(resp) {
      return callback(resp);
    })
  }
};

export default Payment;
