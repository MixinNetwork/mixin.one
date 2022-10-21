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
const router = new Navigo(window.location.host.includes('github') ? 'mixin.one' : '/');
const api = new API(router, API_ROOT, BLAZE_ROOT);

window.i18n = new Locale(navigator.language);

router.replace = function (url) {
  this.navigate(url);
};

router.hooks({
  before: function (done, params) {
    $('body').attr('class', 'loading layout');
    $('#layout-container').html(PartialLoading());
    setTimeout(function () {
      $('title').html('Mixin - Secure Digital Assets and Messages on Mixin');
      done(true);
    }, 100);
  },
  after: function (params) {
    router.updatePageLinks();
    var canonical = `https://mixin.one/${params.url}`;
    if ($('link[rel=canonical]').length === 0) {
      $('head').append(`<link rel="canonical" href="${canonical}" />`);
    } else {
      $('link[rel=canonical]').attr('href', canonical);
    }
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
  '/snapshots/:id': function (match) {
    new Snapshot(router, api).index(match.data['id'], 'after', false);
  },
  '/network/assets': function () {
    new Snapshot(router, api).assets();
  },
  '/network/chains': function () {
    new Snapshot(router, api).chains();
  },
  '/logs': function () {
    new Log(router, api).render();
  },
  '/jobs': function () {
    new Job(router, api).render();
  },
  '/pages/:id': function (match) {
    new Page(router).show(match.data['id']);
  },
  '/oauth/authorize': function ({ data, params }) {
    new OAuth(router, api).authorize(data, params);
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
  '/codes/:id': function (match) {
    new Code(router, api).render(match.data['id']);
  },
  '/xin': function () {
    new Home(router, api).xin();
  },
  '/messenger': function () {
    new Home(router, api).messenger();
  },
  '/mm': function () {
    router.replace('/messenger');
  },
  '/': function () {
    new Home(router, api).index();
  }
}).notFound(function () {
  $('#layout-container').html(Error404());
  $('body').attr('class', 'error layout');
  router.updatePageLinks();
}).resolve();
