import './index.scss';
import $ from 'jquery';
import assets from './assets';

function Homepage(router, api) {
  this.router = router;
  this.templateIndex = require('./index.html');
}

Homepage.prototype = {
  index: function () {
    let self = this;

    $('title').html('Mixin Official Website');
    $('body').attr('class', 'home layout');
    $('#layout-container').html(self.templateIndex(assets));
    self.router.updatePageLinks();
  },
};

export default Homepage;
