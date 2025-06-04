document.addEventListener('DOMContentLoaded', function() {
    // Implementación del menú móvil
    const setupMobileMenu = () => {
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');
        const navLinksItems = document.querySelectorAll('.nav-links li');
        
        if (hamburger) {
            // Evento para el botón hamburguesa
            hamburger.addEventListener('click', () => {
                // Alternar clases para mostrar/ocultar el menú
                navLinks.classList.toggle('active');
                hamburger.classList.toggle('active');
            });
            
            // Cerrar el menú al hacer clic en un enlace
            navLinksItems.forEach(item => {
                item.addEventListener('click', () => {
                    navLinks.classList.remove('active');
                    hamburger.classList.remove('active');
                });
            });
        }
    };

    // Inicialización del menú móvil
    setupMobileMenu();

    // Smooth scrolling para los enlaces de navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetElement = document.querySelector(this.getAttribute('href'));
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    
    // Añadir efectos de scroll para mostrar/ocultar elementos
    const handleScroll = () => {
        const sections = document.querySelectorAll('section');
        const navHeight = document.querySelector('header').offsetHeight;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - navHeight - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                // Destacar enlace de navegación activo
                document.querySelectorAll('.nav-links a').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    };
    
    // Ejecutar al hacer scroll
    window.addEventListener('scroll', handleScroll);
});