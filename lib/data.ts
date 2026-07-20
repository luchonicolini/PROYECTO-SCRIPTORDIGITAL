
import { BookOpen, Laptop, Globe, Shield, Search, Map, Code2, Rocket, Github, Twitter, Linkedin, Instagram, Mic, Video } from "lucide-react"

export const SERVICES_DATA = {
    ACADEMIA: [
        {
            id: "a1",
            title: "Orientación Metodológica & Editorial",
            desc: "Acompañamiento para planificar, estructurar y fortalecer tesis, papers e investigaciones de autoría propia.",
            icon: BookOpen,
            modal: {
                problem: "¿Tenés el conocimiento, pero te cuesta organizarlo y comunicarlo?",
                solution: "Te ayudamos a ordenar el problema, construir una metodología coherente y mejorar la comunicación de tus propias ideas. Orientamos y revisamos el proceso sin sustituir tu autoría ni producir evaluaciones en tu nombre.",
                features: ["Plan de Investigación", "Revisión de Estilo y Normas", "Devoluciones Metodológicas"],
                benefits: [
                    "Claridad metodológica inmediata",
                    "Ahorro de tiempo en correcciones",
                    "Mayor autonomía para tomar decisiones"
                ],
                deliverables: [
                    "Cronograma de trabajo detallado",
                    "Borradores revisados y comentados",
                    "Guía de adecuación a las normas requeridas"
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
                solution: "Entrenamos tu presentación y trabajamos sobre tus propios argumentos para que puedas comunicar con claridad, responder preguntas y defender decisiones metodológicas con seguridad.",
                features: ["Simulacro de Defensa Oral", "Estructura del Discurso", "Manejo de la Ansiedad Escénica"],
                benefits: [
                    "Mayor seguridad al exponer",
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
                solution: "Te ayudamos a crear contenido de valor y a desenvolverte con criterio en espacios digitales para potenciar tu carrera. Trabajamos juntos una presencia profesional coherente con tu perfil académico.",
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
            title: "Desarrollo de Aplicaciones Web",
            desc: "Sistemas a medida para ordenar información y simplificar la gestión administrativa.",
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
                    "Puesta en producción"
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
                features: ["Servidores de Alta Disponibilidad", "Copias de Seguridad Diarias", "Personalización de Marca"],
                benefits: [
                    "Experiencia de usuario fluida",
                    "Mejores prácticas para proteger datos",
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
                problem: "¿Qué pasaría si hoy perdés los datos de tus clientes?",
                solution:
                    "Auditamos vulnerabilidades y fortalecemos la infraestructura para reducir riesgos y acompañar el cumplimiento de las normas aplicables a tu organización.",
                features: ["Encriptación de Punta a Punta", "Tests de Penetración", "Protocolos de Recuperación ante Desastres"],
                benefits: [
                    "Continuidad del negocio asegurada",
                    "Confianza de alumnos y socios",
                    "Reducción de riesgos de seguridad"
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
        description: "Nos reunimos para entender tu necesidad y analizar la viabilidad del proyecto antes de definir una inversión.",
        icon: Search,
    },
    {
        number: "02",
        label: "ESTRATEGIA",
        title: "Hoja de Ruta",
        description: "Diseñamos un plan claro y definimos alcance, etapas, costos y tiempos estimados antes de comenzar.",
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
        description: "Ponemos la solución en funcionamiento, capacitamos a tu equipo y acordamos una etapa de soporte posterior a la entrega.",
        icon: Rocket,
    }
]

export const FAQ_ITEMS = [
    {
        id: "item-1",
        question: "¿Cuándo recibo una propuesta de trabajo?",
        answer:
            "En la primera reunión de diagnóstico, que es sin cargo, revisamos el estado actual de tu proyecto, sus objetivos y su complejidad. Luego te enviamos una propuesta detallada con alcance, etapas, tiempos estimados y alternativas de trabajo.",
    },
    {
        id: "item-2",
            question: "¿Cómo protegen la confidencialidad de mi tesis o investigación?",
        answer:
            "Trabajamos bajo reserva profesional y podemos firmar un Acuerdo de Confidencialidad (NDA) antes de comenzar. Tu investigación, datos, autoría y resultados siguen siendo tuyos; nuestro rol es exclusivamente de orientación y revisión.",
    },
    {
        id: "item-3",
        question: "¿Trabajan con Normas APA, Vancouver, etc.?",
        answer:
            "Sí. Revisamos el trabajo según los requisitos de tu universidad o revista científica, como APA 7.ª edición, Vancouver, Chicago, Harvard o un formato institucional específico.",
    },
    {
        id: "item-4",
        question: "¿Cuánto tiempo demora el proceso de asesoría?",
        answer:
            "Depende completamente de la etapa en la que te encuentres. Una corrección y optimización final puede tomar de 2 a 4 semanas. Un acompañamiento integral desde el plan de tesis hasta la defensa oral puede abarcar varios meses. Definimos un cronograma estricto en el primer encuentro.",
    },
    {
        id: "item-5",
        question: "¿Ustedes escriben o realizan la tesis por mí?",
        answer:
            "No. No sustituimos la autoría del estudiante ni realizamos evaluaciones en su nombre. Te ayudamos a delimitar el problema, organizar el proceso, revisar borradores propios, comprender devoluciones y preparar la defensa para que puedas desarrollar un trabajo auténtico y sólido.",
    },
]

export const NAV_LINKS = [
    { name: "Servicios", href: "/#servicios" },
    { name: "Casos", href: "/casos" },
    { name: "Metodología", href: "/#metodologia" },
    { name: "Equipo", href: "/nosotros" },
    { name: "Contacto", href: "/contacto" },
]

export const SOCIAL_LINKS = [
    { icon: Github, label: "GitHub" },
    { icon: Twitter, label: "X / Twitter" },
    { icon: Linkedin, label: "LinkedIn" },
    { icon: Instagram, label: "Instagram" },
]

export const FOOTER_LINKS = {
    EXPLORE: [
        { label: "Orientación académica", href: "/asesoria-academica" },
        { label: "Soluciones tecnológicas", href: "/soluciones-tecnologicas" },
        { label: "Casos", href: "/casos" },
        { label: "Equipo", href: "/nosotros" },
        { label: "Contacto", href: "/contacto" },
        { label: "Blog", href: "#blog" },
    ],
    LEGAL: [
        { label: "Términos y Condiciones", href: "/terms" },
        { label: "Política de Privacidad", href: "/privacy" },
        { label: "Cookies", href: "/privacy" },
        { label: "Licencias", href: "/terms" },
    ]
}
