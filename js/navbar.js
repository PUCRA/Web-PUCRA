
document.addEventListener("DOMContentLoaded", function() {
    // Menú dropdown para escritorio
    const dropdowns = document.querySelectorAll('.desktop-menu .dropdown');

    dropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector('.dropdown-toggle');
        const list = dropdown.querySelector('.dropdown-list');

        toggle.addEventListener('click', (e) => {
            e.preventDefault();
            dropdown.classList.toggle('open');
        });

        // Cerrar dropdowns de escritorio si se hace clic fuera de ellos
        document.addEventListener('click', (e) => {
            if (!dropdown.contains(e.target) && !e.target.closest('.burger-menu-icon')) {
                dropdown.classList.remove('open');
            }
        });
    });

    // Menú desplegable para móviles
    const sobreNosaltresToggle = document.getElementById('sobre-nosaltres-toggle');
    const sobreNosaltresSubmenu = document.getElementById('sobre-nosaltres-submenu');

    // Mostrar/ocultar submenú en móviles
    sobreNosaltresToggle.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevenir que se cierre al hacer clic en el submenú
        sobreNosaltresSubmenu.classList.toggle('active');
        sobreNosaltresToggle.parentElement.classList.toggle('open'); // Toggle para flechita
    });

    // Manejar el menú móvil
    const burgerIcon = document.querySelector('.burger-menu-icon');
    const mobileMenu = document.querySelector('.mobile-menu');
    const closeIcon = document.querySelector('.close-menu-icon');

    // Mostrar menú móvil
    burgerIcon.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevenir que se cierren otros elementos
        mobileMenu.classList.toggle('open');
    });

    // Cerrar menú móvil
    closeIcon.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
    });

    // Cambiar color de la navbar al hacer scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Cerrar menú y submenú si se hace clic fuera del área del menú móvil
    document.addEventListener('click', function(e) {
        const isClickInsideMenu = e.target.closest('.mobile-menu') || e.target.closest('.burger-menu-icon');
        const isClickInsideDropdown = e.target.closest('.dropdown');

        // Cerrar el menú móvil solo si no se ha hecho clic dentro de él
        if (!isClickInsideMenu) {
            mobileMenu.classList.remove('open');
        }

        // Cerrar el submenú móvil solo si no se ha hecho clic dentro del submenú o el botón de toggling
        if (!isClickInsideMenu && !e.target.closest('#sobre-nosaltres-toggle')) {
            sobreNosaltresSubmenu.classList.remove('active');
            sobreNosaltresToggle.parentElement.classList.remove('open'); // Cerrar flechita
        }

        // Cerrar dropdowns de escritorio si no se hace clic en uno de ellos
        if (!isClickInsideDropdown) {
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('open');
            });
        }
    });
});
