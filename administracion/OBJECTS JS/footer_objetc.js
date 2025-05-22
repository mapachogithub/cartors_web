// footer_object.js
const footerobjectContent = `
    <style>
        footer {
            background: #fff;
            padding: 20px;
            text-align: center;
            box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
        }

        footer p {
            font-family: 'Noto Sans', sans-serif;
            font-size: 0.9rem;
            color: #666;
            margin: 5px 0;
        }

        /* Estilos para el ícono de Instagram */
        footer .social-icon {
            margin-top: 10px;
        }

        footer .social-icon a {
            display: inline-block;
            margin: 0 5px;
            color: #666; /* Color del ícono */
            text-decoration: none;
        }

        footer .social-icon a:hover {
            color: #007bff; /* Color del ícono al pasar el mouse */
        }
    </style>
    <footer>
        <p>© 2025 Cartor's SAS.</p>
        <p>Todos los derechos reservados.</p>
        <br>
        <p>Codificación Fontend & Backend:</p>
        <p>Francisco Quiñones Maldonado - Soluciones Tecnológicas</p>
        <div class="social-icon">
            <a href="https://www.instagram.com/soltech.info/" target="_blank" aria-label="Instagram de Soluciones Tecnológicas">
                <img src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" alt="Instagram: https://www.instagram.com/soltech.info/" style="width: 24px; height: 24px; vertical-align: middle;">
                </a>
                <a href="https://api.whatsapp.com/send?phone=573102685524" target="_blank" class="whatsapp-btn" aria-label="Contactar por WhatsApp">
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp: +57-31028685524" style="width: 24px; height: 24px; vertical-align: middle;">
                </a>
        </div>
    </footer>
`;

document.addEventListener('DOMContentLoaded', () => {
    const footerPlaceholder = document.getElementById('admin-footer-placeholder');

    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = footerobjectContent;
        console.log("Footer insertado exitosamente.");
    } else {
        console.error("No se encontró el elemento con ID 'admin-footer-placeholder'. Asegurarse de que exista.");
    }
});