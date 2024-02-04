import './index.scss';
import $ from 'zepto-webpack';
import blueLogo from '../assets/icons/logo.png';
import notFoundUrl from '../assets/images/404.webp';

function Page(router) {
  this.router = router;
  this.Error404 = require('../404.html');
  this.templatePrivacy = require('./privacy.html');
  this.templateTerms = require('./terms.html');
}

Page.prototype = {
  show: function (id) {
    const self = this;
    if (id === 'terms') {
      self.terms();
      return;
    }
    if (id === 'privacy') {
      self.privacy();
      return;
    }
    try {
      var layout = require('./' + id + '.' + i18n.locale + '.html');
      $('body').attr('class', 'page layout');
      $('#layout-container').html(
        layout({
          logoURL: blueLogo,
        })
      );
      self.router.updatePageLinks();
    } catch (e) {
      if (e.message.indexOf('Cannot find module') !== 0) {
        throw e;
      }
      $('body').attr('class', 'error layout');
      $('#layout-container').html(
        self.Error404({
          notFoundUrl,
          homePath: navigator.language.startsWith('zh') ? '/zh' : '/',
        })
      );
      self.router.updatePageLinks();
    }
  },

  terms: function () {
    const self = this;
    $('body').attr('class', 'page layout');
    $('#layout-container').html(
      self.templateTerms({
        logoURL: blueLogo,
      })
    );
    self.router.updatePageLinks();
  },

  privacy: function () {
    const self = this;
    $('body').attr('class', 'page layout');
    $('#layout-container').html(
      self.templatePrivacy({
        logoURL: blueLogo,
      })
    );
    self.router.updatePageLinks();
  },
};

export default Page;
