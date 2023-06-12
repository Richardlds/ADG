// Configuração para o slideshow do banner
var slides = document.querySelectorAll('.slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 3000);

function nextSlide() {
    slides[currentSlide].style.display = 'none';
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].style.display = 'block';
}

const hamburgerMenu = document.querySelector('.hamburger-menu');
const dropdownMenu = document.querySelector('.dropdown-menu');

hamburgerMenu.addEventListener('click', () => {
  dropdownMenu.classList.toggle('open');
});

document.addEventListener('click', (event) => {
  const targetElement = event.target;
  if (!targetElement.closest('.hamburger-menu') && !targetElement.closest('.dropdown-menu')) {
    dropdownMenu.classList.remove('open');
  }
});
