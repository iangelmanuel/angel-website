# 🌟 Angel De La Torre - Portfolio Website

<div align="center">

![Portfolio Banner](./public/img/hero.webp)

**Portafolio personal moderno y elegante construido con tecnologías de vanguardia**

[![Astro](https://img.shields.io/badge/Astro-7.2.1-FF5D01?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build/)
[![React](https://img.shields.io/badge/React-19.2.8-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.3.3-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![GSAP](https://img.shields.io/badge/GSAP-3.15.0-88CE02?style=for-the-badge&logo=greensock&logoColor=white)](https://greensock.com/gsap/)

[🌐 Ver Demo](https://angel-website-pi.vercel.app) • [📧 Contacto](mailto:iangelmanuel02@gmail.com) • [💼 LinkedIn](https://www.linkedin.com/in/iangelmanueldm)

</div>

---

## 🚀 Características Principales

- ✨ **Diseño Moderno**: Interfaz minimalista inspirada en Apple con glassmorphism
- 🌓 **Tema Claro/Oscuro**: Toggle suave entre modos con persistencia local y sincronización
- 🌍 **Multiidioma**: Soporte completo para español e inglés (i18n)
- 📱 **Totalmente Responsive**: Optimizado para dispositivos móviles, tablets y desktop
- ⚡ **Rendimiento Óptimo**: Construido con Astro para máxima velocidad
- 🎨 **Animaciones Fluidas**: Transiciones suaves con GSAP y Tailwind CSS
- ♿ **Accesibilidad**: Cumple con estándares WCAG para mejor inclusividad
- 🔍 **SEO Optimizado**: Meta tags, structured data y sitemap incluidos
- 🎓 **Content Collections**: Gestión de proyectos y certificados con Astro Content Collections
- 🎨 **shadcn/ui**: Componentes accesibles y personalizables integrados
- 📧 **Formulario de Contacto**: Sistema de envío de emails integrado con Resend API

## 🛠️ Stack Tecnológico

### Frontend Framework

- **[Astro 7.2.1](https://astro.build/)** - Framework web moderno y rápido
- **[React 19.2.8](https://reactjs.org/)** - Biblioteca para componentes interactivos
- **[TypeScript 6.0.3](https://www.typescriptlang.org/)** - Tipado estático para JavaScript

### Styling & UI

- **[Tailwind CSS 4.3.3](https://tailwindcss.com/)** - Framework CSS utility-first
- **[shadcn/ui](https://ui.shadcn.com/)** - Componentes accesibles y personalizables
- **[Radix UI](https://www.radix-ui.com/)** - Componentes primitivos accesibles
- **[Lucide React](https://lucide.dev/)** - Iconografía moderna y consistente
- **[Class Variance Authority](https://cva.style/)** - Gestión de variantes CSS

### Animations & Interactions

- **[GSAP 3.15.0](https://greensock.com/gsap/)** - Biblioteca de animaciones profesional
- **[tw-animate-css](https://github.com/bentzibentz/tailwindcss-animate)** - Animaciones predefinidas

### Development Tools

- **[Prettier](https://prettier.io/)** - Formateo automático de código
- **[ESLint](https://eslint.org/)** - Linting y análisis estático
- **[pnpm](https://pnpm.io/)** - Gestor de paquetes eficiente
- **[Resend](https://resend.com/)** - Servicio de envío de emails para formularios de contacto

## 📁 Estructura del Proyecto

```
angel-website/
├── 📂 public/                    # Archivos estáticos
│   ├── 📂 docs/                 # Documentos descargables
│   │   ├── cv-angel-dm.pdf      # Currículum en español
│   │   └── cv-angel-dm-en.pdf   # Currículum en inglés
│   ├── 📂 img/                  # Imágenes del portfolio
│   │   ├── 📂 certificates/     # Imágenes de certificados
│   │   ├── 📂 academy-logo/     # Logos de academias/plataformas
│   │   ├── hero.webp            # Imagen principal
│   │   └── profile-photo.webp   # Foto de perfil optimizada
│   ├── 📂 fonts/                # Fuentes personalizada
│   │   ├── Nunito-VariableFont.woff2 # Fuente variable de Nunito
│   └── favicon.svg              # Icono del sitio
├── 📂 src/
│   ├── 📂 components/           # Componentes reutilizables
│   │   ├── 📂 shared/          # Componentes compartidos
│   │   │   ├── TopMenu.astro   # Navegación principal
│   │   │   ├── AsideMobileMenu.astro # Menú móvil lateral
│   │   │   ├── Footer.astro    # Pie de página
│   │   │   └── MainContent.astro # Contenedor principal
│   │   ├── 📂 ui/              # Componentes de UI base (shadcn/ui)
│   │   │   ├── button.tsx      # Componente botón
│   │   │   ├── card.tsx        # Componente tarjeta
│   │   │   ├── input.tsx       # Campo de entrada
│   │   │   ├── label.tsx       # Etiqueta
│   │   │   ├── textarea.tsx    # Área de texto
│   │   │   └── badge.tsx       # Componente insignia
│   │   ├── ModeToggle.tsx      # Toggle tema claro/oscuro
│   │   ├── ContactForm.tsx     # Formulario de contacto
│   │   ├── Project.astro       # Componente de proyecto
│   │   └── ToggleLanguage.astro # Selector de idioma
│   ├── 📂 content/             # Contenido gestionado por Astro Content Collections
│   │   ├── 📂 assets/          # Recursos estáticos gestionados por Content
│   │   │   └── 📂 projects/    # Screenshots de proyectos
│   │   ├── 📂 certificates/    # Certificaciones y cursos
│   │   │   ├── 📂 es/          # Certificados en español
│   │   │   └── 📂 en/          # Certificados en inglés
│   │   ├── 📂 projects/        # Proyectos del portfolio
│   │   │   ├── 📂 es/          # Proyectos en español
│   │   │   └── 📂 en/          # Proyectos en inglés
│   │   ├── 📂 blog/            # Artículos del blog (futuro)
│   │   └── config.ts           # Configuración de Content Collections
│   ├── 📂 sections/            # Secciones de la página
│   │   ├── 📂 home-page/       # Secciones de la página principal
│   │   │   ├── Hero.astro      # Sección principal
│   │   │   ├── About.astro     # Acerca de mí
│   │   │   ├── Projects.astro  # Portfolio de proyectos
│   │   │   ├── Experiencie.astro # Experiencia profesional
│   │   │   └── Contact.astro   # Formulario de contacto
│   │   └── 📂 certificates/    # Secciones de certificados
│   │       ├── Hero.astro      # Hero de certificados
│   │       └── CertificatesGrid.astro # Grid de certificados
│   ├── 📂 i18n/               # Internacionalización
│   │   ├── en.ts              # Traducciones en inglés
│   │   └── es.ts              # Traducciones en español
│   ├── 📂 icons/              # Iconos SVG
│   │   ├── logo-1.svg         # Logo 1
│   │   └── logo-2.svg         # Logo 2
│   ├── 📂 styles/             # Estilos globales
│   │   └── global.css         # CSS personalizado y variables Tailwind v4
│   ├── 📂 types/              # Definiciones TypeScript
│   │   ├── language.d.ts      # Tipos para idiomas
│   │   └── navigation.d.ts    # Tipos para navegación
│   ├── 📂 lib/                # Librerías y configuraciones
│   │   ├── utils.ts           # Utilidades generales
│   │   ├── date-formatter.ts  # Formateo de fechas
│   │   └── dom-selector.ts    # Selector de DOM
│   ├── 📂 const/              # Constantes de la aplicación
│   │   └── site-info.ts       # Información del sitio
│   ├── 📂 layouts/            # Layouts de página
│   │   └── Layout.astro       # Layout principal
│   └── 📂 pages/              # Rutas de la aplicación
│       ├── index.astro        # Página principal
│       ├── certificates.astro # Página de certificados
│       └── 📂 [lang]/         # Rutas multiidioma
│           ├── index.astro    # Página principal por idioma
│           └── certificates.astro # Certificados por idioma
├── astro.config.mjs           # Configuración de Astro
├── components.json            # Configuración de shadcn/ui
├── tsconfig.json              # Configuración de TypeScript
├── package.json               # Dependencias y scripts
├── pnpm-workspace.yaml        # Configuración del workspace
└── README.md                  # Documentación del proyecto
```

## 🎨 Características de Diseño

### 🌈 Estilo Visual

- **Glassmorphism**: Efectos de cristal con `backdrop-blur` y transparencias
- **Espaciado Limpio**: Uso generoso de whitespace para claridad visual
- **Tipografía Elegante**: Sistema tipográfico consistente y legible
- **Microinteracciones**: Animaciones sutiles que mejoran la experiencia

### 🎭 Sistema de Temas

El sitio implementa un sistema de temas robusto con persistencia entre navegaciones:

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

**Características del sistema de temas:**

- ⚡ **Aplicación temprana**: El tema se aplica antes del renderizado para evitar FOUC
- 💾 **Persistencia local**: Guarda la preferencia en `localStorage('theme')`
- 🔄 **Sincronización**: Mantiene el tema consistente durante la navegación con Astro transitions
- 🌓 **Detección del sistema**: Respeta la preferencia del sistema operativo como fallback
- 🎨 **Tailwind CSS v4**: Totalmente compatible con la nueva versión de Tailwind

### 📱 Responsive Design

- **Mobile First**: Diseñado primero para dispositivos móviles
- **Breakpoints**: Tailwind CSS breakpoints estándar (sm, md, lg, xl)
- **Menú Adaptativo**: Navegación que se adapta al tamaño de pantalla

## 🚀 Instalación y Desarrollo

### Prerrequisitos

- **Node.js** (versión 22.12.0 o superior)
- **pnpm** (recomendado) o npm

### Configuración Inicial

1. **Clonar el repositorio**

   ```bash
   git clone https://github.com/iAngelManuel/angel-website.git
   cd angel-website
   ```

2. **Configurar variables de entorno**

   ```bash
   # Copia el archivo de template de variables de entorno
   cp .env.template .env

   # Edita el archivo .env con tus configuraciones
   # Necesarias para el formulario de contacto por email
   ```

   Variables requeridas:

   ```bash
   # API Key de Resend para envío de emails
   RESEND_API_KEY="your_resend_api_key_here"
   ```

3. **Instalar dependencias**

   ```bash
   pnpm install
   # o con npm
   npm install
   ```

4. **Iniciar servidor de desarrollo**

   ```bash
   pnpm dev
   # o con npm
   npm run dev
   ```

5. **Abrir en el navegador**
   ```
   http://localhost:4321
   ```

### 🔧 Scripts Disponibles

| Comando               | Descripción                            |
| --------------------- | -------------------------------------- |
| `pnpm dev`            | Inicia servidor de desarrollo          |
| `pnpm build`          | Construye la versión de producción     |
| `pnpm check`          | Verifica tipos y archivos Astro        |
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
3. **Proyectos**: Añade/edita archivos en `src/content/projects/`
4. **Certificados**: Añade/edita archivos en `src/content/certificates/`
5. **Información del sitio**: Modifica `src/const/site-info.ts`
6. **CV/Currículum**: Reemplaza archivos PDF en `public/docs/` (formato: `cv-nombre.pdf.pdf` para ES y `cv-nombre.pdf-en.pdf` para EN)

### Gestión de Contenido

El proyecto utiliza **Astro Content Collections** para gestionar:

- **Proyectos**: Archivos markdown en `src/content/projects/`
- **Certificados**: Archivos YAML en `src/content/certificates/`
- **Blog**: Preparado para artículos futuros en `src/content/blog/`

Cada colección soporta contenido en español (`es/`) e inglés (`en/`) para una experiencia multiidioma completa.

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

- 🌐 Website: [angel-website-pi.vercel.app](https://angel-website-pi.vercel.app)
- 💼 LinkedIn: [@iangelmanuel](https://www.linkedin.com/in/iangelmanueldm)
- 🐙 GitHub: [@iangelmanuel](https://github.com/iangelmanuel)
- 📧 Email: [iangelmanuel02@gmail.com](mailto:iangelmanuel02@gmail.com)

---

<div align="center">

**⭐ Si te gusta este proyecto, no olvides darle una estrella ⭐**

_Hecho con ❤️ y mucho ☕ por Angel De La Torre_

</div>
