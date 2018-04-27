function Payment(api) {
  this.api = api;
}

Payment.prototype = {
  validate: function (callback, recipientId, assetId, amount, traceId) {
    var params = {
      counter_user_id: recipientId,
      asset_id: assetId,
      amount: amount,
      trace_id: traceId
    };
    this.api.request('POST', '/payments', params, function(resp) {
      return callback(resp);
    });
  }
};

export default Payment;
