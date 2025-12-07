// =============== 1. MENÚ DESPLEGABLE ===============
const menuBtn = document.querySelector('.menu-btn');
const navMenu = document.querySelector('.nav');

if (menuBtn && navMenu) {
  menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('nav-open');
  });
}

// =============== 2. SLIDER DE IMÁGENES ===============
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  slides.forEach((img, i) => {
    img.style.display = i === index ? 'block' : 'none';
  });
}

if (slides.length > 0) {
  showSlide(slideIndex);
  setInterval(() => {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
  }, 4000);
}

// =============== 3. MENSAJE SEGÚN LA HORA ===============
const saludoHora = document.querySelector('.mensaje-hora');
if (saludoHora) {
  const hora = new Date().getHours();
  let mensaje = hora < 12
    ? "Buenos días, bienvenido a Ma & Shibui"
    : hora < 18
      ? "Buenas tardes, gracias por visitar"
      : "Buenas noches, disfruta la experiencia";

  saludoHora.textContent = mensaje;
}
