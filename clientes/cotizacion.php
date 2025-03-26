<?php include('../includes/db.php'); ?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cotización de Servicios</title>
    <link rel="stylesheet" href="../css/styles.css">
</head>
<body>
    <header>
        <div class="logo">
            <img src="../images/logo.png" alt="Cartor's SAS">
        </div>
        <nav>
            <ul>
                <li><a href="../index.php">Inicio</a></li>
                <li><a href="registro.php">Clientes</a></li>
                <li><a href="../administracion/clientes.php">Administración</a></li>
                <li><a href="../galeria.php">Galería</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <h1>Cotización de Servicios</h1>
        <form id="cotizacionForm" action="cotizacion.php" method="POST">
            <label for="servicio">Servicio:</label>
            <select id="servicio" name="servicio" required>
                <option value="instalacion">Instalación de Cocinas</option>
                <option value="mantenimiento">Mantenimiento de Equipos</option>
                <option value="certificacion">Certificación de Parques</option>
            </select>

            <label for="descripcion">Descripción:</label>
            <textarea id="descripcion" name="descripcion" rows="4" required></textarea>

            <label for="presupuesto">Presupuesto estimado:</label>
            <input type="number" id="presupuesto" name="presupuesto" required>

            <button type="submit">Enviar Cotización</button>
        </form>

        <?php
        if ($_SERVER['REQUEST_METHOD'] == 'POST') {
            $servicio = $_POST['servicio'];
            $descripcion = $_POST['descripcion'];
            $presupuesto = $_POST['presupuesto'];

            if (!empty($servicio) && !empty($descripcion) && !empty($presupuesto)) {
                $servicio = mysqli_real_escape_string($conn, $servicio);
                $descripcion = mysqli_real_escape_string($conn, $descripcion);
                $presupuesto = mysqli_real_escape_string($conn, $presupuesto);

                $query = "INSERT INTO cotizaciones (servicio, descripcion, presupuesto) VALUES ('$servicio', '$descripcion', '$presupuesto')";
                if (mysqli_query($conn, $query)) {
                    echo "<p>Cotización enviada con éxito.</p>";
                } else {
                    echo "<p>Error al enviar la cotización: " . mysqli_error($conn) . "</p>";
                }
            } else {
                echo "<p>Todos los campos son obligatorios.</p>";
            }
        }
        ?>
    </main>
    <footer>
        <p>&copy; 2023 Cartor's SAS. Todos los derechos reservados.</p>
    </footer>
    <script src="../js/scripts.js"></script>
</body>
</html>