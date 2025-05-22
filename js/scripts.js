// Manejo del formulario de registro (si existe un elemento con id="registroForm")
document.addEventListener('DOMContentLoaded', function() {
    const registroForm = document.getElementById('registroForm');
    if (registroForm) {
        registroForm.addEventListener('submit', function(event) {
            event.preventDefault();
            // Aquí puedes agregar tu lógica de envío de formulario real
            alert('Cliente registrado con éxito');
            // Si quieres enviar el formulario después de la alerta, descomenta la siguiente línea:
            // this.submit();
        });
    }

    // Funciones para el login (asegurarse de que existan los elementos en el HTML)
    const loginBtn = document.getElementById('openLoginModalBtn'); // Botón para abrir el modal de login
    const loginModal = document.getElementById('loginModal');
    const closeLoginModalSpan = document.querySelector('#loginModal .close');

    if (loginBtn) {
        loginBtn.addEventListener('click', function() {
            showLoginModal();
        });
    }

    if (closeLoginModalSpan) {
        closeLoginModalSpan.addEventListener('click', function() {
            hideLoginModal();
        });
    }

    // Funciones para la imagen ampliada (asegurarse de que existan los elementos en el HTML)
    const welcomeImage = document.querySelector('.welcome-image'); // Tu imagen de bienvenida en index.html
    const galleryImages = document.querySelectorAll('.cartors-container .gallery img, .kitchen-section .gallery img, .playground-section .gallery img, .gallery-item img'); // Imágenes en galerías
    const imageModal = document.getElementById('imageModal');
    const closeImageModalSpan = document.querySelector('#imageModal .close-image');
    const enlargedImage = document.getElementById('enlargedImage');

    if (welcomeImage) {
        welcomeImage.addEventListener('click', function() {
            showImageModal(this.src);
        });
    }

    galleryImages.forEach(img => {
        img.addEventListener('click', function() {
            showImageModal(this.src);
        });
    });

    if (closeImageModalSpan) {
        closeImageModalSpan.addEventListener('click', function() {
            hideImageModal();
        });
    }

    // Funciones para el panel de control flotante
    const togglePanelBtn = document.getElementById('togglePanelBtn');
    const sidePanel = document.getElementById('sidePanel');
    const closePanelBtn = document.getElementById('closePanel');

    if (togglePanelBtn) {
        togglePanelBtn.addEventListener('click', function() {
            sidePanel.classList.toggle('open');
        });
    }

    if (closePanelBtn) {
        closePanelBtn.addEventListener('click', function() {
            sidePanel.classList.remove('open');
        });
    }
});


// Efecto de desplazamiento suave para los enlaces con anclas
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Funciones para el login
function showLoginModal() {
    const modal = document.getElementById("loginModal");
    if (modal) {
        modal.style.display = "block";
    }
}

function hideLoginModal() {
    const modal = document.getElementById("loginModal");
    if (modal) {
        modal.style.display = "none";
    }
}

// Funciones para la imagen ampliada
function showImageModal(src) {
    const modal = document.getElementById("imageModal");
    const enlargedImage = document.getElementById("enlargedImage");
    if (modal && enlargedImage) {
        enlargedImage.src = src;
        modal.style.display = "flex"; // Usar flex para centrar contenido con justify-content y align-items en CSS
    }
}

function hideImageModal() {
    const modal = document.getElementById("imageModal");
    if (modal) {
        modal.style.display = "none";
    }
}

// Cerrar modales al hacer clic fuera de ellos
window.onclick = function(event) {
    const loginModal = document.getElementById("loginModal");
    const imageModal = document.getElementById("imageModal");
    const sidePanel = document.getElementById("sidePanel");
    const togglePanelBtn = document.getElementById('togglePanelBtn');

    if (event.target === loginModal) {
        loginModal.style.display = "none";
    }
    if (event.target === imageModal) {
        imageModal.style.display = "none";
    }
    // Cerrar panel lateral si se hace clic fuera de él y no es el botón de toggle
    if (sidePanel && sidePanel.classList.contains('open') && event.target !== sidePanel && !sidePanel.contains(event.target) && event.target !== togglePanelBtn) {
        sidePanel.classList.remove('open');
    }
};