# Scriptor Digital

Sitio institucional de **Scriptor Digital**, una consultora que combina orientación académica y desarrollo de soluciones digitales para profesionales e instituciones.

[Ver sitio en producción](https://scriptordigital.vercel.app/) · [Contacto](https://scriptordigital.vercel.app/contacto) · [Reportar un problema](https://github.com/luchonicolini/PROYECTO-SCRIPTORDIGITAL/issues)

## Sobre el proyecto

La aplicación presenta dos líneas de servicio claramente diferenciadas:

- **Orientación académica:** metodología, planificación, revisión y preparación de defensas, preservando siempre la autoría de cada persona.
- **Web y aplicaciones:** diseño y desarrollo de productos digitales, automatizaciones y herramientas de gestión orientadas a ventas y crecimiento.

La experiencia fue diseñada con una dirección visual editorial, navegación responsive, tema claro/oscuro y recorridos específicos para cada tipo de necesidad.

## Funcionalidades

- Portada orientada a conversión con dos rutas de servicio.
- Páginas independientes para servicios, casos, equipo y contacto.
- Tema claro y oscuro con contraste accesible.
- Formulario validado en cliente y servidor.
- Envío de consultas mediante Resend.
- Notificación interna opcional por WhatsApp mediante CallMeBot.
- Estados de éxito, error y funciones próximas claramente comunicados.
- Sitemap, robots, metadatos Open Graph y datos estructurados.
- Encabezados de seguridad y analítica con Vercel Analytics.

## Tecnologías

| Área | Herramientas |
| --- | --- |
| Framework | Next.js 16, App Router y React 19 |
| Lenguaje | TypeScript |
| Estilos | Tailwind CSS 4 |
| Interfaz | Radix UI y Lucide React |
| Animaciones | Framer Motion |
| Formularios | React Hook Form y Zod |
| Email | Resend |
| Despliegue | Vercel |

## Rutas principales

| Ruta | Contenido |
| --- | --- |
| `/` | Presentación general y propuesta de valor |
| `/asesoria-academica` | Servicios de orientación académica |
| `/soluciones-tecnologicas` | Desarrollo web, móvil y automatización |
| `/casos` | Escenarios representativos de trabajo |
| `/nosotros` | Equipo y enfoque profesional |
| `/contacto` | Canales de contacto y formulario |
| `/privacy` | Política de privacidad |
| `/terms` | Términos de uso |

## Comandos

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Inicia el servidor de desarrollo |
| `npm run lint` | Ejecuta ESLint |
| `npm run build` | Genera y valida la compilación de producción |
| `npm run start` | Ejecuta una compilación de producción |

## Estructura

```text
app/                     Rutas, layouts, acciones del servidor y metadatos
components/              Componentes compartidos y secciones de la interfaz
components/ui/           Primitivas reutilizables de la interfaz
lib/                     Datos, esquemas y utilidades
public/                  Imágenes y recursos estáticos
```

## Calidad y seguridad

Antes de abrir un pull request:

```bash
npm run lint
npm run build
```

Los datos del formulario se validan en cliente y servidor. Las credenciales se utilizan únicamente en el servidor y deben almacenarse como variables de entorno. Consulta [SECURITY.md](SECURITY.md) para informar vulnerabilidades.

## Despliegue

La rama `main` se despliega automáticamente en Vercel. La URL canónica de producción es:

<https://scriptordigital.vercel.app/>

## Colaboración

Las pautas para proponer cambios se encuentran en [CONTRIBUTING.md](CONTRIBUTING.md).

## Derechos de uso

Este repositorio contiene el código de un sitio comercial de Scriptor Digital. No se concede permiso de reutilización, redistribución o explotación comercial sin autorización expresa de sus titulares.

---

Desarrollado y mantenido por [Luciano Nicolini](https://github.com/luchonicolini) para Scriptor Digital.
