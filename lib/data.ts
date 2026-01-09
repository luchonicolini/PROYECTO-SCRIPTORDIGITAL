
import { GraduationCap, Gavel, BookOpen, Laptop, Globe, Shield, Search, Map, Code2, Rocket, Github, Twitter, Linkedin, Instagram } from "lucide-react"

export const SERVICES_DATA = {
    ACADEMIA: [
        {
            id: "a1",
            title: "Dirección de Tesis & Posgrado",
            desc: "Destrabamos investigaciones complejas con rigor metodológico.",
            icon: GraduationCap,
            modal: {
                problem: "¿Tu tesis está estancada hace meses por falta de feedback?",
                solution:
                    "Asignamos un director experto que estructura tu marco teórico, valida hipótesis y corrige estilo académico.",
                features: ["Adecuación Normas APA/Harvard", "Simulacro de Defensa Oral", "Cronograma de entregas garantizado"],
            },
        },
        {
            id: "a2",
            title: "Gestión CONEAU & Legales",
            desc: "Blindaje legal y acreditación para instituciones educativas.",
            icon: Gavel,
            modal: {
                problem: "¿Te abruma la burocracia de las acreditaciones oficiales?",
                solution:
                    "Gestionamos la presentación de carreras y validación institucional ante organismos oficiales sin errores técnicos.",
                features: ["Redacción de Estatutos", "Presentaciones CONEAU", "Propiedad Intelectual Institucional"],
            },
        },
        {
            id: "a3",
            title: "Producción Editorial",
            desc: "Transformamos conocimiento en libros con diseño de alta gama.",
            icon: BookOpen,
            modal: {
                problem: "¿Tus investigaciones quedan guardadas en un cajón?",
                solution:
                    "Editamos, diseñamos y publicamos tu obra académica con registro de ISBN y calidad de librería.",
                features: ["Diseño de Portada Premium", "Maquetación Editorial", "Registro de Propiedad Intelectual"],
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
                    "Creamos plataformas centralizadas para alumnos, pagos y calificaciones. Accesibles desde cualquier lugar.",
                features: ["Panel de Control Administrativo", "Portal de Alumnos", "Reportes Automáticos PDF"],
            },
        },
        {
            id: "t2",
            title: "Infraestructura LMS (Moodle/Canvas)",
            desc: "Campus Virtuales propios, rápidos y sin caídas.",
            icon: Globe, // Using Globe as a proxy for LMS/Online
            modal: {
                problem: "¿Se cae el sistema cuando todos los alumnos entran a rendir?",
                solution:
                    "Despliegue de servidores dedicados optimizados para alta concurrencia. Tus datos, tu control.",
                features: ["Servidores de Alta Disponibilidad", "Backups Diarios Automáticos", "Personalización de Marca (White Label)"],
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
                    "Auditoría de vulnerabilidades y blindaje de infraestructura para cumplir normativas de protección de datos.",
                features: ["Encriptación de Punta a Punta", "Tests de Penetración", "Protocolos de Recuperación ante Desastres"],
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
    { name: "Servicios", href: "#servicios" },
    { name: "Metodología", href: "#metodologia" },
    { name: "Manifiesto", href: "#manifiesto" },
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
