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

const images = document.querySelectorAll('.banner img');
let currentImageIndex = 0;
images[currentImageIndex].classList.add('active');

function changeImage() {
  images[currentImageIndex].classList.remove('active');
  currentImageIndex = (currentImageIndex + 1) % images.length;
  images[currentImageIndex].classList.add('active');
}

setInterval(changeImage, 5000);

function showPreviousImage() {
  let newIndex = (currentImageIndex - 1 + images.length) % images.length;
  changeImage(newIndex);
}

function showNextImage() {
  let newIndex = (currentImageIndex + 1) % images.length;
  changeImage(newIndex);
}

document.querySelector('.prev-button').addEventListener('click', showPreviousImage);
document.querySelector('.next-button').addEventListener('click', showNextImage);
  


window.addEventListener('DOMContentLoaded', function() {
  var menuLinks = document.querySelectorAll('.menu a')

  menuLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();

      var targetSection = document.querySelector(this.getAttribute('href'));
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth'
      });
    });
  });
});
window.addEventListener('DOMContentLoaded', function() {
  var scrollToTopElement = document.querySelector('.voltatopo');

  scrollToTopElement.addEventListener('click', function(e) {
    e.preventDefault();

    var targetSection = document.querySelector('#inicio');
    var scrollOptions = {
      top: targetSection.offsetTop,
      behavior: 'smooth'
    };

    window.scrollTo(scrollOptions);
  });
});



