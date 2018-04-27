import './index.scss';
import $ from 'jquery';

function Log(router) {
  this.router = router;
  this.templateIndex = require('./index.html');
}

Log.prototype = {
  render: function () {
    const self = this;
    $('title').html('Mixin Logs');
    $('body').attr('class', 'log layout');
    $('#layout-container').html(self.templateIndex({
      logoURL: require('../home/logo.png')
    }));
    self.router.updatePageLinks();
  }
};

export default Log;
