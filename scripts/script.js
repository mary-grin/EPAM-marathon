const iconMenu = document.querySelector('.menu_icon');
const menuBody = document.querySelector('.header-nav');
if (iconMenu) {
    iconMenu.addEventListener('click', function(e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}
