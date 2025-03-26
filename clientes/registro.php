<?php
// Incluir la conexión a la base de datos
include('../includes/db.php');

// Verificar si el formulario se envió
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Obtener los datos del formulario
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $telefono = $_POST['telefono'];

    // Validar que los campos no estén vacíos
    if (!empty($nombre) && !empty($email) && !empty($telefono)) {
        // Escapar los datos para evitar inyección SQL
        $nombre = mysqli_real_escape_string($conn, $nombre);
        $email = mysqli_real_escape_string($conn, $email);
        $telefono = mysqli_real_escape_string($conn, $telefono);

        // Crear la consulta SQL
        $query = "INSERT INTO clientes (nombre, email, telefono) VALUES ('$nombre', '$email', '$telefono')";

        // Ejecutar la consulta
        if (mysqli_query($conn, $query)) {
            echo "<p>Cliente registrado con éxito.</p>";
        } else {
            echo "<p>Error al registrar el cliente: " . mysqli_error($conn) . "</p>";
        }
    } else {
        echo "<p>Todos los campos son obligatorios.</p>";
    }
}
?>


<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registro de Clientes</title>
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
    <section class="centrado">
            <h1>Registro de Clientes</h1>
            <p>Registra aquí tus datos</p>
            <form id="registroForm" action="registro.php" method="POST">
            <label for="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" required>
            
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
            
            <label for="telefono">Teléfono:</label>
            <input type="tel" id="telefono" name="telefono" required>
            
            <button type="submit">Registrar</button>
        </form>
        </section>
    </main>

<!-- SECCIÓN DE CUADRO CENTRADO PARA RELLENAR -->
<section class="centrado">
    <h1>TÍTULO DE LA SECCIÓN</h1>
    <p>Párrafo de la sección</p>
</section>

    <footer>
        <p>&copy; 2023 Cartor's SAS. Todos los derechos reservados.</p>
    </footer>
    <script src="../js/scripts.js"></script>
</body>
</html>