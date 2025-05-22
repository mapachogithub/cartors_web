// panel.js

const SidePanel = {
    // Método para generar el HTML del panel dinámicamente
    getPanelHtml: function() {
        const path = window.location.pathname;
        const isIndexPage = path.endsWith('/index.html') || path === '/';

        let ulContent = `
            <li><a href="loginstarpage.html">Administración</a></li>
            <li><a href="">-------------------------------</a></li>
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
            <li class="close-panel-text-item"><a href="#" class="panel-close-text-link">Cerrar panel</a></li>
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
    // Este método ya no es necesario si los estilos se cargan desde styles.css
    injectStyles: function() {
        console.warn("Panel styles are expected to be loaded from an external stylesheet (e.g., styles.css). 'injectStyles' is no longer needed.");
    },

    // Método para inyectar el HTML del panel en la página
    render: function(targetElementId = 'body') {
        const targetElement = document.getElementById(targetElementId) || document.body;
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = this.getPanelHtml();

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
        const closeTextLink = sidePanel.querySelector('.panel-close-text-link'); // Nuevo: Seleccionar el enlace "Cerrar panel"

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

        // Event listener para el nuevo enlace "Cerrar panel"
        if (closeTextLink) {
            closeTextLink.addEventListener('click', (event) => {
                event.preventDefault(); // Evita que el '#' en el href recargue la página
                this.hidePanel();
            });
        }

        // Event listener para cerrar el panel cuando se hace clic en un enlace (excepto el de cerrar)
        panelLinks.forEach(link => {
            if (link !== closeTextLink) { // Asegura que no se duplique el evento para el enlace "Cerrar panel"
                link.addEventListener('click', () => {
                    this.hidePanel(); // Cierra el panel al hacer clic en un enlace
                });
            }
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