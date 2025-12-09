let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(n) {
    slides.forEach(s => s.style.display = "none");
    slides[n].style.display = "block";
}

document.getElementById("nextBtn").onclick = () => {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
};

document.getElementById("prevBtn").onclick = () => {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide(slideIndex);
};

showSlide(slideIndex);
