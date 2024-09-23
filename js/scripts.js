// Desplazamiento suave al hacer clic en un enlace del menú
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();  // Evita el comportamiento predeterminado

        const targetId = this.getAttribute('href');  // Obtiene el ID del destino
        const targetElement = document.querySelector(targetId);  // Selecciona el elemento destino

        // Ajuste de desplazamiento suave con un offset para el header
        const headerOffset = 80;  // Altura del header
        const elementPosition = targetElement.getBoundingClientRect().top;  // Posición del destino
        const offsetPosition = elementPosition - headerOffset;  // Ajuste del offset

        window.scrollBy({
            top: offsetPosition,  // Desplazamiento ajustado
            behavior: 'smooth'  // Desplazamiento suave
        });
    });
});

// Intersection Observer para hacer visibles las secciones cuando entran en el viewport
document.querySelectorAll('section').forEach(section => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');  // Añade la clase "visible"
                observer.unobserve(entry.target);  // Deja de observar después de la animación
            }
        });
    }, { threshold: 0.1 });  // Activa cuando el 10% de la sección es visible

    observer.observe(section);  // Observa cada sección
});

const lightEffect = document.createElement('div');
lightEffect.classList.add('light-effect');
document.body.appendChild(lightEffect);

document.addEventListener('mousemove', (e) => {
    lightEffect.style.left = `${e.pageX - 450}px`; // Ajusta para centrar el efecto (900px / 2)
    lightEffect.style.top = `${e.pageY - 450}px`; // Ajusta para centrar el efecto (900px / 2)
    lightEffect.style.transform = 'scale(1)'; // Mostrar el efecto
    lightEffect.style.opacity = '1'; // Hacerlo visible
});


document.addEventListener('mouseleave', () => {
    lightEffect.style.transform = 'scale(0)'; // Ocultar el efecto
    lightEffect.style.opacity = '0'; // Hacerlo invisible
});

document.querySelectorAll('.project').forEach(project => {
    project.addEventListener('click', function() {
        // Remover la clase 'selected' de todos los proyectos
        document.querySelectorAll('.project').forEach(p => p.classList.remove('selected'));
        // Agregar la clase 'selected' al proyecto clicado
        this.classList.add('selected');
    });

    project.addEventListener('mouseenter', function() {
        this.classList.add('selected'); // Añadir clase 'selected' al pasar el mouse
    });

    project.addEventListener('mouseleave', function() {
        this.classList.remove('selected'); // Remover clase 'selected' al salir el mouse
    });
});

