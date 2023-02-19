import './index.scss';
import $ from 'jquery';
import blueLogo from '../assets/icons/logo.png';

function Log(router, api) {
  this.router = router;
  this.api = api;
  this.templateIndex = require('./index.html');
}

Log.prototype = {
  render: function () {
    const self = this;
    $('title').html('Work on Mixin');
    $('body').attr('class', 'job layout');
    $('#layout-container').html(self.templateIndex({
      logoURL: blueLogo
    }));
  },

  formatDate: function (date) {
    var monthNames = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();
    return day + ' ' + monthNames[monthIndex] + ', ' + year;
  }
};

export default Log;
