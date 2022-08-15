import './index.scss';
import './messenger.scss';
import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick-theme.scss';
import 'slick-carousel';
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
      new_bg_url: require('./assets/BG.jpg').default,
      new_right_url: require('./assets/right.png').default,
      new_logo_url: require('./assets/logo.png').default,
      new_menus_url: require('./assets/menus.png').default,
      new_home_1_url: require('./assets/home_1.png').default,
      new_home_2_1_url: require('./assets/home_2_1.png').default,
      new_home_2_2_url: require('./assets/home_2_2.png').default,
      new_home_3_1_url: require('./assets/home_3_1.png').default,
      new_home_3_2_url: require('./assets/home_3_2.png').default,
      logoURL: require('./logo.png').default,
      playURL: require('./google-play.png').default,
      storeURL: require('./app-store.png').default,
      messengerURL: require('./messenger.png').default,
      zeromesh: window.location.href.includes("zeromesh"),
      copyright: (new Date()).getFullYear(),
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
      $('.video-container iframe').attr('src', src + '&autoplay=1');
    });
    $('.close').click(function () {
      $('.modal-dialog').hide();
      $('.video-container iframe').attr('src', src);
    });
    require('./js/index');
    require('./js/animate-up');
  },

  xin: function () {
    var self = this;
    $('title').html('XIN Token Distribution - Mixin');
    $('body').attr('class', 'home layout');
    $('#layout-container').html(self.templateXIN({
      logoURL: require('./logo.png').default
    }));
  },

  messenger: function () {
    const self = this;
    $('body').attr('class', 'messenger layout');
    $('#layout-container').html(self.templateMessenger({
      logoURL: require('./logo.png').default,
      playURL: require('./google-play.png').default,
      storeURL: require('./app-store.png').default,
      apkURL: require('./apk.png').default,
      messengerURL: require('./messenger.png').default,
      macURL: require('./mac.png').default,
      windowsURL: require('./windows.png').default,
      macDesktopURL: require('./mac-desktop.png').default
    }));
    var os = self.getMobileOperatingSystem();
    if (os === 'iOS' && navigator.language && navigator.language.includes('zh-CN')) {
      $('.special.version').removeClass('hidden');
      $('.android.button').hide();
      $('.ios.bar').show();
    } else if (os === 'Android') {
      $('.special.version').removeClass('hidden');
      $('.ios.button').hide();
      if (navigator.language && navigator.language.includes('zh-CN')) {
        $('.android.bar.zh').show();
      } else {
        $('.android.bar.en').show();
      }
    }
    $('.close', '.special.version').on('click', () => {
      $('.special.version').hide();
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
