let btn = document.getElementsByClassName('nav-list-menus-btn')[0];
let menus = document.getElementsByClassName('nav-list-menus-list')[0];
document.addEventListener('click', () => {
    let clientWidth = document.body.clientWidth;
    if (clientWidth < 720) menus.style.display = '';
});
btn.addEventListener('click', event => {
    event.stopPropagation();
    if (!menus.style.display || menus.style.display === 'none') {
        menus.style.display = 'block';
    } else {
        menus.style.display = '';
    }
});
