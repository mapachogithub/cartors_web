// panel.js

const SidePanel = {
    // CSS del panel embebido como una cadena de texto
    css: `
        /* --- Panel de Control Flotante --- */
        .control-panel-container {
            position: fixed;
            top: 150px; /* Ajusta este valor según la altura de tu header + margen */
            right: 0;
            transform: none;
            z-index: 1000;
        }

        .toggle-panel-btn {
            background-color: rgba(0, 115, 230, 0.7);
            color: white;
            border: none;
            padding: 10px 15px;
            font-size: 1.5rem;
            cursor: pointer;
            border-radius: 5px 0 0 5px;
            box-shadow: -2px 0 5px rgba(0, 0, 0, 0.2);
            transition: background-color 0.3s ease;
        }

        .toggle-panel-btn:hover {
            background-color: rgba(0, 91, 181, 0.8);
        }

        .side-panel {
            position: fixed;
            top: 0;
            right: -250px; /* Igual al width para ocultarlo */
            width: 250px;
            height: 100%;
            background-color: rgba(22, 71, 134, 0.9);
            box-shadow: -5px 0 15px rgba(0, 0, 0, 0.2);
            padding: 20px;
            box-sizing: border-box;
            transition: right 0.3s ease;
            z-index: 999;
            display: flex;
            flex-direction: column;
            padding-top: 80px; /* Espacio para el header si el panel empieza en top: 0 */
        }

        .side-panel.open {
            right: 0;
        }

        .side-panel h3 {
            font-size: 1.4rem;
            margin-bottom: 20px;
            text-align: center;
            color: white; /* Mejor contraste */
        }

        .side-panel ul {
            list-style: none;
            padding: 0;
            margin: 0;
            flex-grow: 1;
        }

        .side-panel ul li {
            margin-bottom: 10px;
        }

        .side-panel ul li a {
            display: block;
            padding: 10px 15px;
            background-color: rgba(0, 115, 230, 0.1);
            color: white; /* Mejor contraste */
            text-decoration: none;
            border-radius: 5px;
            transition: background-color 0.3s ease, color 0.3s ease;
        }

        .side-panel ul li a:hover {
            background-color: rgba(0, 115, 230, 0.2);
            color: #f0f0f0;
        }

        .close-panel {
            font-size: 2rem;
            color: white; /* Mejor contraste */
            cursor: pointer;
            align-self: flex-end;
            margin-bottom: 10px;
            position: absolute; /* Para posicionar la 'x' dentro del panel */
            top: 15px; /* Ajusta la posición de la 'x' */
            right: 15px; /* Ajusta la posición de la 'x' */
        }

        .close-panel:hover {
            color: #f0f0f0;
        }

        /* Responsive styles for the panel */
        @media (max-width: 768px) {
            .control-panel-container {
                top: auto;
                bottom: 20px;
                right: 20px;
                transform: none;
            }

            .toggle-panel-btn {
                padding: 8px 12px;
                font-size: 1.2rem;
                border-radius: 50%; /* Hacerlo redondo en móvil */
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            }

            .side-panel {
                width: 100%;
                right: -100%;
                border-radius: 0;
                box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
                padding-top: 60px; /* Ajustar padding para la 'x' en móvil */
                justify-content: flex-start;
                height: 100vh;
                top: 0;
            }

            .side-panel.open {
                right: 0;
            }

            .close-panel {
                position: absolute;
                top: 15px;
                right: 15px;
                font-size: 1.8rem;
            }

            .side-panel h3 {
                font-size: 1.2rem;
                margin-bottom: 15px;
            }

            .side-panel ul li a {
                padding: 12px 15px;
                font-size: 0.95rem;
            }
        }

        @media (max-width: 480px) {
            .side-panel h3 {
                font-size: 1.1rem;
            }
            .side-panel ul li a {
                font-size: 0.9rem;
            }
        }
    `,

    // Método para generar el HTML del panel dinámicamente
    getPanelHtml: function() {
        const path = window.location.pathname;
        const isIndexPage = path.endsWith('/index.html') || path === '/';

        let ulContent = `
            <li><a href="loginstarpage.html">Administración</a></li>
        `;

        // Añadir enlaces a secciones solo si estamos en index.html
        if (isIndexPage) {
            ulContent += `
                <li><a href="#welcome-section">Inicio</a></li>
                <li><a href="#servicios-section">Nuestros Servicios</a></li>
                <li><a href="#kitchen-section">Cocinas Industriales</a></li>
                <li><a href="#playground-section">Parques Infantiles</a></li>
            `;
        }

        ulContent += `
            <li><a> - Pestañas - </a></li>
            <li><a href="certificaciones_solicitud.html">Certificaciones</a></li>
            <li><a href="galeria.html">Galería</a></li>
            <li><a href="clientes.html">Clientes</a></li>
            <li><a href="contactenos.html">Contáctanos</a></li>
        `;

        return `
            <div id="controlPanelContainer" class="control-panel-container">
                <button id="togglePanelBtn" class="toggle-panel-btn">☰</button>
            </div>
            <div id="sidePanel" class="side-panel">
                <span class="close-panel">×</span>
                <h3>Panel</h3>
                <ul>
                    ${ulContent}
                </ul>
            </div>
        `;
    },

    // Método para inyectar los estilos en la página
    injectStyles: function() {
        const style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = this.css;
        document.head.appendChild(style);
    },

    // Método para inyectar el HTML del panel en la página
    render: function(targetElementId = 'body') {
        this.injectStyles(); // Inyectar los estilos primero

        const targetElement = document.getElementById(targetElementId) || document.body;
        const tempDiv = document.createElement('div');
        // Usar el método para obtener el HTML dinámico
        tempDiv.innerHTML = this.getPanelHtml();

        // Mover los elementos del tempDiv al elemento objetivo
        while (tempDiv.firstChild) {
            targetElement.appendChild(tempDiv.firstChild);
        }

        this.setupEventListeners(); // Configurar los event listeners después de que los elementos estén en el DOM
    },

    // Método para configurar los listeners de eventos
    setupEventListeners: function() {
        const togglePanelBtn = document.getElementById('togglePanelBtn');
        const sidePanel = document.getElementById('sidePanel');
        const closePanelSpan = sidePanel.querySelector('.close-panel'); // Seleccionar la 'x'
        const panelLinks = sidePanel.querySelectorAll('ul li a'); // Seleccionar todos los enlaces del panel

        // Event listener para el botón de toggle (☰)
        if (togglePanelBtn) {
            togglePanelBtn.addEventListener('click', () => {
                sidePanel.classList.toggle('open');
            });
        }

        // Event listener para la 'x' de cerrar
        if (closePanelSpan) {
            closePanelSpan.addEventListener('click', () => {
                this.hidePanel(); // Usamos this.hidePanel() para llamar al método del objeto
            });
        }

        // Event listener para cerrar el panel cuando se hace clic en un enlace
        panelLinks.forEach(link => {
            link.addEventListener('click', () => {
                this.hidePanel(); // Cierra el panel al hacer clic en un enlace
            });
        });

        // Event listener para cerrar el panel al hacer clic fuera
        window.addEventListener('click', (event) => {
            if (sidePanel && sidePanel.classList.contains('open') &&
                event.target !== togglePanelBtn && !sidePanel.contains(event.target)) {
                this.hidePanel();
            }
        });
    },

    // Método para ocultar el panel (equivalente a hideSidePanel)
    hidePanel: function() {
        const sidePanel = document.getElementById('sidePanel');
        if (sidePanel) {
            sidePanel.classList.remove('open');
        }
    }
};

// Puedes exportar el objeto si estás usando módulos ES6
// export default SidePanel;

// Si no usas módulos, asegúrate de que el objeto esté disponible globalmente
// o llama a SidePanel.render() directamente en tu HTML o scripts.js