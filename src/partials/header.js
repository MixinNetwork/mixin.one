import './header.scss';
import $ from 'jquery';
import assets from './assets';

$('body').on('click', '.action-bar', function () {
  $('.list', '.menu-mobile').toggle();
});

$('body').on('click', 'header.renewal', function (e) {
  if ($(e.target).attr('class') === 'action-bar') {
    return;
  };
  $('.list', '.menu-mobile').hide();
});

export default {
  menu_bar: assets.menu_bar,
  logo_white: assets.logo_white,
  ic_down: assets.ic_down,
};
