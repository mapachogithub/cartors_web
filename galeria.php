<?php include('includes/db.php'); ?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Galería - Cartor's SAS</title>
    <link rel="stylesheet" href="css/styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</head>
<body>
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

    <main>
        <section class="hero">
            <h1>Nuestra Galería</h1>
            <p>Explora nuestros proyectos y descubre cómo transformamos espacios con nuestras soluciones profesionales.</p>
        </section>

        <section class="gallery">
            <div class="gallery-item">
                <img src="images/galeria1.jpg" alt="Instalación de Cocinas">
                <div class="overlay">
                    <h3>Instalación de Cocinas</h3>
                    <p>Diseño e instalación de cocinas industriales a medida.</p>
                </div>
            </div>
            <div class="gallery-item">
                <img src="images/galeria2recut.jpg" alt="Mantenimiento de Equipos">
                <div class="overlay">
                    <h3>Mantenimiento de Equipos</h3>
                    <p>Servicios de mantenimiento para equipos industriales.</p>
                </div>
            </div>
            <div class="gallery-item">
                <img src="images/galeria3.jpg" alt="Certificación de Parques">
                <div class="overlay">
                    <h3>Certificación de Parques</h3>
                    <p>Certificación de parques infantiles según normas de seguridad.</p>
                </div>
            </div>
            <div class="gallery-item">
                <img src="images/galeria4.jpg" alt="Proyectos Personalizados">
                <div class="overlay">
                    <h3>Proyectos Personalizados</h3>
                    <p>Soluciones a medida para cada necesidad.</p>
                </div>
            </div>
            <div class="gallery-item">
                <img src="images/galeria4.jpg" alt="Proyectos Personalizados">
                <div class="overlay">
                    <h3>Proyectos Personalizados</h3>
                    <p>Soluciones a medida para cada necesidad.</p>
                </div>
            </div>
            <div class="gallery-item">
                <img src="images/galeria4.jpg" alt="Proyectos Personalizados">
                <div class="overlay">
                    <h3>Proyectos Personalizados</h3>
                    <p>Soluciones a medida para cada necesidad.</p>
                </div>
            </div>
        </section>
    </main>

    <footer>
        <p>© <?php echo date("Y"); ?> Cartor's SAS. Todos los derechos reservados.</p>
        <div class="social-icons">
            <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
            <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
            <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
        </div>
    </footer>

    <script src="js/scripts.js"></script>
</body>
</html>