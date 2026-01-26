
const projectsData = {
    1: {
        id: 1,
        title: "E-commerce App",
        desc: "Una tienda online moderna con carrito de compras y pasarela de pagos.",
        subtitle: "Experiencia de compra fluida y diseño minimalista.",
        image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=800&q=80",
        tags: ["React", "Node.js", "Stripe"],
        content: (
            <>
                <p>Este proyecto nació de la necesidad de crear una experiencia de compra online que fuera rápida, intuitiva y visualmente atractiva.</p>
                <h3>El Desafío</h3>
                <p>Integrar un sistema de pagos seguro (Stripe) manteniendo una interfaz de usuario limpia y sin fricciones durante el checkout.</p>
                <h3>Solución Técnica</h3>
                <p>Utilizamos React para el frontend por su capacidad de mantener el estado del carrito de forma eficiente. Para el backend, Node.js maneja las transacciones de forma segura.</p>
            </>
        )
    },
    2: {
        id: 2,
        title: "Dashboard Financiero",
        desc: "Visualización de datos en tiempo real para análisis de mercado.",
        subtitle: "Toma de decisiones basada en datos precisos.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
        tags: ["Vue.js", "D3.js", "Firebase"],
        content: (
            <>
                <p>Un dashboard interactivo diseñado para traders y analistas financieros que necesitan visualizar grandes volúmenes de datos en tiempo real.</p>
                <h3>Visualización de Datos</h3>
                <p>Implementamos D3.js para crear gráficos complejos que se actualizan milisegundo a milisegundo sin perder rendimiento.</p>
            </>
        )
    },
    3: {
        id: 3,
        title: "App de Viajes",
        desc: "Planificador de itinerarios inteligente con mapas interactivos.",
        subtitle: "Tu compañero de viaje personal en tu bolsillo.",
        image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80",
        tags: ["React Native", "Google Maps API", "Redux"],
        content: (
            <>
                <p>Más que una simple app de mapas, esta aplicación ayuda a los viajeros a descubrir gemas ocultas y planificar rutas óptimas.</p>
                <h3>Integración de Mapas</h3>
                <p>La personalización profunda de la API de Google Maps nos permitió añadir capas de información turística sobre la cartografía estándar.</p>
            </>
        )
    }
};

export default projectsData;
