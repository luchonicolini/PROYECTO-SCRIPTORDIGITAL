# Guía de contribución

Gracias por colaborar con Scriptor Digital. El objetivo de estas pautas es mantener cambios pequeños, verificables y fáciles de revisar.

## Flujo recomendado

1. Crea una rama desde `main` con un nombre descriptivo, por ejemplo `feat/nueva-seccion` o `fix/formulario-contacto`.
2. Mantén cada cambio limitado a un único objetivo.
3. No incorpores archivos `.env`, credenciales, datos personales ni artefactos generados.
4. Ejecuta las validaciones locales.
5. Abre un pull request explicando el problema, la solución y su impacto visual o funcional.

## Validación obligatoria

```bash
npm ci
npm run lint
npm run build
```

Para cambios visuales, comprueba como mínimo:

- Tema claro y oscuro.
- Navegación con teclado.
- Vista móvil, tablet y escritorio.
- Estados hover, focus, loading, success y error.

## Estilo de código

- Utiliza TypeScript y componentes funcionales.
- Reutiliza los tokens semánticos definidos en `app/globals.css`.
- Evita colores o tamaños escritos directamente cuando exista un token equivalente.
- Conserva textos e interfaces en español rioplatense.
- Añade `aria-label` a controles sin texto y mantén los iconos decorativos fuera del árbol accesible.

## Commits y pull requests

Utiliza mensajes breves y descriptivos:

```text
fix contact form feedback
improve mobile navigation
update service content
```

Un pull request debe incluir:

- Qué cambió.
- Por qué era necesario.
- Cómo se verificó.
- Capturas cuando el cambio sea visual.

Los problemas de seguridad no deben publicarse como issues. Sigue las instrucciones de [SECURITY.md](SECURITY.md).
