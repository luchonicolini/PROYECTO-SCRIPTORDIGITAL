
import { BookOpen, Laptop, Globe, Shield, Search, Map, Code2, Rocket, Github, Twitter, Linkedin, Instagram, Mic, Video } from "lucide-react"

export const SERVICES_DATA = {
    ACADEMIA: [
        {
            id: "a1",
            title: "Dirección & Producción Académica",
            desc: "Planificación y realización integral de tesis, papers e investigaciones.",
            icon: BookOpen,
            modal: {
                problem: "¿Tienes el conocimiento pero te trabas al redactarlo?",
                solution: "Servicio de optimización y guía. Organizamos tu caos, planificamos tu trabajo y te acompañamos en la redacción de tesis y ponencias. Estructuramos tus ideas para que cumplan con los más altos estándares académicos.",
                features: ["Planificación de Trabajos Prácticos", "Corrección de Estilo y Normas", "Investigación Rigurosa"],
                benefits: [
                    "Claridad metodológica inmediata",
                    "Ahorro de tiempo en correcciones",
                    "Producción académica de alto impacto"
                ],
                deliverables: [
                    "Cronograma de trabajo detallado",
                    "Borradores corregidos y comentados",
                    "Manuscrito final adaptado a normas"
                ]
            },
        },
        {
            id: "a2",
            title: "Oratoria & Coaching Escénico",
            desc: "Entrenamiento experto para conferencias, clases y defensa de tesis.",
            icon: Mic,
            modal: {
                problem: "¿Te genera ansiedad hablar frente a un tribunal o auditorio?",
                solution: "Coaching integral en oratoria y discursiva. Preparamos tu puesta en escena para que comuniques tus ideas con autoridad y seguridad. Transformamos el pánico en presencia escénica.",
                features: ["Simulacro de Defensa Oral", "Técnicas de Discursiva", "Manejo del Pánico Escénico"],
                benefits: [
                    "Confianza absoluta al exponer",
                    "Conexión real con la audiencia",
                    "Manejo profesional de preguntas difíciles"
                ],
                deliverables: [
                    "Grabación de simulacros con feedback",
                    "Guion de presentación estructurado",
                    "Kit de técnicas de respiración y voz"
                ]
            },
        },
        {
            id: "a3",
            title: "Comunicación Digital (Reels & Foros)",
            desc: "Estrategias para posicionar tu voz académica en redes y espacios virtuales.",
            icon: Video,
            modal: {
                problem: "¿Tu perfil profesional es invisible en la era digital?",
                solution: "Te enseñamos a crear contenido de valor (Reels, Foros) y a desenvolverte en el ecosistema digital para potenciar tu carrera. Construimos tu marca personal académica en el mundo digital.",
                features: ["Guiones para Reels Educativos", "Participación en Foros", "Asesoramiento Integral de Marca"],
                benefits: [
                    "Visibilidad profesional ampliada",
                    "Posicionamiento como referente",
                    "Networking académico efectivo"
                ],
                deliverables: [
                    "Calendario de contenidos mensual",
                    "Guiones optimizados para video",
                    "Auditoría de perfiles sociales"
                ]
            },
        },
    ],
    TECNOLOGIA: [
        {
            id: "t1",
            title: "Desarrollo de Web Apps",
            desc: "Sistemas a medida que automatizan tu gestión administrativa.",
            icon: Laptop,
            modal: {
                problem: "¿Tu institución sigue dependiendo de Excel y papeles?",
                solution:
                    "Creamos plataformas centralizadas para alumnos, pagos y calificaciones. Accesibles desde cualquier lugar, seguras y escalables para crecer con tu institución.",
                features: ["Panel de Control Administrativo", "Portal de Alumnos", "Reportes Automáticos PDF"],
                benefits: [
                    "Centralización de la información",
                    "Reducción de errores administrativos",
                    "Acceso 24/7 para alumnos y docentes"
                ],
                deliverables: [
                    "Código fuente propiedad del cliente",
                    "Documentación técnica completa",
                    "Deploy en servidor productivo"
                ]
            },
        },
        {
            id: "t2",
            title: "Infraestructura LMS (Moodle/Canvas)",
            desc: "Campus Virtuales propios, rápidos y sin caídas.",
            icon: Globe,
            modal: {
                problem: "¿Se cae el sistema cuando todos los alumnos entran a rendir?",
                solution:
                    "Despliegue de servidores dedicados optimizados para alta concurrencia. Configuramos entornos de aprendizaje robustos que soportan miles de usuarios simultáneos.",
                features: ["Servidores de Alta Disponibilidad", "Backups Diarios Automáticos", "Personalización de Marca (White Label)"],
                benefits: [
                    "Experiencia de usuario fluida",
                    "Seguridad de datos garantizada",
                    "Independencia tecnológica"
                ],
                deliverables: [
                    "Plataforma LMS instalada y configurada",
                    "Capacitación para administradores",
                    "Plan de mantenimiento preventivo"
                ]
            },
        },
        {
            id: "t3",
            title: "Seguridad & Auditoría",
            desc: "Protección de bases de datos y activos digitales.",
            icon: Shield,
            modal: {
                problem: "¿Qué pasaría si pierdes los datos de tus clientes hoy?",
                solution:
                    "Auditoría de vulnerabilidades y blindaje de infraestructura para cumplir normativas. Implementamos protocolos de seguridad bancaria en tu ecosistema educativo.",
                features: ["Encriptación de Punta a Punta", "Tests de Penetración", "Protocolos de Recuperación ante Desastres"],
                benefits: [
                    "Continuidad del negocio asegurada",
                    "Confianza de alumnos y socios",
                    "Blindaje contra ciberataques"
                ],
                deliverables: [
                    "Informe de auditoría de seguridad",
                    "Plan de remediación de vulnerabilidades",
                    "Certificado de seguridad implementada"
                ]
            },
        },
    ],
}

export const METHODOLOGY_STEPS = [
    {
        number: "01",
        label: "DIAGNÓSTICO",
        title: "Diagnóstico (Sin Cargo)",
        description: "Nos reunimos para entender tu problema real. Analizamos la viabilidad de tu proyecto antes de que inviertas un centavo.",
        icon: Search,
    },
    {
        number: "02",
        label: "ESTRATEGIA",
        title: "Hoja de Ruta",
        description: "Diseñamos un plan claro. Definimos alcance legal y técnico, costos y tiempos exactos. Sin sorpresas.",
        icon: Map,
    },
    {
        number: "03",
        label: "DESARROLLO",
        title: "Construcción Ágil",
        description: "Creamos tu solución semana a semana. Te mostramos avances visuales para que valides el rumbo del proyecto.",
        icon: Code2,
    },
    {
        number: "04",
        label: "LANZAMIENTO",
        title: "Entrega & Soporte",
        description: "Te entregamos las llaves de tu plataforma funcionando, capacitamos a tu equipo y te damos garantía técnica.",
        icon: Rocket,
    }
]

export const FAQ_ITEMS = [
    {
        id: "item-1",
        question: "¿Cómo y cuándo me pasan el presupuesto?",
        answer:
            "En nuestra primera reunión de diagnóstico (que es sin cargo), evaluamos el estado actual de tu proyecto, los objetivos y la complejidad. Al finalizar esa misma charla, te entregamos una cotización exacta y opciones de planes de trabajo. Sin sorpresas ni costos ocultos.",
    },
    {
        id: "item-2",
        question: "¿Garantizan la confidencialidad de mi tesis o investigación?",
        answer:
            "Absolutamente. Firmamos un Acuerdo de Confidencialidad (NDA) antes de comenzar. Tu investigación, datos, autoría y resultados te pertenecen al 100%. Nosotros operamos como tus asesores y directores técnicos, manteniendo estricta reserva profesional.",
    },
    {
        id: "item-3",
        question: "¿Trabajan con Normas APA, Vancouver, etc.?",
        answer:
            "Sí. Nos adaptamos a los requisitos de estilo de tu universidad o revista científica. Ya sea APA (7ma edición), Vancouver, Chicago, Harvard, o formatos específicos de tu facultad, garantizamos el cumplimiento milimétrico del formato exigido.",
    },
    {
        id: "item-4",
        question: "¿Cuánto tiempo demora el proceso de asesoría?",
        answer:
            "Depende completamente de la etapa en la que te encuentres. Una corrección y optimización final puede tomar de 2 a 4 semanas. Un acompañamiento integral desde el plan de tesis hasta la defensa oral puede abarcar varios meses. Definimos un cronograma estricto en el primer encuentro.",
    },
]

export const NAV_LINKS = [
    { name: "Manifiesto", href: "#manifiesto" },
    { name: "Servicios", href: "#servicios" },
    { name: "Taller", href: "#taller" },
    { name: "Metodología", href: "#metodologia" },
    { name: "Equipo", href: "#equipo" },
    { name: "FAQ", href: "#faq" },
]

export const SOCIAL_LINKS = [
    { icon: Github, label: "Github", href: "https://github.com/scriptordigital" },
    { icon: Twitter, label: "Twitter", href: "https://twitter.com/scriptordigital" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/company/scriptor-digital" },
    { icon: Instagram, label: "Instagram", href: "https://instagram.com/scriptordigital" },
]

export const FOOTER_LINKS = {
    EXPLORE: [
        { label: "Servicios", href: "#servicios" },
        { label: "Manifiesto", href: "#manifiesto" },
        { label: "Equipo", href: "#equipo" },
        { label: "Blog", href: "#blog" },
    ],
    LEGAL: [
        { label: "Términos y Condiciones", href: "/terms" },
        { label: "Política de Privacidad", href: "/privacy" },
        { label: "Cookies", href: "/privacy" },
        { label: "Licencias", href: "/terms" },
    ]
}
