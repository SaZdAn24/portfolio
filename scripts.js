const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
const closeMenu = document.querySelector('.close-menu');

let lastScrollTop = 0;

// Открытие меню
menuToggle.addEventListener('click', () => {
    menu.classList.add('open');
    menuToggle.classList.add('open');
});

// Закрытие меню
closeMenu.addEventListener('click', () => {
    menu.classList.remove('open');
    menuToggle.classList.remove('open');
});

// Закрытие меню при клике вне его области
window.addEventListener('click', (event) => {
    if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
        menu.classList.remove('open');
        menuToggle.classList.remove('open');
    }
});

// Скрытие кнопки бургера при скролле вниз и появление при скролле вверх
window.addEventListener('scroll', () => {
    let scrollTop = window.scrollY;

    if (scrollTop > lastScrollTop) {
        // Скроллим вниз — скрываем кнопку
        menuToggle.style.opacity = '0';
        menuToggle.style.pointerEvents = 'none';
    } else {
        // Скроллим вверх — показываем кнопку
        menuToggle.style.opacity = '1';
        menuToggle.style.pointerEvents = 'auto';
    }

    lastScrollTop = scrollTop;
});
