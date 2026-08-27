import { SITE } from "@/config/site"
import type { LanguageData } from "@/types/language"

export const es: LanguageData = {
  seo: {
    title: SITE.seo.title.es,
    description: SITE.seo.description.es,
    certificatesPage: {
      title: "Certificaciones - Angel De La Torre",
      description:
        "Explora las certificaciones y cursos completados por Angel De La Torre, un Desarrollador Full Stack y de Teléfonos. Valida mis habilidades y conocimientos a través de credenciales reconocidas."
    }
  },

  hero: {
    yearExp: `${new Date().getFullYear() - SITE.info.founded}+ años de experiencia`,
    greeting: "Hola, soy ",
    title: "Desarrollador Full Stack y de Teléfonos",
    description: `Construyo experiencias digitales excepcionales que son rápidas, accesibles, visualmente atractivas y responsivas. Actualmente enfocado en desarrollar productos de <a href="https://www.verlun.com" target="_blank" rel="noopener noreferrer" class="font-semibold">Verlun Studio</a>.`,
    primaryBtn: { TERMINAL: "./ver-proyectos", FORMAL: "Ver mi trabajo" },
    secondaryBtn: { TERMINAL: "descargar-cv", FORMAL: "Descargar CV" }
  },

  about: {
    badge: "Sobre mí",
    title: { TERMINAL: "cat ./sobre-mi.md", FORMAL: "Quién soy" },
    description1:
      "Soy un Desarrollador Full Stack con pasión por crear experiencias digitales hermosas, funcionales y centradas en el usuario. Con más de 2 años de experiencia en el campo, siempre busco nuevas formas innovadoras de dar vida a las visiones de mis clientes.",
    description2:
      "Creo que el diseño es más que solo hacer que algo se vea bien: se trata de resolver problemas y crear experiencias intuitivas y agradables para los usuarios.",

    skills: {
      badge: "Habilidades",
      title: { TERMINAL: "ls ./stack", FORMAL: "Habilidades y Tecnologías" },
      list: [
        {
          label: "Frontend",
          skills: ["Astro", "React", "Next.js", "Tailwind CSS"]
        },
        {
          label: "Backend",
          skills: [
            "Node.js",
            "Express",
            "Prisma ORM",
            "PostgreSQL",
            "Supabase",
            "MongoDB"
          ]
        },
        { label: "DevOps", skills: ["Git", "Vercel", "Cloudflare"] }
      ]
    },

    education: {
      badge: "Educación",
      title: { TERMINAL: "ls ./educacion", FORMAL: "Formación académica" },
      btnToCertificates: {
        TERMINAL: "ver certificaciones",
        FORMAL: "Ver certificaciones"
      },
      coursesLabel: "cursos",
      list: [
        {
          logo: "/img/academy-logo/devtalles.webp",
          academy: "Devtalles",
          degree: "Desarrollo Web Frontend y Backend",
          year: "2024 - Presente",
          courses: [
            "Shadcn/ui: Componentes accesibles y personalizables",
            "Astro: El framework para sitios web orientados al contenido",
            "OpenAI: Ejercicios prácticos y asistntes con React + Nest.js",
            "Nest.js + Reportes: Genera PDFs desde Node",
            "React Native Expo: Aplicaciones nativas para iOS y Android"
          ]
        },
        {
          logo: "/img/academy-logo/midudev.webp",
          academy: "Midudev Academy",
          degree: "Desarrollo de MCP y JavaScript",
          year: "2025 - 2025",
          courses: [
            "Curso Intensivo de Model Context Protocol (MCP)",
            "Aprende lo último de JavaScript (ES2023 & ES2024)"
          ]
        },
        {
          logo: "/img/academy-logo/udemy.webp",
          academy: "Udemy",
          degree: "Desarrollo Web Full Stack",
          year: "2023 - 2025",
          courses: [
            "Master en programación fullstack con JavaScript, Angular y Node",
            "JavaScript Moderno guía definitiva. Construye +20 proyectos",
            "React - La guía completa: Hooks, Context, Redux, MERN. +15 Apps",
            "TypeScript sin fronteras: Guía definitiva",
            "Laravel 9 - Crea aplicaciones y sitios web con PHP 8 y MVC",
            "Vue.js 3 - La Guía Completa - Composition, Pinia, MEVN. +10 Apps"
          ]
        },
        {
          logo: "/img/academy-logo/uac.webp",
          academy: "Universidad Autónoma del Caribe",
          degree: "Negocios y Finanzas Internacionales",
          year: "2021 - 2026",
          courses: [
            "Análisis y Visualización de Datos con Python",
            "Marketing Digital y Estrategias de Negocios",
            "Análisis Financiero y Estrategias de Inversión",
            "Comercio Internacional y Negocios Globales",
            "Finanzas Corporativas y Gestión de Riesgos"
          ]
        }
      ]
    }
  },

  projects: {
    badge: "Proyectos",
    title: {
      TERMINAL: "ls ./proyectos --recent",
      FORMAL: "Lo que puedo hacer"
    },
    demo: { TERMINAL: "abrir", FORMAL: "Demo" }
  },

  contact: {
    badge: "Contáctame",
    title: { TERMINAL: "./contact.sh --send", FORMAL: "Ponte en contacto" },
    windowTitle: "contact.sh",
    lede: "Cuéntame qué necesitas y te respondo directo a tu correo.",

    form: [
      { id: "name", label: "Nombre", placeholder: "Tu nombre", type: "text" },
      {
        id: "email",
        label: "Correo electrónico",
        placeholder: "tu@email.com",
        type: "email"
      },
      {
        id: "subject",
        label: "Asunto",
        placeholder: "Consulta de proyecto...",
        type: "text"
      },
      {
        id: "message",
        label: "Mensaje",
        placeholder: "Cuéntame sobre tu proyecto...",
        type: "textarea"
      }
    ],

    submit: {
      label: "Enviar mensaje",
      errorMessage: "Error al enviar el mensaje."
    },

    contactFormValidation: {
      name: {
        required: "El nombre es requerido",
        min: "El nombre debe tener al menos 2 caracteres",
        max: "El nombre no puede exceder los 50 caracteres"
      },
      email: {
        required: "El correo electrónico es requerido",
        pattern: "Por favor, ingresa un correo electrónico válido"
      },
      subject: {
        required: "El asunto es requerido",
        min: "El asunto debe tener al menos 2 caracteres",
        max: "El asunto no puede exceder los 100 caracteres"
      },
      message: {
        required: "El mensaje es requerido",
        min: "El mensaje debe tener al menos 10 caracteres",
        max: "El mensaje no puede exceder los 1000 caracteres"
      }
    }
  },

  certificates: {
    title: {
      TERMINAL: "ls ./certificaciones",
      FORMAL: "Educación y Certificaciones"
    },
    btnToVerify: { TERMINAL: "verificar", FORMAL: "Verificar" },
    description:
      "Mi formación continua a través de las mejores plataformas educativas y las certificaciones que validan mis conocimientos.",
    coursesCompleted: "Cursos completados",
    hoursCompleted: "Horas completadas",
    certificatesEarned: "Certificaciones"
  },

  footer: {
    rights: `${SITE.info.name}. Todos los derechos reservados.`
  },

  actionsResponses: {
    contactForm: {
      success: "¡Mensaje enviado con éxito!",
      error:
        "Hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo más tarde."
    }
  }
}
