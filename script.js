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

const video = document.getElementById('video');
const image = document.getElementById('image');

function showVideo() {
    video.style.display = 'block';
    image.style.display = 'none';
    video.play();
}

function showImage() {
    video.style.display = 'none';
    image.style.display = 'block';
}

// Função para alternar entre o vídeo e a imagem
function toggleMedia() {
    showVideo();
    video.addEventListener('ended', function() {
        showImage();
        setTimeout(function() {
            showVideo();
        }, 3000);
    });
}

// Iniciar a alternância do media
toggleMedia();