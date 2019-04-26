import './index.scss';
import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick-theme.scss';
import 'slick-carousel';
import './messenger.scss';
import $ from 'jquery';
import Animator from '../snapshot/animator.js';

function Home(router, api) {
  this.router = router;
  this.api = api;
  this.animator = new Animator();
  this.templateIndex = require('./index.html');
  this.templateXIN = require('./xin.html');
  this.templateMessenger = require('./messenger.html');
}

Home.prototype = {
  index: function () {
    const self = this;
    $('body').attr('class', 'home layout');
    $('#layout-container').html(self.templateIndex({
      logoURL: require('./logo.png'),
      playURL: require('./google-play.png'),
      storeURL: require('./app-store.png'),
      secureURL: require('./secure.png'),
      instantURL: require('./instant.png'),
      privateURL: require('./private.png'),
      powerfulURL: require('./powerful.png'),
      messengerURL: require('./messenger.png'),
      oceanOneURL: require('./ocean-one.png')
    }));
    var os = self.getMobileOperatingSystem();
    if (os === 'iOS') {
      $('.android.button').hide();
    } else if (os === 'Android') {
      $('.ios.button').hide();
    }
    self.animator.init($('.particles.container')[0]);
    self.animator.animate();
    self.router.updatePageLinks();

    $('.blockchains.list').slick({
      "slidesToShow": 6,
      "slidesToScroll": 2,
      'speed': 500,
      "prevArrow": "<span class='icon-arrow-left arrow-left'></span>",
      "nextArrow": "<span class='icon-arrow-right arrow-right'></span>",
      responsive: [{
        breakpoint: 768,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          infinite: true
        }
      }]
    });
    var src = $('.video-container iframe').attr('src');
    $('.video.button').click(function () {
      $('.modal-dialog').css('display', 'table');
      $('.video-container iframe').attr('src', src+'&autoplay=1');
    });
    $('.close').click(function () {
      $('.modal-dialog').hide();
      $('.video-container iframe').attr('src', src);
    });
  },

  xin: function () {
    var self = this;
    $('title').html('XIN Token Distribution - Mixin');
    $('body').attr('class', 'home layout');
    $('#layout-container').html(self.templateXIN({
      logoURL: require('./logo.png')
    }));
  },

  messenger: function () {
    const self = this;
    $('body').attr('class', 'messenger layout');
    $('#layout-container').html(self.templateMessenger({
      logoURL: require('./logo.png'),
      playURL: require('./google-play.png'),
      storeURL: require('./app-store.png'),
      apkURL: require('./apk.png'),
      messengerURL: require('./messenger.png'),
      macURL: require('./mac.png'),
      windowsURL: require('./windows.png'),
      macDesktopURL: require('./mac-desktop.png')
    }));
    if (navigator.language && navigator.language.includes('zh-CN')) {
      $('.special.version').removeClass('hidden');
    }
    if (!!localStorage.getItem('hide_top_bar')) {
      $('.special.version').hide();
    }
    var os = self.getMobileOperatingSystem();
    if (os === 'iOS') {
      $('.android.button').hide();
      $('.android.bar').hide();
    } else if (os === 'Android') {
      $('.ios.button').hide();
      $('.ios.bar').hide();
    }
    $('.close', '.special.version').on('click', () => {
      localStorage.setItem('hide_top_bar', true);
      $('.special.version').hide();
    });
    self.api.externalRequest('GET', "https://api.github.com/repos/MixinNetwork/desktop-app/releases/latest", (resp) => {
      resp.assets.map(asset => {
        if (asset.browser_download_url.endsWith('dmg')) {
          $('a', '.mac.app').attr('href', asset.browser_download_url);
        };
        if (asset.browser_download_url.endsWith('exe')) {
          $('a', '.windows.app').attr('href', asset.browser_download_url);
        };
      });
    });
    self.api.externalRequest('GET', "https://api.github.com/repos/MixinNetwork/android-app/releases/latest", (resp) => {
      resp.assets.map(asset => {
        if (asset.browser_download_url.endsWith('apk')) {
          $('a.apk', '.android.bar').attr('href', asset.browser_download_url);
        };
      });
    });
    self.animator.init($('.particles.container')[0]);
    self.animator.animate();
    self.router.updatePageLinks();
  },

  getMobileOperatingSystem: function () {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
      return "Windows Phone";
    }

    if (/android/i.test(userAgent)) {
      return "Android";
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      return "iOS";
    }

    return "unknown";
  }
};

export default Home;
