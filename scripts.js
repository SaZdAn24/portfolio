  // Бургер-меню
  const menuToggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.menu');
  const closeMenu = document.querySelector('.close-menu');

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

  // Закрытие меню при клике вне области меню
  window.addEventListener('click', (event) => {
      if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
          menu.classList.remove('open');
          menuToggle.classList.remove('open');
      }
  });