// Prosta animacja przy przewijaniu (fade in)
const container = document.querySelector('.container');
window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  if (scrollPosition > 50) {
    container.style.opacity = 0.95;
  } else {
    container.style.opacity = 1;
  }
});
