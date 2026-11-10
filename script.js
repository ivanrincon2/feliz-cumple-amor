document.addEventListener('DOMContentLoaded', function() {
    const btnSorpresa = document.getElementById('btnSorpresa');
    const mensajeSorpresa = document.getElementById('mensajeSorpresa');
    const seccionFotos = document.getElementById('seccionFotos');
    const tituloSeccion = document.getElementById('tituloSeccion');
    const seccionSobre = document.getElementById('seccionSobre');
    
    const btnAbrirSobre = document.getElementById('btnAbrirSobre');
    const contenidoCarta = document.getElementById('contenidoCarta');

    // Botón principal de la sorpresa
    if (btnSorpresa && mensajeSorpresa && seccionFotos && tituloSeccion && seccionSobre) {
        btnSorpresa.addEventListener('click', function() {
            if (seccionFotos.style.display === 'none') {
                tituloSeccion.style.display = 'block';
                seccionFotos.style.display = 'flex';
                seccionSobre.style.display = 'flex';
                mensajeSorpresa.style.display = 'block';
                btnSorpresa.textContent = 'Ocultar sorpresa 💖';
            } else {
                tituloSeccion.style.display = 'none';
                seccionFotos.style.display = 'none';
                seccionSobre.style.display = 'none';
                mensajeSorpresa.style.display = 'none';
                btnSorpresa.textContent = '¡Haz clic para una sorpresa!';
            }
        });
    }

    // Botón para abrir la carta del sobre
    if (btnAbrirSobre && contenidoCarta) {
        btnAbrirSobre.addEventListener('click', function() {
            if (contenidoCarta.style.display === 'none') {
                contenidoCarta.style.display = 'block';
                btnAbrirSobre.textContent = 'Cerrar carta 💌';
            } else {
                contenidoCarta.style.display = 'none';
                btnAbrirSobre.textContent = 'Abrir sobre';
            }
        });
    }

    // Observador para animar las tarjetas al hacer scroll
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.tarjeta-animada').forEach(tarjeta => {
        observer.observe(tarjeta);
    });
});