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

