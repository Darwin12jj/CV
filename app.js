function showCards(category) {
    // Función legacy - ahora usa filtrarProyectos
    filtrarProyectos(category);
}

// Datos de proyectos
const proyectos = [
    { categoria: 'bootstrap', titulo: 'Blog Example', url: 'https://darwin12jj.github.io/Blog-Example/', imagen: './images/bootstrap/Bootstrap-blog-example.png' },
    { categoria: 'bootstrap', titulo: 'List Group Example', url: 'https://darwin12jj.github.io/List_group-Example/#', imagen: './images/bootstrap/List_group-Example.png' },
    { categoria: 'bootstrap', titulo: 'Dropdowns Example', url: 'https://darwin12jj.github.io/Dropdowns-Example/#', imagen: './images/bootstrap/Dropdowns-Example.png' },
    { categoria: 'bootstrap', titulo: 'Footers Example', url: 'https://darwin12jj.github.io/Dropdowns-Example/#', imagen: './images/bootstrap/Footers-Example.png' },
    { categoria: 'bootstrap', titulo: 'Features Example', url: 'https://darwin12jj.github.io/Features_Example/', imagen: './images/bootstrap/Features_Example.png' },
    { categoria: 'bootstrap', titulo: 'Heroes Example', url: 'https://darwin12jj.github.io/Heroes-example/', imagen: './images/bootstrap/Heroes-example.png' },
    { categoria: 'bootstrap', titulo: 'Headers Example', url: 'https://darwin12jj.github.io/Headers-Example/', imagen: './images/bootstrap/Headers-Example.png' },
    { categoria: 'bootstrap', titulo: 'Checkout Example', url: 'https://darwin12jj.github.io/Checkout-Example/', imagen: './images/bootstrap/Checkout example.png' },
    { categoria: 'bootstrap', titulo: 'Pricing Examples', url: 'https://darwin12jj.github.io/Pricing-examples/', imagen: './images/bootstrap/Pricing-example.png' },
    { categoria: 'tailwind', titulo: 'Modals Example', url: 'https://darwin12jj.github.io/Modals-Example/', imagen: './images/Tailwind/Tailwind-modals-tailwind.png' },
    { categoria: 'tailwind', titulo: 'Components Example', url: 'https://darwin12jj.github.io/Components_Tailwind/', imagen: './images/Tailwind/Tailwind-components-tailwind.png' },
    { categoria: 'css', titulo: 'Product Example', url: 'https://darwin12jj.github.io/Product-example.github.io/', imagen: './images/Css/Product Example.png' },
    { categoria: 'css', titulo: 'Album Examples', url: 'https://darwin12jj.github.io/Album-Examples/', imagen: './images/Css/Album example.png' },
    { categoria: 'js', titulo: 'Página física', url: 'https://darwin12jj.github.io/F-sics_page/', imagen: './images/Js/pagina_fisica.png' },
    { categoria: 'js', titulo: 'Tetris', url: 'https://darwin12jj.github.io/Tetris_game/', imagen: './images/Js/tetris.png' }
];

function filtrarProyectos(categoria, boton) {
    const grid = document.getElementById('proyectos-grid');
    
    // Actualizar botón activo
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    if (boton) boton.classList.add('active');
    
    // Filtrar proyectos
    const proyectosFiltrados = categoria === 'todos' 
        ? proyectos 
        : proyectos.filter(p => p.categoria === categoria);
    
    // Renderizar
    grid.innerHTML = proyectosFiltrados.map(p => `
        <div class="proyecto-card">
            <div class="flex flex-col items-center p-6 bg-white border border-gray-200 rounded-lg transition-all hover:shadow-lg">
                <h5 class="mb-4 text-xl font-bold text-center text-gray-900">${p.titulo}</h5>
                <div class="relative w-full">
                    <a href="${p.url}" target="_blank">
                        <img src="${p.imagen}" alt="${p.titulo}" class="rounded-xl w-full hover:scale-105 transition-all">
                    </a>
                    <div class="proyecto-overlay">
                        <a href="${p.url}" target="_blank" class="px-6 py-3 bg-white text-black rounded-lg font-bold hover:bg-gray-100 transition-all">
                            Ver Proyecto →
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
    
    // Animar entrada
    anime({
        targets: '.proyecto-card',
        opacity: [0, 1],
        scale: [0.8, 1],
        delay: anime.stagger(100),
        duration: 500,
        easing: 'easeOutExpo'
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".hidden-element");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });

    elements.forEach(element => {
        observer.observe(element);
    });
});

function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    const hamburger = document.querySelector('.hamburger');
    const overlay = document.querySelector('.menu-overlay');
    
    menu.classList.toggle('open');
    hamburger.classList.toggle('open');
    overlay.classList.toggle('open');
    
    // Prevenir scroll cuando el menú está abierto
    document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : '';
}

window.addEventListener('DOMContentLoaded', (event) => {
    // Animación de iconos de tecnologías
    anime({
        targets: '#habilidades-programacion .flex',
        translateY: [-50, 0],
        opacity: [0, 1],
        delay: anime.stagger(100),
        duration: 800,
        easing: 'easeOutExpo'
    });
    
    // Seguimiento del cursor en los iconos con flotación
    const iconos = document.querySelectorAll('#habilidades-programacion .flex');
    let cursorX = 0, cursorY = 0;
    const floatOffsets = [];
    
    // Inicializar offsets de flotación para cada icono
    iconos.forEach((icono, index) => {
        floatOffsets.push({
            time: index * 0.5,
            speed: 0.002
        });
    });
    
    document.addEventListener('mousemove', (e) => {
        cursorX = e.clientX;
        cursorY = e.clientY;
    });
    
    function actualizarIconos() {
        iconos.forEach((icono, index) => {
            const rect = icono.getBoundingClientRect();
            const iconoCenterX = rect.left + rect.width / 2;
            const iconoCenterY = rect.top + rect.height / 2;
            
            const distancia = Math.sqrt(
                Math.pow(cursorX - iconoCenterX, 2) + 
                Math.pow(cursorY - iconoCenterY, 2)
            );
            
            const factor = Math.max(0, 1 - distancia / 500);
            const deltaX = (cursorX - iconoCenterX) / 10 * factor;
            const deltaY = (cursorY - iconoCenterY) / 10 * factor;
            
            // Calcular flotación
            floatOffsets[index].time += floatOffsets[index].speed;
            const floatY = Math.sin(floatOffsets[index].time) * 10;
            
            icono.style.transform = `translate(${deltaX}px, ${deltaY + floatY}px)`;
        });
        requestAnimationFrame(actualizarIconos);
    }
    
    actualizarIconos();
    
    // Animación del nombre
    const nombreCompleto = "DARWIN STIVEN JIMENEZ JARAMILLO";
    const nombreElement = document.getElementById('nombre-animado');
    let index = 0;
    
    function escribirNombre() {
        if (index < nombreCompleto.length) {
            nombreElement.textContent += nombreCompleto[index];
            index++;
            setTimeout(escribirNombre, 80);
        } else {
            anime({
                targets: '#linea-nombre',
                width: ['0%', '60%'],
                duration: 1000,
                easing: 'easeOutExpo'
            });
        }
    }
    
    escribirNombre();
    
    // Efecto glitch después de escribir el nombre
    setTimeout(() => {
        nombreElement.classList.add('glitch');
        setTimeout(() => nombreElement.classList.remove('glitch'), 300);
    }, nombreCompleto.length * 80 + 500);
    
    // Animación del rol y stack
    setTimeout(() => {
        const rol = "SOFTWARE DEVELOPER | FRONTEND & MOBILE";
        const stack = "REACT · REACT NATIVE · JAVASCRIPT · REST APIS · SQL · MONGODB";
        const rolElement = document.getElementById('rol-animado');
        const stackElement = document.getElementById('stack-animado');
        
        let rolIndex = 0;
        function escribirRol() {
            if (rolIndex < rol.length) {
                rolElement.textContent += rol[rolIndex];
                rolIndex++;
                setTimeout(escribirRol, 50);
            } else {
                setTimeout(() => {
                    let stackIndex = 0;
                    function escribirStack() {
                        if (stackIndex < stack.length) {
                            stackElement.textContent += stack[stackIndex];
                            stackIndex++;
                            setTimeout(escribirStack, 30);
                        }
                    }
                    escribirStack();
                }, 300);
            }
        }
        escribirRol();
    }, nombreCompleto.length * 80 + 1000);
    
    // Observador "Sobre mí"
    const sobreMiObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                anime({
                    targets: '#texto-sobremi',
                    opacity: [0, 1],
                    translateY: [20, 0],
                    duration: 1000,
                    easing: 'easeOutExpo'
                });
                
                sobreMiObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    const sobreMiSection = document.querySelector('.text-justify');
    if (sobreMiSection) sobreMiObserver.observe(sobreMiSection);
    
    // Observador Educación
    const educacionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const tarjetas = document.querySelectorAll('.tarjeta-educacion > div');
                tarjetas.forEach((tarjeta, index) => {
                    anime({
                        targets: tarjeta,
                        opacity: [0, 1],
                        rotateY: [-90, 0],
                        scale: [0.8, 1],
                        duration: 800,
                        delay: index * 200,
                        easing: 'easeOutExpo'
                    });
                });
                educacionObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    
    const educacionSection = document.getElementById('educacion');
    if (educacionSection) educacionObserver.observe(educacionSection.parentElement);
    
    // Observador Experiencia
    const experienciaObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const items = document.querySelectorAll('.experiencia-item');
                items.forEach((item, index) => {
                    const nombre = item.querySelector('.empresa-nombre');
                    const descripcion = item.querySelector('.empresa-descripcion');
                    
                    anime({
                        targets: nombre,
                        opacity: [0, 1],
                        translateX: [-50, 0],
                        duration: 800,
                        delay: index * 300,
                        easing: 'easeOutExpo'
                    });
                    
                    anime({
                        targets: descripcion,
                        opacity: [0, 1],
                        translateX: [50, 0],
                        duration: 800,
                        delay: index * 300 + 200,
                        easing: 'easeOutExpo'
                    });
                });
                experienciaObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    
    const experienciaSection = document.getElementById('experiencia');
    if (experienciaSection) experienciaObserver.observe(experienciaSection.parentElement);
    
    // Sistema de navegación activa
    const sections = document.querySelectorAll('main, footer');
    const navLinks = document.querySelectorAll('.nav-link');
    
    function updateActiveNav() {
        let current = '';
        
        // Detectar si está al final de la página
        const isBottom = (window.innerHeight + window.pageYOffset) >= document.body.offsetHeight - 100;
        
        if (isBottom) {
            current = 'contacto';
        } else {
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (pageYOffset >= sectionTop - 200) {
                    const id = section.querySelector('[id]')?.id;
                    if (id) current = id;
                }
            });
        }
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }
    
    // Inicializar primera sección como activa
    setTimeout(() => {
        const firstLink = navLinks[0];
        if (firstLink) firstLink.classList.add('active');
    }, 100);
    
    window.addEventListener('scroll', updateActiveNav);
    
    // Smooth scroll al hacer clic en navegación
    let isScrolling = false;
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                isScrolling = true;
                
                // Si es "sobre mí", ir al tope de la página
                if (targetId === 'sobremi') {
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                } else {
                    const navHeight = document.querySelector('nav').offsetHeight;
                    const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - navHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
                
                // Resetear flag después del scroll
                setTimeout(() => {
                    isScrolling = false;
                }, 1000);
            }
        });
    });
    
    // Actualizar navegación solo si no está en scroll programático
    const originalUpdateActiveNav = updateActiveNav;
    updateActiveNav = function() {
        if (!isScrolling) {
            originalUpdateActiveNav();
        }
    };
    
    // Seguimiento cursor en imágenes de educación
    const imagenesEducacion = document.querySelectorAll('.tarjeta-educacion img');
    
    document.addEventListener('mousemove', (e) => {
        imagenesEducacion.forEach(imagen => {
            const rect = imagen.getBoundingClientRect();
            const imagenCenterX = rect.left + rect.width / 2;
            const imagenCenterY = rect.top + rect.height / 2;
            
            const distancia = Math.sqrt(
                Math.pow(e.clientX - imagenCenterX, 2) + 
                Math.pow(e.clientY - imagenCenterY, 2)
            );
            
            const factor = Math.max(0, 1 - distancia / 500);
            const deltaX = (e.clientX - imagenCenterX) / 10 * factor;
            const deltaY = (e.clientY - imagenCenterY) / 10 * factor;
            
            anime({
                targets: imagen,
                translateX: deltaX,
                translateY: deltaY,
                duration: 600,
                easing: 'easeOutCubic'
            });
        });
    });
    
    // Inicializar proyectos mostrando todos
    setTimeout(() => {
        const botonTodos = document.querySelector('[data-filter="todos"]');
        if (botonTodos) {
            filtrarProyectos('todos', botonTodos);
        }
    }, 200);
});
