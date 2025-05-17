// admin_header.js
const adminHeaderContent = `
    <header class="dynamic-header">
        <div class="header-left">
            <button class="back-button" onclick="history.back()">
                <span class="icon-arrow">&#8592;</span> Atrás
            </button>
            <div class="logo-area">
                <img src="../images/logoia1.jpeg" alt="Logo de Cartor's SAS" class="logo-header">
                <h1>Panel de Administración</h1>
            </div>
        </div>
        <nav class="header-nav">
            <ul>
                <li><a href="admin.html">Inicio</a></li>
                <li><a href="nuestros_empleados.html">Empleados</a></li>
                <li><a href="nuestros_clientes.html">Clientes</a></li>
                <li><a href="mensajes_de_contacto.html">Mensajes</a></li>
                <li><a href="certificaciones.html">Certificaciones</a></li>
                <li><a href="certificaciones_pendientes.html">Por Emitir</a></li>
                <li><a href="facturas.html">Facturas</a></li>
                <li><a href="../index.html" class="logout-link">Cerrar Sesión</a></li>
            </ul>
        </nav>
        <button class="menu-toggle" aria-label="Abrir menú">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </button>
    </header>
`;

const headerStyles = `
    /* Importación de fuentes, si no están ya en tu CSS principal */
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Montserrat:wght@400;500;600&display=swap');

    .dynamic-header {
        background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%); /* Degradado oscuro para un look sofisticado */
        padding: 15px 40px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25); /* Sombra 3D pronunciada */
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: sticky;
        top: 0;
        width: 100%;
        z-index: 1000;
        font-family: 'Poppins', sans-serif;
        border-bottom: 2px solid #1a242f; /* Borde inferior sutil */
    }

    .header-left {
        display: flex;
        align-items: center;
        gap: 30px; /* Espacio entre el botón de atrás y el área del logo/título */
    }

    .back-button {
        background-color: rgba(255, 255, 255, 0.15); /* Fondo semitransparente */
        color: #e0e0e0;
        border: none;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
        font-size: 0.9em;
        font-weight: 500;
        display: flex;
        align-items: center;
        gap: 8px;
        transition: all 0.3s ease;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Sombra para efecto 3D */
        transform-style: preserve-3d; /* Para transformaciones 3D */
    }

    .back-button .icon-arrow {
        transform: translateZ(5px); /* Empuja la flecha hacia adelante */
        transition: transform 0.3s ease;
    }

    .back-button:hover {
        background-color: rgba(255, 255, 255, 0.25);
        color: #ffffff;
        box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
        transform: translateY(-2px) translateZ(5px); /* Efecto de "levantar" y acercar */
    }

    .back-button:hover .icon-arrow {
        transform: translateZ(10px) translateX(-2px); /* Mueve la flecha ligeramente */
    }

    .logo-area {
        display: flex;
        align-items: center;
        gap: 15px; /* Espacio entre logo y título */
    }

    .logo-header {
        max-height: 60px;
        border-radius: 8px;
        box-shadow: 0 3px 10px rgba(0, 0, 0, 0.15); /* Sombra para el logo */
        transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;
    }

    .logo-header:hover {
        transform: scale(1.05) rotateZ(2deg); /* Ligero giro y escala al hover */
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.25);
    }

    .dynamic-header h1 {
        font-family: 'Montserrat', sans-serif;
        font-size: 2.1em;
        font-weight: 700;
        color: #ecf0f1; /* Color claro para contrastar con el fondo oscuro */
        text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3); /* Sombra de texto para efecto 3D */
        margin: 0;
        letter-spacing: -1px;
    }

    .header-nav ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        align-items: center;
        gap: 35px; /* Más espacio entre los elementos de la navegación */
    }

    .header-nav ul li a {
        text-decoration: none;
        color: #c7d2de; /* Gris azulado suave */
        font-weight: 500;
        font-size: 1.05em;
        padding: 8px 0;
        position: relative;
        transition: color 0.3s ease, transform 0.2s ease;
        display: block;
    }

    .header-nav ul li a::after {
        content: '';
        position: absolute;
        width: 0;
        height: 3px;
        bottom: -5px;
        left: 50%;
        transform: translateX(-50%);
        background-color: #3498db; /* Azul vibrante */
        border-radius: 2px;
        transition: width 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55); /* Efecto elástico */
    }

    .header-nav ul li a:hover {
        color: #ffffff;
        transform: translateY(-3px);
        text-shadow: 0 0 8px rgba(255, 255, 255, 0.3); /* Resplandor al hover */
    }

    .header-nav ul li a:hover::after {
        width: 100%;
    }

    .logout-link {
        color: #e74c3c !important; /* Rojo para cerrar sesión */
        font-weight: 600 !important;
        transition: color 0.3s ease;
    }

    .logout-link:hover {
        color: #c0392b !important;
        text-shadow: 0 0 10px rgba(231, 76, 60, 0.5) !important;
    }

    .menu-toggle {
        display: none; /* Oculto por defecto en desktop */
        background: none;
        border: none;
        cursor: pointer;
        padding: 10px;
        z-index: 1001; /* Asegura que esté por encima del menú */
    }

    .menu-toggle .bar {
        display: block;
        width: 25px;
        height: 3px;
        background-color: #ecf0f1;
        margin: 5px 0;
        transition: all 0.3s ease-in-out;
    }

    /* Animación para el menú toggle (hamburguesa) */
    .menu-toggle.active .bar:nth-child(1) {
        transform: translateY(8px) rotate(45deg);
    }

    .menu-toggle.active .bar:nth-child(2) {
        opacity: 0;
    }

    .menu-toggle.active .bar:nth-child(3) {
        transform: translateY(-8px) rotate(-45deg);
    }

    /* MEDIA QUERIES PARA RESPONSIVIDAD DEL HEADER */
    @media (max-width: 1200px) {
        .dynamic-header {
            padding: 15px 25px;
        }
        .header-nav ul {
            gap: 25px;
        }
        .dynamic-header h1 {
            font-size: 1.8em;
        }
        .logo-header {
            max-height: 55px;
        }
    }

    @media (max-width: 992px) {
        .dynamic-header {
            flex-wrap: wrap; /* Permite que los elementos salten de línea */
            justify-content: center;
            gap: 20px; /* Espacio general entre bloques */
        }

        .header-left {
            width: 100%; /* Ocupa todo el ancho */
            justify-content: center; /* Centra el botón y el logo/título */
            gap: 20px;
        }

        .logo-area {
            justify-content: center; /* Centra logo y título dentro de su contenedor */
            flex-grow: 1; /* Permite que el área del logo ocupe espacio */
        }

        .back-button {
            order: -1; /* Mueve el botón al principio */
            width: auto; /* Ancho automático, no 100% */
        }

        .header-nav {
            order: 1; /* Coloca la navegación debajo del logo/título */
            width: 100%;
            background: rgba(44, 62, 80, 0.95); /* Fondo oscuro semitransparente para el menú desplegado */
            position: absolute;
            top: 100%; /* Debajo del header */
            left: 0;
            right: 0;
            max-height: 0; /* Oculto por defecto */
            overflow: hidden;
            transition: max-height 0.5s ease-out, padding 0.5s ease-out;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
            border-bottom-left-radius: 8px;
            border-bottom-right-radius: 8px;
            padding: 0 20px; /* Sin padding vertical al inicio */
        }

        .header-nav.open {
            max-height: 300px; /* Altura máxima para mostrar el menú */
            padding: 15px 20px; /* Padding vertical al abrir */
        }

        .header-nav ul {
            flex-direction: column; /* Apila los elementos verticalmente */
            align-items: center; /* Centra los items */
            padding: 10px 0;
        }

        .header-nav ul li {
            width: 100%;
            text-align: center;
            margin-bottom: 10px; /* Espacio entre items */
        }

        .header-nav ul li:last-child {
            margin-bottom: 0;
        }

        .header-nav ul li a {
            padding: 12px 15px;
            border-radius: 5px;
            background-color: rgba(255, 255, 255, 0.08); /* Fondo para cada enlace */
            display: block;
            color: #ecf0f1;
        }

        .header-nav ul li a:hover {
            background-color: rgba(255, 255, 255, 0.15);
            transform: translateY(-1px);
        }

        .header-nav ul li a::after {
            display: none; /* Deshabilita el efecto de subrayado en móvil */
        }

        .menu-toggle {
            display: block; /* Muestra el botón de hamburguesa */
            order: 2; /* Colócalo después de la navegación en pantallas pequeñas */
            position: absolute; /* Posición absoluta para flotar sobre el contenido */
            right: 25px;
            top: 25px;
        }
    }

    @media (max-width: 768px) {
        .dynamic-header {
            padding: 10px 20px;
        }
        .dynamic-header h1 {
            font-size: 1.6em;
        }
        .logo-header {
            max-height: 50px;
        }
        .back-button {
            padding: 8px 15px;
            font-size: 0.8em;
        }
    }

    @media (max-width: 480px) {
        .dynamic-header h1 {
            font-size: 1.4em;
            letter-spacing: -0.5px;
        }
        .logo-header {
            max-height: 45px;
        }
        .header-left {
            gap: 15px;
        }
    }
`;

document.addEventListener('DOMContentLoaded', () => {
    const headerPlaceholder = document.getElementById('admin-header-placeholder');

    if (headerPlaceholder) {
        headerPlaceholder.innerHTML = adminHeaderContent;

        // Crear y añadir el elemento <style> al head del documento
        const styleElement = document.createElement('style');
        styleElement.textContent = headerStyles;
        document.head.appendChild(styleElement);

        // Lógica para el botón de menú hamburguesa
        const menuToggle = document.querySelector('.menu-toggle');
        const headerNav = document.querySelector('.header-nav');

        if (menuToggle && headerNav) {
            menuToggle.addEventListener('click', () => {
                headerNav.classList.toggle('open');
                menuToggle.classList.toggle('active');
            });
            // Cerrar menú al hacer clic fuera (opcional)
            document.addEventListener('click', (event) => {
                if (!headerNav.contains(event.target) && !menuToggle.contains(event.target) && headerNav.classList.contains('open')) {
                    headerNav.classList.remove('open');
                    menuToggle.classList.remove('active');
                }
            });
        }

        console.log("Header y estilos insertados exitosamente.");
    } else {
        console.error("No se encontró el elemento con ID 'admin-header-placeholder'. Asegurarse de que exista en mi HTML.");
    }
});