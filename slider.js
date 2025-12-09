let currentIndex = 0;
const images = document.querySelectorAll('.portfolio-slider img');

function showImage(index) {
  images.forEach((img, i) => {
    img.style.display = i === index ? 'block' : 'none';
  });
}

document.querySelector('.prev').onclick = () => {
  currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
  showImage(currentIndex);
};

document.querySelector('.next').onclick = () => {
  currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
  showImage(currentIndex);
};

showImage(currentIndex);
