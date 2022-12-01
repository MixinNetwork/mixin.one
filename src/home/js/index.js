import $ from 'jquery';

let btn = document.getElementsByClassName('nav-list-menus-btn')[0];
let menus = document.getElementsByClassName('nav-list-menus-list')[0];

resizeTopContent();
document.addEventListener('click', () => {
  let clientWidth = document.documentElement.clientWidth;
  if (clientWidth < 720) menus.style.display = '';
});

$(function () {
  $(window).resize(function () {
    resizeTopContent()
  })
})


btn.addEventListener('click', event => {
  event.stopPropagation();
  if (!menus.style.display || menus.style.display === 'none') {
    menus.style.display = 'block';
  } else {
    menus.style.display = '';
  }
});
function resizeTopContent() {
  var cliWidth = document.documentElement.clientWidth;
  var cliHeight = document.documentElement.clientHeight;
  let width = cliWidth > 380 ? cliWidth : 380
  $('.mixin-one-home-container header').css('width', width + 'px')
  $('.mixin-one-home-container header').css('height', (cliHeight + 1) + 'px')
  $('.mixin-one-home-container .home-background').css('width', width + 'px')
  $('.mixin-one-home-container .home-background').css('height', (cliHeight + 1) + 'px')
}