
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
        question: "¿La plataforma es 100% de mi propiedad?",
        answer:
            "Absolutamente. A diferencia de las soluciones SaaS alquiladas, nosotros construimos infraestructura digital que te pertenece. Te entregamos todo el código fuente y los accesos administrativos una vez finalizado el proyecto.",
    },
    {
        id: "item-2",
        question: "¿Ofrecen factura A?",
        answer:
            "Sí, emitimos facturas tipo A o B según corresponda. Todo nuestro trabajo se realiza bajo un marco legal formal y transparente, ideal para rendiciones de cuentas institucionales.",
    },
    {
        id: "item-3",
        question: "¿Qué pasa si necesito soporte?",
        answer:
            "Todos nuestros desarrollos incluyen un período de garantía post-lanzamiento. Además, ofrecemos planes de mantenimiento opcionales para asegurar que tu plataforma evolucione junto con tu institución sin que tengas que contratar técnicos internos.",
    },
    {
        id: "item-4",
        question: "¿Cuánto tiempo demora el desarrollo?",
        answer:
            "Depende de la complejidad. Una web institucional promedio toma entre 2 a 4 semanas. Un campus virtual o aplicación a medida puede tomar de 4 a 8 semanas. Cumplimos estrictamente los plazos pactados por contrato.",
    },
]

export const NAV_LINKS = [
    { name: "Manifiesto", href: "#manifiesto" },
    { name: "Servicios", href: "#servicios" },
    { name: "Metodología", href: "#metodologia" },
    { name: "Equipo", href: "#equipo" },
    { name: "FAQ", href: "#faq" },
]

export const SOCIAL_LINKS = [
    { icon: Github, label: "Github", href: "#" },
    { icon: Twitter, label: "Twitter", href: "#" },
    { icon: Linkedin, label: "LinkedIn", href: "#" },
    { icon: Instagram, label: "Instagram", href: "#" },
]

export const FOOTER_LINKS = {
    EXPLORE: [
        { label: "Servicios", href: "#servicios" },
        { label: "Manifiesto", href: "#manifiesto" },
        { label: "Equipo", href: "#equipo" },
        { label: "Blog", href: "#blog" },
    ],
    LEGAL: [
        { label: "Términos y Condiciones", href: "#" },
        { label: "Política de Privacidad", href: "#" },
        { label: "Cookies", href: "#" },
        { label: "Licencias", href: "#" },
    ]
}
