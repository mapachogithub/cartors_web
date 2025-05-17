// index_header.js
const indexHeaderContent = `
    <style>

header {
    background-color: #2c3e50; /* Azul oscuro principal */
    padding: 30px 0 0 0; /* Padding superior, sin padding inferior para la franja */
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
    position: sticky;
    top: 0;
    z-index: 1000;
    width: 100%;
    display: flex;
    flex-direction: column; /* Cambiado a columna para apilar el nav y la franja */
    justify-content: center;
    align-items: center;
    min-height: 100px;
    position: relative; /* Necesario para la franja de abajo */
}

nav {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px 20px 20px; /* Añadido padding inferior para separar el menú de la franja */
    flex-grow: 1; /* Permite que el nav ocupe el espacio disponible */
}

nav ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

nav ul li {
    margin: 0 25px;
}

nav ul li a {
    text-decoration: none;
    color: #ecf0f1;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.25em;
    font-weight: 600;
    padding: 12px 0;
    transition: color 0.3s ease, transform 0.2s ease;
    position: relative;
    display: block;
}

nav ul li a:hover {
    color: #3498db;
    transform: translateY(-2px);
}

nav ul li a::after {
    content: '';
    position: absolute;
    width: 0;
    height: 4px;
    background-color: #3498db;
    left: 50%;
    bottom: -8px;
    transform: translateX(-50%);
    transition: width 0.3s ease;
}

nav ul li a:hover::after {
    width: 100%;
}

nav ul li a.active {
    color: #3498db;
    border-bottom: 4px solid #3498db;
    padding-bottom: 8px;
}

/* Franja inferior del header */
header::after {
    content: '';
    display: block;
    width: 100%;
    height: 25px; /* Altura de la franja */
    background-color: #6dae44; /* Verde corporativo, similar al de la imagen */
    box-shadow: inset 0 3px 6px rgba(0, 0, 0, 0.1); /* Sombra interna sutil */
}

@media (max-width: 768px) {
    nav ul {
        flex-direction: column;
        text-align: center;
        width: 100%;
    }

    nav ul li {
        margin: 10px 0;
    }

    header::after {
        height: 20px; /* Ajuste para pantallas pequeñas */
    }
}

@media (max-width: 480px) {
    header {
        padding: 10px 0 0 0;
        min-height: 80px;
    }

    nav ul li a {
        font-size: 1em;
    }

    header::after {
        height: 15px;
    }
}
        
    </style>


    <header>
        <nav>
            <ul>
                <li><a href="index.html">Inicio</a></li>
                <li><a href="clientes.html">Clientes</a></li>
                <li><a href="contactenos.html">Contáctanos</a></li>
                <li><a href="galeria.html">Galería</a></li>
                <li><a href="certificaciones_solicitud.html">Certificaciones</a></li>
            </ul>
        </nav>
    </header>
`;

document.addEventListener('DOMContentLoaded', () => {
    const headerPlaceholder = document.getElementById('admin-header-placeholder'); 
    if (headerPlaceholder) {
        headerPlaceholder.innerHTML = indexHeaderContent;
        console.log("Header de index insertado exitosamente.");
    } else {
        console.error("No se encontró el elemento con ID 'admin-header-placeholder'. Asegúrate de que exista en tu HTML.");
    }
});