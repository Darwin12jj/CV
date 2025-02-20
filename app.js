function showCards(category) {
    // Oculta todas las tarjetas
    document.querySelectorAll('.cards-group').forEach(group => {
        group.classList.add('hidden');
    });

    // Muestra todas las tarjetas de la categoría seleccionada
    document.querySelectorAll(`.${category}`).forEach(group => {
        group.classList.remove('hidden');
    });
}

function showCards(category) {
    // Oculta todas las tarjetas con animación de salida
    document.querySelectorAll('.cards-group').forEach(group => {
        if (!group.classList.contains('hidden')) {
            group.classList.remove('fade-in');
            group.classList.add('fade-out');
            setTimeout(() => {
                group.classList.add('hidden');
                group.classList.remove('fade-out');
            }, 500); // Tiempo de la animación
        }
    });

    // Muestra las tarjetas de la categoría seleccionada con animación de entrada
    document.querySelectorAll(`.${category}`).forEach(group => {
        group.classList.remove('hidden');
        group.classList.add('fade-in');
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".hidden-element");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // Dejar de observar después de la animación
            }
        });
    }, {
        threshold: 0.2 // Se activa cuando el 20% del elemento es visible
    });

    elements.forEach(element => {
        observer.observe(element);
    });
});

// Función para alternar el menú hamburguesa
function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    const hamburger = document.querySelector('.hamburger');
    
    // Alterna la visibilidad del menú
    menu.classList.toggle('max-h-0');  // Cierra el menú
    menu.classList.toggle('opacity-0');  // Hace invisible el menú
    menu.classList.toggle('max-h-96');  // Abre el menú (la altura máxima se ajusta según el contenido)
    menu.classList.toggle('opacity-100');  // Hace visible el menú
    
    // Cambia la forma de la hamburguesa
    hamburger.classList.toggle('open');  // Añade o quita la clase 'open' para la animación
}

// Asegurarse de que el menú esté cerrado cuando se carga la página
window.addEventListener('DOMContentLoaded', (event) => {
    const menu = document.getElementById('mobileMenu');
    const hamburger = document.querySelector('.hamburger');
    
    // Asegura que las clases de 'open' y de mostrar el menú no estén presentes al inicio
    menu.classList.add('max-h-0', 'opacity-0');  // Menú cerrado y oculto
    hamburger.classList.remove('open');  // Hamburguesa en estado normal
});