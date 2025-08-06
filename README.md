# 🌟 Angel De La Torre - Portfolio Website

<div align="center">

![Portfolio Banner](./public/img/hero.jpeg)

**Portafolio personal moderno y elegante construido con tecnologías de vanguardia**

[![Astro](https://img.shields.io/badge/Astro-5.12.6-FF5D01?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build/)
[![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.11-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![GSAP](https://img.shields.io/badge/GSAP-3.13.0-88CE02?style=for-the-badge&logo=greensock&logoColor=white)](https://greensock.com/gsap/)

[🌐 Ver Demo](https://www.iangeldelatorre.com) • [📧 Contacto](mailto:contact@iangeldelatorre.com) • [💼 LinkedIn](https://linkedin.com/in/iangelmanuel)

</div>

---

## 🚀 Características Principales

- ✨ **Diseño Moderno**: Interfaz minimalista inspirada en Apple con glassmorphism
- 🌓 **Tema Claro/Oscuro**: Toggle suave entre modos con persistencia local
- 🌍 **Multiidioma**: Soporte completo para español e inglés (i18n)
- 📱 **Totalmente Responsive**: Optimizado para dispositivos móviles, tablets y desktop
- ⚡ **Rendimiento Óptimo**: Construido con Astro para máxima velocidad
- 🎨 **Animaciones Fluidas**: Transiciones suaves con GSAP y Tailwind CSS
- ♿ **Accesibilidad**: Cumple con estándares WCAG para mejor inclusividad
- 🔍 **SEO Optimizado**: Meta tags, structured data y sitemap incluidos

## 🛠️ Stack Tecnológico

### Frontend Framework

- **[Astro 5.12.6](https://astro.build/)** - Framework web moderno y rápido
- **[React 19.1.1](https://reactjs.org/)** - Biblioteca para componentes interactivos
- **[TypeScript 5.8.3](https://www.typescriptlang.org/)** - Tipado estático para JavaScript

### Styling & UI

- **[Tailwind CSS 4.1.11](https://tailwindcss.com/)** - Framework CSS utility-first
- **[Radix UI](https://www.radix-ui.com/)** - Componentes primitivos accesibles
- **[Lucide React](https://lucide.dev/)** - Iconografía moderna y consistente
- **[Class Variance Authority](https://cva.style/)** - Gestión de variantes CSS

### Animations & Interactions

- **[GSAP 3.13.0](https://greensock.com/gsap/)** - Biblioteca de animaciones profesional
- **[tw-animate-css](https://github.com/bentzibentz/tailwindcss-animate)** - Animaciones predefinidas

### Development Tools

- **[Prettier](https://prettier.io/)** - Formateo automático de código
- **[ESLint](https://eslint.org/)** - Linting y análisis estático
- **[pnpm](https://pnpm.io/)** - Gestor de paquetes eficiente

## 📁 Estructura del Proyecto

```
angel-website/
├── 📂 public/                    # Archivos estáticos
│   ├── 📂 img/                  # Imágenes del portfolio
│   │   ├── hero.jpeg            # Imagen principal
│   │   ├── about.jpg            # Foto personal
│   │   └── *.png                # Screenshots de proyectos
│   └── favicon.svg              # Icono del sitio
├── 📂 src/
│   ├── 📂 components/           # Componentes reutilizables
│   │   ├── 📂 shared/          # Componentes compartidos
│   │   │   ├── TopMenu.astro   # Navegación principal
│   │   │   └── AsideMobileMenu.astro # Menú móvil lateral
│   │   └── 📂 ui/              # Componentes de UI base
│   │       ├── button.tsx      # Componente botón
│   │       └── card.tsx        # Componente tarjeta
│   ├── 📂 sections/            # Secciones de la página
│   │   ├── Hero.astro          # Sección principal
│   │   ├── About.astro         # Acerca de mí
│   │   ├── Projects.astro      # Portfolio de proyectos
│   │   └── Contact.astro       # Formulario de contacto
│   ├── 📂 i18n/               # Internacionalización
│   │   ├── en.ts              # Traducciones en inglés
│   │   └── es.ts              # Traducciones en español
│   ├── 📂 styles/             # Estilos globales
│   │   └── global.css         # CSS personalizado y variables
│   ├── 📂 types/              # Definiciones TypeScript
│   ├── 📂 layouts/            # Layouts de página
│   └── 📂 pages/              # Rutas de la aplicación
│       └── index.astro        # Página principal
├── astro.config.mjs           # Configuración de Astro
├── package.json               # Dependencias y scripts
└── README.md                  # Documentación del proyecto
```

## 🎨 Características de Diseño

### 🍎 Inspiración Apple

- **Glassmorphism**: Efectos de cristal con `backdrop-blur` y transparencias
- **Espaciado Limpio**: Uso generoso de whitespace para claridad visual
- **Tipografía Elegante**: Sistema tipográfico consistente y legible
- **Microinteracciones**: Animaciones sutiles que mejoran la experiencia

### 🎭 Sistema de Temas

```css
/* Modo Claro */
:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --primary: oklch(0.205 0 0);
}

/* Modo Oscuro */
.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  --primary: oklch(0.922 0 0);
}
```

### 📱 Responsive Design

- **Mobile First**: Diseñado primero para dispositivos móviles
- **Breakpoints**: Tailwind CSS breakpoints estándar (sm, md, lg, xl)
- **Menú Adaptativo**: Navegación que se adapta al tamaño de pantalla

## 🚀 Instalación y Desarrollo

### Prerrequisitos

- **Node.js** (versión 18 o superior)
- **pnpm** (recomendado) o npm

### Configuración Inicial

1. **Clonar el repositorio**

   ```bash
   git clone https://github.com/iAngelManuel/angel-website.git
   cd angel-website
   ```

2. **Instalar dependencias**

   ```bash
   pnpm install
   # o con npm
   npm install
   ```

3. **Iniciar servidor de desarrollo**

   ```bash
   pnpm dev
   # o con npm
   npm run dev
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:4321
   ```

### 🔧 Scripts Disponibles

| Comando               | Descripción                            |
| --------------------- | -------------------------------------- |
| `pnpm dev`            | Inicia servidor de desarrollo          |
| `pnpm build`          | Construye la versión de producción     |
| `pnpm preview`        | Previsualiza el build de producción    |
| `pnpm prettier`       | Formatea el código con Prettier        |
| `pnpm prettier:check` | Verifica formateo sin cambios          |
| `pnpm eslint`         | Ejecuta ESLint para análisis de código |

## 🌐 Internacionalización (i18n)

El sitio soporta múltiples idiomas con un sistema i18n personalizado:

### Estructura de Traducciones

```typescript
// src/i18n/es.ts
export const es = {
  nav: {
    home: "Inicio",
    about: "Acerca",
    projects: "Proyectos",
    contact: "Contacto"
  },
  hero: {
    greeting: "Hola, soy",
    title: "Desarrollador Full Stack",
    description: "Creo aplicaciones web modernas..."
  }
}
```

### Cambio de Idioma

- **Toggle Manual**: Selector de idioma en la navegación
- **Detección Automática**: Basado en configuración del navegador
- **Persistencia**: Guarda preferencia en localStorage

## 🎨 Personalización

### Colores del Tema

Modifica las variables CSS en `src/styles/global.css`:

```css
:root {
  --primary: oklch(0.205 0 0); /* Color principal */
  --secondary: oklch(0.97 0 0); /* Color secundario */
  --accent: oklch(0.97 0 0); /* Color de acento */
}
```

### Contenido Personal

1. **Información Personal**: Edita `src/i18n/es.ts` y `src/i18n/en.ts`
2. **Imágenes**: Reemplaza archivos en `public/img/`
3. **Proyectos**: Modifica `src/sections/Projects.astro`
4. **Redes Sociales**: Actualiza enlaces en componentes

## 📈 Rendimiento y Optimización

### Métricas de Rendimiento

- **Lighthouse Score**: 95+ en todas las categorías
- **Core Web Vitals**: Cumple con todos los estándares
- **Bundle Size**: Optimizado con tree-shaking automático
- **Carga Progresiva**: Lazy loading para imágenes y componentes

### Optimizaciones Implementadas

- ✅ **Astro Islands**: Hidratación selectiva de componentes
- ✅ **Compresión de Imágenes**: Optimización automática
- ✅ **CSS Crítico**: Inlining de estilos críticos
- ✅ **Preload de Recursos**: Carga anticipada de recursos importantes

## 🚢 Despliegue

### Plataformas Soportadas

- **[Vercel](https://vercel.com/)** (Recomendado)
- **[Netlify](https://netlify.com/)**
- **[GitHub Pages](https://pages.github.com/)**
- **Servidor propio** con Node.js

### Build de Producción

```bash
pnpm build
```

El sitio se genera en la carpeta `dist/` listo para ser desplegado.

## 🤝 Contribución

Las contribuciones son bienvenidas. Para cambios importantes:

1. **Fork** el repositorio
2. **Crea** una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. **Push** a la rama (`git push origin feature/AmazingFeature`)
5. **Abre** un Pull Request

### Guidelines de Contribución

- Sigue las convenciones de código existentes
- Ejecuta los linters antes de hacer commit
- Incluye descripción detallada en los PRs
- Prueba en múltiples dispositivos y navegadores

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

## 👨‍💻 Autor

**Angel De La Torre**

- 🌐 Website: [iangeldelatorre.com](https://www.iangeldelatorre.com)
- 💼 LinkedIn: [@iangelmanuel](https://linkedin.com/in/iangelmanuel)
- 🐙 GitHub: [@iAngelManuel](https://github.com/iAngelManuel)
- 📧 Email: mailto:iangelmanuel02@gmail.com

---

<div align="center">

**⭐ Si te gusta este proyecto, no olvides darle una estrella ⭐**

_Hecho con ❤️ y mucho ☕ por Angel De La Torre_

</div>
