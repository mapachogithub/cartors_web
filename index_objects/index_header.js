// index_header.js
const indexHeaderContent = `
    <style>
        /* Header */
        
header {
    background-image: url('../images/headeria6.jpeg'); /* Cambia esto por la ruta de tu imagen */
    background-size: cover; /* La imagen cubrirá todo el espacio */
    background-position: center; /* Centra la imagen */
    background-repeat: no-repeat; /* Evita que se repita la imagen */
    color: #fff;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100px; /* Ajusta esto según tus necesidades */
}

header {
    height: 90vh; /* 100% PARA QUE SE VEA TODA LA IMÁGEN DEL HEADER*/
    /* Resto de propiedades... */
}

header .logo {
    margin-bottom: 15px;
}

header .logo img {
    height: 80px;
    display: block;
    margin: 0 auto;
}

nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
}

nav ul li {
    margin: 0 15px;
}

nav ul li a {
    color: black;
    text-decoration: none;
    font-weight: bold;
}

nav ul li a:hover {
    color: #0073e6;
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