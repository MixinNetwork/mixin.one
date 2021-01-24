import 'simple-line-icons/scss/simple-line-icons.scss';
import './layout.scss';
import $ from 'jquery';
import Navigo from 'navigo';
import MixinUtils from './utils/mixin.js';
import Locale from './locale';
import API from './api';
import Home from './home';
import Code from './code';
import OAuth from './oauth';
import Page from './page';
import Log from './log';
import Job from './job';
import Pay from './pay';
import Snapshot from './snapshot';

const WEB_ROOT = location.protocol + '//' + location.host;
const PartialLoading = require('./loading.html');
const Error404 = require('./404.html');
const router = new Navigo('/');
const api = new API(router, API_ROOT, BLAZE_ROOT);

window.i18n = new Locale(navigator.language);

router.replace = function (url) {
  this.resolve(url);
  this.pause(true);
  this.navigate(url);
  this.pause(false);
};

router.hooks({
  before: function (done, params) {
    $('body').attr('class', 'loading layout');
    $('#layout-container').html(PartialLoading());
    setTimeout(function () {
      $('title').html(APP_NAME);
      done(true);
    }, 100);
  },
  after: function (params) {
    router.updatePageLinks();
  }
});

router.on({
  '/context': function () {
    var conversationId = MixinUtils.conversationId();
    if (conversationId) {
      $('#layout-container').html(conversationId);
    } else {
      $('#layout-container').html('undefined');
    }
  },
  '/snapshots': function () {
    new Snapshot(router, api).index(undefined, 'after', false);
  },
  '/snapshots/:id': function (params) {
    new Snapshot(router, api).index(params['id'], 'after', false);
  },
  '/network/assets': function () {
    new Snapshot(router, api).assets();
  },
  '/network/chains': function () {
    new Snapshot(router, api).chains();
  },
  '/logs': function (params) {
    new Log(router, api).render();
  },
  '/jobs': function (params) {
    new Job(router, api).render();
  },
  '/pages/:id': function (params) {
    new Page(router).show(params['id']);
  },
  '/oauth/authorize': function () {
    new OAuth(router, api).authorize();
  },
  '/oauth/callback': function () {
    new OAuth(router, api).callback();
  },
  '/receipts/new': function () {
    new Pay(router, api).new();
  },
  '/pay': function () {
    new Pay(router, api).render();
  },
  '/codes/:id': function (params) {
    new Code(router, api).render(params['id']);
  },
  '/xin': function () {
    new Home(router, api).xin();
  },
  '/messenger': function () {
    new Home(router, api).messenger();
  },
  '/': function () {
    new Home(router, api).index();
  }
}).notFound(function () {
  $('#layout-container').html(Error404());
  $('body').attr('class', 'error layout');
  router.updatePageLinks();
}).resolve();
