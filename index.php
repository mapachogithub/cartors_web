<?php
$errorMessage = '';
if (isset($_GET["error"]) && $_GET["error"] == 1) {
    $errorMessage = "Credenciales incorrectas. Por favor, intenta de nuevo.";
}
include('includes/db.php');
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cartor's SAS</title>
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
    <!-- Header -->
    <header>
        <div class="logo">
            <img src="images/logo.png" alt="Cartor's SAS">
        </div>
        <nav>
            <ul>
                <li><a href="index.php">Inicio</a></li>
                <li><a href="clientes/registro.php">Clientes</a></li>
                <li><a href="administracion/clientes.php">Administración</a></li>
                <li><a href="galeria.php">Galería</a></li>
            </ul>
        </nav>
    </header>

    <!-- Botón flotante de inicio de sesión -->
    <button class="login-btn" onclick="showLoginModal()">Iniciar Sesión</button>

    <!-- Modal o config del botón de Login -->
    <div id="loginModal" class="modal">
        <div class="modal-content">
            <span class="close" onclick="hideLoginModal()">×</span>
            <h2>Iniciar Sesión</h2>
            <form method="POST" action="login.php">
                <input type="text" name="username" placeholder="Usuario" required>
                <input type="password" name="password" placeholder="Contraseña" required>
                <button type="submit">Acceder</button>
                <?php if ($errorMessage): ?>
                    <p id="error-msg" style="color: red;"><?php echo $errorMessage; ?></p>
                <?php endif; ?>
            </form>
        </div>
    </div>

    <!-- Contenido principal -->
    <main>
        <!-- Sección de bienvenida -->
        <section class="centrado">
            <h1>Bienvenido a Cartor's SAS</h1>
            <p>Cartor’s SAS es una empresa dedicada a la instalación y mantenimiento de cocinas y equipos industriales, así como a la instalación, mantenimiento y certificación de parques para niños de la compañía Soft Play.</p>
            <img src="images/FOTO1WELCOME.jpg" alt="Imagen de bienvenida" class="welcome-image" onclick="showImageModal(this.src)">
        </section>
        <!-- Config para la imagen ampliada de la bienvenida -->
        <div id="imageModal" class="image-modal">
            <span class="close-image" onclick="hideImageModal()">×</span>
            <img id="enlargedImage" src="" alt="Imagen ampliada">
        </div>

        <!-- Sección de servicios -->
        <section class="cartors-container">
            <h2>Nuestros servicios</h2>
            <p>En Cartor's ofrecemos los mejores productos y servicios para satisfacer tus necesidades. Nuestra experiencia nos respalda y estamos comprometidos con la calidad.</p>
            
            <!-- Lista de servicios -->
            <ul class="services-list">
                <li>Mantenimiento e instalación de cocinas industriales.</li>
                <li>Mantenimiento e instalación de parques infantiles.</li>
            </ul>

            <!-- Galería de imágenes -->
            <div class="gallery">
                <img src="img_descargadas/cocinas1.jpg" alt="Cocina Industrial 1" loading="lazy">
                <img src="img_descargadas/cocinas2.jpg" alt="Cocina Industrial 2" loading="lazy">
                <img src="img_descargadas/parques1.jpg" alt="Parque Infantil" loading="lazy">
            </div>
        </section>
    </main>

    <section class="centrado">
    <h1>TÍTULO DE LA SECCIÓN</h1>
    <p>Párrafo de la sección</p>
    </section>

    <!-- Footer -->
    <footer>
        <p>© <?php echo date("Y"); ?> Cartor's SAS. Todos los derechos reservados.</p>
        <div class="social-icons">
            <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
            <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
            <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
        </div>
    </footer>

<!-- Scripts -->
<script src="js/scripts.js"></script>
</body>
</html>