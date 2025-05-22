// index_header.js
const indexHeaderContent = `
    <header class="dynamic-header">
        <div class="header-top-row">
            <div class="header-left">
                <button class="back-button" onclick="history.back()">
                    <span class="icon-arrow">&#8592;</span> Atrás
                </button>
                <div class="logo-area">
                    <img src="images/logoia1.jpeg" alt="Logo de Cartor's SAS" class="logo-header">
                    <h1>Cartor's SAS </h1>
                    
                </div>
            </div>
            
        </div>
        <nav class="header-nav">
            <ul>
                <li><a href="index.html">Inicio</a></li>
                <li><a href="clientes.html">Clientes</a></li>
                <li><a href="contactenos.html">Contáctanos</a></li>
                <li><a href="galeria.html">Galería</a></li>
                <li><a href="certificaciones_solicitud.html">Certificaciones</a></li>
                <li><a href="loginstarpage.html" class="login-link-mobile">Iniciar Sesión</a></li>
            </ul>
        </nav>
    </header>
`;

const headerStyles = `
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Montserrat:wght@400;500;600&display=swap');

    .dynamic-header {
        background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
        padding: 10px 30px;
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
        display: flex;
        flex-direction: column;
        align-items: center;
        position: sticky;
        top: 0;
        width: 100%;
        z-index: 1000;
        font-family: 'Poppins', sans-serif;
        border-bottom: 1px solid #1a242f;
    }

    .header-top-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding-bottom: 10px;
    }

    .header-left {
        display: flex;
        align-items: center;
        gap: 20px;
    }

    .header-right-actions {
        display: flex;
        align-items: center;
        gap: 15px;
    }

    /* Estilos para el botón de "Atrás" */
    .back-button {
        background-color: rgba(255, 255, 255, 0.1);
        color: #e0e0e0;
        border: none;
        padding: 8px 15px;
        border-radius: 4px;
        cursor: pointer;
        font-size: 0.85em;
        font-weight: 500;
        display: flex;
        align-items: center;
        gap: 6px;
        transition: all 0.3s ease;
        box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
        transform-style: preserve-3d;
    }

    .back-button .icon-arrow { /* Icono para el botón Atrás (&#8592; es el código HTML para la flecha izquierda) */
        transform: translateZ(5px);
        transition: transform 0.3s ease;
    }

    .back-button:hover {
        background-color: rgba(255, 255, 255, 0.2);
        color: #ffffff;
        box-shadow: 0 5px 12px rgba(0, 0, 0, 0.3);
        transform: translateY(-1px) translateZ(3px);
    }

    .back-button:hover .icon-arrow {
        transform: translateZ(8px) translateX(-1px); /* Mueve la flecha hacia la izquierda */
    }

    .logo-area {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .logo-header {
        max-height: 50px;
        border-radius: 6px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;
    }

    .logo-header:hover {
        transform: scale(1.03) rotateZ(1deg);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    }

    .dynamic-header h1 {
        font-family: 'Montserrat', sans-serif;
        font-size: 1.8em;
        font-weight: 700;
        color: #ecf0f1;
        text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
        margin: 0;
        letter-spacing: -0.8px;
    }

    .header-nav {
        width: 100%;
        background-color: rgba(0, 0, 0, 0.1);
        padding: 8px 0;
        border-radius: 5px;
        margin-top: 10px;
    }

    .header-nav ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 25px;
        flex-wrap: wrap;
    }

    .header-nav ul li a {
        text-decoration: none;
        color: #c7d2de;
        font-weight: 500;
        font-size: 0.95em;
        padding: 6px 0;
        position: relative;
        transition: color 0.3s ease, transform 0.2s ease;
        display: block;
    }

    .header-nav ul li a::after {
        content: '';
        position: absolute;
        width: 0;
        height: 2px;
        bottom: -3px;
        left: 50%;
        transform: translateX(-50%);
        background-color: #3498db;
        border-radius: 1px;
        transition: width 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55);
    }

    .header-nav ul li a:hover {
        color: #ffffff;
        transform: translateY(-2px);
        text-shadow: 0 0 6px rgba(255, 255, 255, 0.2);
    }

    .header-nav ul li a:hover::after {
        width: 100%;
    }

    /* Estilo para el enlace "Iniciar Sesión" cuando está en el menú (móvil) */
    .login-link-mobile {
        color: #6dae44 !important; /* Un verde distintivo para "Iniciar Sesión" */
        font-weight: 600 !important;
        transition: color 0.3s ease;
    }

    .login-link-mobile:hover {
        color: #8ac052 !important;
        text-shadow: 0 0 8px rgba(109, 174, 68, 0.4) !important;
    }

    .menu-toggle {
        display: none; /* Por defecto oculto en desktop */
        background: none;
        border: none;
        cursor: pointer;
        padding: 8px;
        z-index: 1001;
    }

    .menu-toggle .bar {
        display: block;
        width: 22px;
        height: 2.5px;
        background-color: #ecf0f1;
        margin: 4px 0;
        transition: all 0.3s ease-in-out;
    }

    .menu-toggle.active .bar:nth-child(1) {
        transform: translateY(6px) rotate(45deg);
    }

    .menu-toggle.active .bar:nth-child(2) {
        opacity: 0;
    }

    .menu-toggle.active .bar:nth-child(3) {
        transform: translateY(-6px) rotate(-45deg);
    }

    /* Media Queries */
    @media (max-width: 1200px) {
        .dynamic-header {
            padding: 10px 20px;
        }
        .header-nav ul {
            gap: 20px;
        }
        .dynamic-header h1 {
            font-size: 1.6em;
        }
        .logo-header {
            max-height: 50px;
        }
    }

    @media (max-width: 992px) {
        .dynamic-header {
            flex-direction: column;
            padding: 8px 20px;
        }

        .header-top-row {
            flex-wrap: wrap;
            justify-content: space-between;
            width: 100%;
            padding-bottom: 8px;
        }

        .header-left {
            width: auto;
            justify-content: flex-start;
            gap: 15px;
        }

        .logo-area {
            justify-content: flex-start;
            flex-grow: 0;
        }

        .back-button { /* Ajuste del botón atrás en móvil */
            order: -1;
            width: auto;
            font-size: 0.8em;
            padding: 7px 12px;
        }

        .header-right-actions {
            order: 1;
            gap: 10px;
        }

        /* Oculto el login-button-desktop en esta vista */
        .login-button-desktop {
            display: none;
        }

        .menu-toggle {
            display: block; /* Muestro el botón de hamburguesa en pantallas más pequeñas */
            position: static;
            right: auto;
            top: auto;
        }

        .header-nav {
            width: 100%;
            background: rgba(44, 62, 80, 0.98);
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            max-height: 0; /* Oculto el menú por defecto */
            overflow: hidden;
            transition: max-height 0.4s ease-out, padding 0.4s ease-out;
            box-shadow: 0 8px 15px rgba(0, 0, 0, 0.25);
            border-bottom-left-radius: 6px;
            border-bottom-right-radius: 6px;
            padding: 0 15px;
            display: block; /* Cambio de display para que max-height funcione */
        }

        .header-nav.open {
            max-height: 350px; /* Altura para mostrar todos los ítems */
            padding: 10px 15px;
        }

        .header-nav ul {
            flex-direction: column;
            align-items: center;
            padding: 8px 0;
        }

        .header-nav ul li {
            width: 100%;
            text-align: center;
            margin-bottom: 8px;
        }

        .header-nav ul li:last-child {
            margin-bottom: 0;
        }

        .header-nav ul li a {
            padding: 10px 12px;
            border-radius: 4px;
            background-color: rgba(255, 255, 255, 0.06);
            display: block;
            color: #ecf0f1;
            font-size: 0.9em;
        }

        .header-nav ul li a:hover {
            background-color: rgba(255, 255, 255, 0.12);
            transform: translateY(-0.5px);
        }

        .header-nav ul li a::after {
            display: none; /* Oculto el subrayado en el menú móvil */
        }
        /* Aplico el color verde distintivo al enlace "Iniciar Sesión" en el menú móvil */
        .login-link-mobile {
            color: #6dae44 !important;
            font-weight: 600 !important;
        }
        .login-link-mobile:hover {
            color: #8ac052 !important;
            text-shadow: none !important;
        }
    }

    @media (max-width: 768px) {
        .dynamic-header {
            padding: 8px 15px;
        }
        .dynamic-header h1 {
            font-size: 1.4em;
        }
        .logo-header {
            max-height: 45px;
        }
        .back-button {
            padding: 6px 10px;
            font-size: 0.75em;
        }
    }

    @media (max-width: 480px) {
        .dynamic-header h1 {
            font-size: 1.2em;
            letter-spacing: -0.3px;
        }
        .logo-header {
            max-height: 40px;
        }
        .header-left {
            gap: 10px;
        }
    }
`;

document.addEventListener('DOMContentLoaded', () => {
    const headerPlaceholder = document.getElementById('admin-header-placeholder'); // Mantengo el ID para la inserción

    if (headerPlaceholder) {
        headerPlaceholder.innerHTML = indexHeaderContent;

        const styleElement = document.createElement('style');
        styleElement.textContent = headerStyles;
        document.head.appendChild(styleElement);

        const menuToggle = document.querySelector('.menu-toggle');
        const headerNav = document.querySelector('.header-nav');

        if (menuToggle && headerNav) {
            menuToggle.addEventListener('click', () => {
                headerNav.classList.toggle('open');
                menuToggle.classList.toggle('active');
            });
            // Cierra el menú si se hace clic fuera de él
            document.addEventListener('click', (event) => {
                if (!headerNav.contains(event.target) && !menuToggle.contains(event.target) && headerNav.classList.contains('open')) {
                    headerNav.classList.remove('open');
                    menuToggle.classList.remove('active');
                }
            });
        }

        console.log("Header de index insertado exitosamente con botón 'Atrás' y 'Iniciar Sesión' en el menú.");
    } else {
        console.error("No se encontró el elemento con ID 'admin-header-placeholder'. Asegúrate de que exista en tu HTML.");
    }
});