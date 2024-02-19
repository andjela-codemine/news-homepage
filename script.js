const menuBtn = document.querySelector('.mobile-menu-button');
const nav = document.querySelector('nav');
const body = document.querySelector('body');
const menuIcon = document.querySelector('.mobile-menu-icon');
const overlay = document.querySelector('.overlay');

menuBtn.addEventListener('click', () => {
    nav.classList.toggle('show');
    overlay.style.display = nav.classList.contains('show') ? 'block' : 'none';
    overlay.style.opacity = nav.classList.contains('show') ? '1' : '0';

    if (menuIcon.src.includes('icon-menu.svg')) {
        menuIcon.src = './assets/images/icon-menu-close.svg';
        body.style.overflow = 'hidden';
    } else {
        menuIcon.src = './assets/images/icon-menu.svg';
        body.style.overflow = 'auto';
    }
});
