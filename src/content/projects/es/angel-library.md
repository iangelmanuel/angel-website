---
title: "angel.library"
description: "Biblioteca personal de conocimiento técnico: snippets, recetas, comandos y referencias rápidas para desarrollo web. Consulta conceptos, recupera código y continúa aprendiendo desde un solo lugar."
publishDate: 2026-08-16
technologies: ["Astro", "TypeScript", "Tailwind CSS", "React"]
githubUrl:
  { url: "https://github.com/iangelmanuel/angel-library", isPrivate: false }

liveUrl: "https://angel-library.vercel.app"
image: "../../assets/projects/angel-library-project.webp"
featured: true
status: "completed"
---

angel.library es mi segundo cerebro técnico: una biblioteca personal donde documento snippets, recetas, comandos, patrones y hallazgos de desarrollo web, organizados para consultarse en segundos en vez de repetir la misma búsqueda en internet cada seis meses.

## Funcionalidades Clave

- **Modelo Categoría → Subcategoría → Módulo → Sección**: cada documento vive en `src/content/<categoría>/<subcategoría>/<archivo>.md`; la carpeta decide dónde aparece y su URL, así que recategorizar es mover un archivo, nunca editar código.
- **14 tipos de contenido con su propio esquema**: guías, recetas, comandos, snippets, patrones, integraciones y más, cada uno con campos obligatorios distintos (`command` en comandos, `url` + `resourceCategory` en recursos), validados en una única colección Zod.
- **Terminal integrada (Ctrl/Cmd+K o `/`)**: una consola con estética de shell real donde se busca por texto, se filtra por tags con `#` o se ejecutan comandos de navegación (`/ls`, `/cd`, `/random`), con atajos personales para entradas privadas.
- **Búsqueda instantánea con Fuse.js**: un índice generado en build (`search-index.json`) se descarga una sola vez por sesión y permite buscar sin round-trip al servidor.
- **Bloques de código con superpoderes**: cabecera con nombre de archivo, botón de copiar por bloque y un botón "copiar todo" que concatena el código completo de una página en un solo bloque pegable; los bloques `bash` de instalación se expanden solos en pestañas pnpm/Bun/npm.
- **SEO completo desde una sola fuente**: Open Graph, Twitter Cards, JSON-LD de Organization y WebSite, sitemap y robots.txt generados en build a partir de un único objeto `SITE`, sin datos duplicados entre páginas.

## Arquitectura Técnica

- **Framework**: Astro 7 en modo `static`, cero backend — todo el contenido se resuelve en build time.
- **Contenido**: una única `content collection` con `z.discriminatedUnion("type", …)`; el id de cada entrada es su ruta de archivo, de donde se derivan categoría, subcategoría y URL sin duplicar esa información en el frontmatter.
- **Validación en build**: tres verificaciones propias corren dentro de `getStaticPaths()` y **rompen el build** con un mensaje en español si una carpeta no está declarada, una referencia (`related`, `technologies`) apunta a algo inexistente, o un enlace interno del cuerpo no lleva a ninguna parte.
- **Interactividad mínima**: React se usa solo donde hace falta estado en cliente — la terminal y la navegación móvil —; el resto del sitio es Astro puro sin JavaScript.
- **Estilos**: Tailwind CSS v4 vía `@tailwindcss/vite` (sin `tailwind.config`), con todos los tokens de diseño como variables CSS y tema oscuro fijo.
- **Pipeline de Markdown a medida**: Shiki para resaltado de sintaxis, un plugin remark que detecta instalaciones y genera las pestañas de package manager, y enlaces externos con `rel="noopener noreferrer"` automático.
- **CI/CD**: GitHub Actions corre `astro check`, ESLint y Prettier en paralelo, y un build de producción como gate final antes de cualquier merge.
- **Despliegue**: Vercel, con la URL de producción resuelta desde variables de entorno y un valor por defecto seguro para que un deploy sin configurar nunca publique el sitio en `noindex`.

## Retos Únicos

- **Migrar 689 documentos sin romper una sola URL**: el proyecto empezó organizado por tipo de contenido (`src/content/guides/`, `src/content/commands/`…) y pasó a organizarse por categoría. Escribí un script de migración con modo `--dry-run` que reescribió referencias, enlaces internos y rutas de archivo de golpe, verificado contra el árbol completo antes de tocar nada.
- **Colapsar 14 colecciones en una sin perder tipado**: sustituir 14 `defineCollection` por una unión discriminada de Zod exigió que cada tipo conservara sus campos obligatorios (un `command` no es opcional en `commands`, una `resource` exige `url`) mientras compartían el mismo loader y las mismas validaciones cruzadas.
- **Que un contenido roto nunca llegue a producción**: en vez de confiar en revisión manual sobre cientos de archivos Markdown, construí tres validadores que fallan el build con el archivo y la línea exactos — estructura de carpetas, referencias entre entradas y enlaces internos del cuerpo.
- **Una dependencia circular en la resolución de dominio**: `astro.config.mjs` necesitaba leer el dominio público desde la misma configuración que Astro rellena a partir de ese campo, lo que producía un `localhost` silencioso en cualquier build sin la variable de entorno explícita. La solución fue leer del entorno del proceso directamente y usar el dominio de producción como valor por defecto, no `localhost`.

## Diseño y Experiencia de Usuario

La interfaz sigue una estética de **terminal/pixel-art**: tema oscuro fijo, tipografía Geist (Sans para texto, Mono para código, Pixel para títulos), esquinas cuadradas y un efecto de hover que simula una ventana "encendiéndose" con el color de acento de su categoría.

- **La terminal como paradigma de navegación**, no solo como buscador: Ctrl/Cmd+K abre una consola real donde escribir es más rápido que hacer clic, pensada para quien ya sabe lo que busca.
- **Breadcrumbs con forma de prompt de shell** (`dev@workspace angel.library : ~/categoría/entrada`), coherentes con el resto de la identidad visual.
- **Orden de lectura intencional**: dentro de una subcategoría, el botón anterior/siguiente respeta una curva de aprendizaje fija — fundamentos y guías antes que recetas y trucos —, para que nunca aparezca una solución antes que el concepto que la sostiene.
- **Sidebar de tres niveles** (categoría → subcategoría → entrada) con guía vertical fina en vez de sangrías grandes, necesaria para que cientos de entradas quepan sin volverse ilegibles.
- **Accesibilidad de base**: skip link, `<main>`/`<nav>`/`<footer>` semánticos, un solo `h1` por página y una página 404 propia que mantiene el layout completo — sidebar y buscador incluidos — para que un enlace roto no saque al lector del sitio.
