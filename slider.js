let currentIndex = 0;
const images = document.querySelectorAll('.portfolio-slider img');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

function showImage(index) {
  images.forEach((image, i) => {
    image.style.display = i === index ? 'block' : 'none';  // Zeigt nur das aktuelle Bild an
  });
}

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
  showImage(currentIndex);
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
  showImage(currentIndex);
});

// Zeigt das erste Bild an
showImage(currentIndex);
