document.addEventListener('DOMContentLoaded', () => {
  let currentSlide = 0;
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  const leftArrow = document.querySelector('.left-arrow');
  const rightArrow = document.querySelector('.right-arrow');

  const showSlide = (index) => {
      slides.forEach((slide, i) => {
          slide.classList.toggle('active', i === index);
      });
      dots.forEach((dot, i) => {
          dot.classList.toggle('active', i === index);
      });
      currentSlide = index;
  };

  leftArrow.addEventListener('click', () => {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
  });

  rightArrow.addEventListener('click', () => {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
  });

  dots.forEach((dot, i) => {
      dot.addEventListener('click', () => showSlide(i));
  });

  showSlide(currentSlide);
});