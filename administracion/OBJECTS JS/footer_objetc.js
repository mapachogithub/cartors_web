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
    </style>
    <footer>
        <p>© 2025 Cartor's SAS.</p>
        <p>Todos los derechos reservados.</p>
        <br>
        <p>Fontend & Backend:</p>
        <p>Francisco Quiñones Maldonado - Soluciones Tecnológicas</p>
    </footer>
`;

document.addEventListener('DOMContentLoaded', () => {
    // Intentando obtener el elemento donde se insertará el encabezado
    const footerPlaceholder = document.getElementById('admin-footer-placeholder');

    if (footerPlaceholder) {
        // Si el placeholder existe, insertar el contenido del encabezado
        footerPlaceholder.innerHTML = footerobjectContent;
        console.log("Footer insertado exitosamente."); // Mensaje para depuración
    } else {
        // Si el placeholder no se encuentra, muestrame un error en la consola
        console.error("No se encontró el elemento con ID 'admin-footer-placeholder'. Asegurarse de que exista en mi HTML.");
    }
});