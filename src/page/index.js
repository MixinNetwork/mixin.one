import './index.scss';
import $ from 'jquery';

function Page(router) {
  this.router = router;
  this.Error404 = require('../404.html');
}

Page.prototype = {
  show: function (id) {
    const self = this;
    try {
      var layout = require('./' + id + '.' + i18n.locale + '.html');
      $('body').attr('class', 'page layout');
      $('#layout-container').html(layout({
        logoURL: require('../home/logo.png')
      }));
      self.router.updatePageLinks();
    } catch (e) {
      if (e.message.indexOf('Cannot find module') !== 0) {
        throw e;
      }
      $('body').attr('class', 'error layout');
      $('#layout-container').html(self.Error404());
      self.router.updatePageLinks();
    }
  }
};

export default Page;
