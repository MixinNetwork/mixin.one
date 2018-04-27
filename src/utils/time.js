function TimeUtils() {
}

TimeUtils.prototype = {
  format: function(time) {
    var date = new Date(time);
    if (date.setHours(0, 0, 0, 0) != new Date().setHours(0, 0, 0, 0)) {
      var day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
      var month = date.getMonth() < 9 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
      return day + '/' + month + '/' + (date.getYear() - 100);
    }
    date = new Date(time);
    var hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    var minute = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    var second = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
    return hour + ':' + minute + ':' + second;
  }
};

export default new TimeUtils();
