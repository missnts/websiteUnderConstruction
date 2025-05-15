const menuBtn = document.getElementById('menu-btn');
const navMenu = document.getElementById('nav-menu');

menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('menu-show');
    navMenu.classList.toggle('menu-closed');
    document.body.classList.toggle('no-scroll');
})