# Cómo crear un post de blog

Guía de referencia para agregar entradas al blog (`src/features/blog/`).

## Dónde va cada archivo

```
src/content/blog/
  es/mi-post.md
  en/mi-post.md
src/content/assets/blog/mi-post/
  front-page.webp      (portada; o .svg, .png...)
  otra-imagen.webp     (imágenes del cuerpo)
```

- **Mismo slug (nombre de archivo) en `es/` y `en/`.** El toggle de idioma reemplaza solo el prefijo de locale en la URL, así que si el slug no coincide entre idiomas, la página da 404 al cambiar de idioma.
- Las imágenes (portada y las que uses dentro del cuerpo) van en una carpeta propia por post: `src/content/assets/blog/<slug>/`, referenciadas con ruta relativa (`../../assets/blog/<slug>/archivo.webp`). Astro las optimiza automáticamente (tanto la del frontmatter como las que insertes en el markdown).
- El post debe existir en **ambos** idiomas (`es/` y `en/`) para mantener paridad con el resto del sitio.

## Frontmatter

```yaml
---
title: "Título del post"
description: "Resumen corto, se usa como excerpt del card y como meta description SEO."
publishDate: 2026-09-15
image: "../../assets/blog/mi-post/front-page.webp" # opcional
tags:
  - Astro
  - Opinión
draft: false # opcional, default false
---
```

| Campo         | Tipo               | Obligatorio | Notas                                                                 |
| ------------- | ------------------ | ----------- | ---------------------------------------------------------------------- |
| `title`       | `string`           | Sí          | También es el `<h1>` de la página de detalle (no lo repitas en el body). |
| `description` | `string`           | Sí          | Excerpt del card + meta description.                                  |
| `publishDate` | `date`              | Sí          | Formato `YYYY-MM-DD`. Controla el orden (más reciente primero).       |
| `image`       | imagen (`image()`) | No          | Portada del card en el landing. Si no la pones, el card no muestra header de imagen. **No** se renderiza sola en la página de detalle — si quieres una imagen en el cuerpo del post, insértala en el markdown. |
| `tags`        | `string[]`         | No          | Se muestran como chips en el card y en el detalle.                    |
| `draft`       | `boolean`          | No          | `true` = no aparece en el landing ni genera página `/blog/[slug]`.    |

## Formatos soportados en el cuerpo

El H1 ya lo pone `title` — el body empieza en H2.

````markdown
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5

Texto con **negrita**, *cursiva*, <u>subrayado</u>, `código en línea`
y [enlaces](https://ejemplo.com). Se pueden combinar: ***negrita y cursiva***.

- Lista sin ordenar
- Con un nivel anidado
  - Como este

1. Lista ordenada
2. Segundo paso

- [x] Lista de tareas completada
- [ ] Pendiente

> Cita en bloque.

<div class="note">
<p><strong>Nota:</strong> HTML plano dentro del markdown, sin plugin extra.</p>
</div>

| Columna A | Columna B |
| --------- | --------- |
| valor     | valor     |

```ts
// Bloque de código, con syntax highlighting automático (Shiki)
export const hola = () => "mundo"
```

---

![Alt de la imagen](../../assets/blog/mi-post/otra-imagen.webp)
````

Todos estos elementos ya tienen estilos definidos para ambos diseños (TERMINAL y FORMAL) en `src/styles/terminal.css` / `formal.css`, bajo `.prose-content`. No hace falta tocar CSS al escribir un post — solo el markdown.

Post de referencia con todos los formatos aplicados: `src/content/blog/es/por-que-elegi-astro.md` (y su par en `en/`).

## Encabezados con ancla

Cada `h2`–`h5` del cuerpo genera automáticamente un `id` (slug del texto) y, al pasar el mouse, un enlace `#` (estilo Starlight) que fija ese hash en la URL — no requiere nada especial al escribir, es automático.

## Landing vs. página de detalle

- El landing (`src/features/blog/sections/Blog.astro`) muestra los 3 posts más recientes (no-draft) del idioma activo, como cards.
- Cada post tiene su propia página en `/blog/[slug]` (y `/formal/blog/[slug]`), generada por `src/pages/[...route]/blog/[slug].astro`.
- No hay una página `/blog` que liste todos los posts — solo el landing (preview) y el detalle individual.
