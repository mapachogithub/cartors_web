<?php
session_start();

// Credenciales válidas
$valid_username = "12345";
$valid_password = "12345";

// Verificar si ya está logueado
if (isset($_SESSION["loggedin"]) && $_SESSION["loggedin"] === true) {
    header("Location: administracion/clientes.php"); // Si ya está logueado, va directo a Administración
    exit;
}

// Manejar el envío del formulario
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $password = $_POST["password"];

    // Validar credenciales
    if ($username === $valid_username && $password === $valid_password) {
        // Iniciar sesión
        $_SESSION["loggedin"] = true;
        $_SESSION["username"] = $username;
        header("Location: administracion/clientes.php"); // Redirige a Administración tras login exitoso
        exit;
    } else {
        // Login fallido
        header("Location: index.php?error=1"); // Redirige a index con error
        exit;
    }
} else {
    // Si alguien accede directamente a login.php sin POST, redirige a index
    header("Location: index.php");
    exit;
}
?>