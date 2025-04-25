// Manejo del formulario de registro (si existe un elemento con id="registroForm")
document.addEventListener('DOMContentLoaded', function() {
  const registroForm = document.getElementById('registroForm');
  if (registroForm) {
      registroForm.addEventListener('submit', function(event) {
          event.preventDefault();
          alert('Cliente registrado con éxito');
          this.submit();
      });
  }
});

// Efecto de desplazamiento suave para los enlaces con anclas
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Funciones para el modal de login
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

// Funciones para el modal de imagen ampliada
function showImageModal(src) {
  const modal = document.getElementById("imageModal");
  const enlargedImage = document.getElementById("enlargedImage");
  if (modal && enlargedImage) {
      enlargedImage.src = src;
      modal.style.display = "flex";
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
  
  if (event.target === loginModal) {
      loginModal.style.display = "none";
  }
  if (event.target === imageModal) {
      imageModal.style.display = "none";
  }
};

// Mostrar el modal de login si hay un error al cargar la página
window.onload = function() {
  <?php if ($errorMessage): ?>
      showLoginModal();
  <?php endif; ?>
};

// -----------------------------------------------------------------------------------------
