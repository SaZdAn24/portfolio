document.addEventListener('DOMContentLoaded', () => {
  let currentSlide = 0;
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  const intervalTime = 1500; 

  const showSlide = (index) => {
      if (index >= slides.length) {
          currentSlide = 0;
      } else if (index < 0) {
          currentSlide = slides.length - 1;
      } else {
          currentSlide = index;
      }
      slides.forEach((slide, i) => {
          slide.style.display = i === currentSlide ? 'block' : 'none';
      });
      dots.forEach((dot, i) => {
          dot.classList.toggle('active', i === currentSlide);
      });
  };

  document.querySelector('.left-arrow').addEventListener('click', () => {
      showSlide(currentSlide - 1);
  });

  document.querySelector('.right-arrow').addEventListener('click', () => {
      showSlide(currentSlide + 1);
  });

  dots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
          showSlide(i);
      });
  });

  // Автопрокрутка слайдов
  setInterval(() => {
      showSlide(currentSlide + 1);
  }, intervalTime);

  showSlide(currentSlide);
});
