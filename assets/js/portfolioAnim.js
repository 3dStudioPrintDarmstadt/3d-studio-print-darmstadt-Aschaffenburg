// Portfolio-Fade-in beim Scrollen
const portfolioItems = document.querySelectorAll('.portfolio-item');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add('fade-in');
    }
  });
}, { threshold: 0.2 });

portfolioItems.forEach(item => observer.observe(item));
