<?php include('../includes/db.php'); ?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gestión de Proyectos</title>
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
                <li><a href="../clientes/registro.php">Clientes</a></li>
                <li><a href="clientes.php">Administración</a></li>
                <li><a href="../galeria.php">Galería</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <h1>Gestión de Proyectos</h1>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Descripción</th>
                    <th>Estado</th>
                </tr>
            </thead>
            <tbody>
                <?php
                $query = "SELECT * FROM proyectos";
                $result = mysqli_query($conn, $query);

                while ($row = mysqli_fetch_assoc($result)) {
                    echo "<tr>
                            <td>{$row['id']}</td>
                            <td>{$row['nombre']}</td>
                            <td>{$row['descripcion']}</td>
                            <td>{$row['estado']}</td>
                          </tr>";
                }
                ?>
            </tbody>
        </table>
    </main>
    <footer>
        <p>&copy; 2023 Cartor's SAS. Todos los derechos reservados.</p>
    </footer>
    <script src="../js/scripts.js"></script>
</body>
</html>