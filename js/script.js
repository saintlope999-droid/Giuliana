// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animación fade-in para secciones al scroll (usando IntersectionObserver)
const sections = document.querySelectorAll('.section');
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            sectionObserver.unobserve(entry.target); // Animar solo una vez
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => sectionObserver.observe(section));

// Hover animation para proyectos
const proyectos = document.querySelectorAll('.proyecto');
proyectos.forEach(proyecto => {
    proyecto.addEventListener('mouseenter', () => {
        proyecto.style.transform = 'scale(1.05)';
    });
    proyecto.addEventListener('mouseleave', () => {
        proyecto.style.transform = 'scale(1)';
    });
});

// Animación inicial para hero al cargar
window.addEventListener('load', () => {
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.classList.add('visible');
    }
});