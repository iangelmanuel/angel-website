import { siteInfo } from "@/const/site-info"
import type { LanguageData } from "@/types/language"

export const es: LanguageData = {
  seo: {
    title: "Angel De La Torre",
    description:
      "Sitio web de Angel De La Torre, un Desarrollador Full Stack y Desarrollador de Teléfonos con sede en Barranquilla, Colombia. Explora mi trabajo, habilidades y contáctame para tu próximo proyecto.",
    image: "/img/logo-ad.png",
    siteUrl: import.meta.env.SITE || "https://angel-app.vercel.app",
    certificatesPage: {
      title: "Certificaciones - Angel De La Torre",
      description:
        "Explora las certificaciones y cursos completados por Angel De La Torre, un Desarrollador Full Stack y de Teléfonos. Valida mis habilidades y conocimientos a través de credenciales reconocidas.",
      btnToVerify: "Verificar"
    }
  },
  nav: {
    about: "Sobre mí",
    skills: "Habilidades",
    projects: "Proyectos",
    experience: "Experiencia",
    blog: "Blog",
    certifications: "Certificaciones",
    contact: "Contacto"
  },
  hero: {
    yearExp: "2+ años de experiencia",
    available: {
      label: siteInfo.available
        ? "Disponible para nuevos proyectos."
        : "No disponible por ahora."
    },
    greeting: "Hola, soy",
    title: "Desarrollador Full Stack y de Teléfonos",
    description: `Construyo experiencias digitales excepcionales que son rápidas, accesibles, visualmente atractivas y responsivas. Actualmente enfocado en desarrollar productos de <a href="#" class="hover:underline font-semibold">${siteInfo.work.isWorking ? siteInfo.work.company : siteInfo.quasarDesign.title}</a>.`,
    btn1: "Ver mi trabajo",
    btn2: "Descargar CV"
  },
  about: {
    badge: "Sobre mí",
    title: "Quién soy",
    description1:
      "Soy un Desarrollador Full Stack con pasión por crear experiencias digitales hermosas, funcionales y centradas en el usuario. Con más de 2 años de experiencia en el campo, siempre busco nuevas formas innovadoras de dar vida a las visiones de mis clientes.",
    description2:
      "Creo que el diseño es más que solo hacer que algo se vea bien: se trata de resolver problemas y crear experiencias intuitivas y agradables para los usuarios.",

    skillsAndTechnologies: {
      badge: "Habilidades y Tecnologías",
      title: "Habilidades",
      skills: [
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
      title: "Educación",
      educations: [
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
          logo: "/img/academy-logo/udemy.webp",
          academy: "Udemy",
          degree: "Desarrollo Web Full Stack",
          year: "2023 - 2024",
          courses: [
            "Master en programación fullstack con JavaScript, Angular y Node",
            "JavaScript Moderno guía definitiva. Construye +20 proyectos",
            "React - La guía completa: Hooks, Context, Redux, MERN. +15 Apps",
            "TypeScript sin fronteras: Guía definitiva",
            "Laravel 9 - Crea aplicaciones y sitios web con PHP 8 y MVC"
          ]
        }
      ]
    }
  },
  // certifications: {
  //   title: "Certificaciones",
  //   viewCredential: "Ver credencial",
  //   issuedBy: "Emitido por"
  // },

  projects: {
    badge: "Proyectos",
    title: "Lo que puedo hacer",
    github: "Código",
    demo: "Demo"
  },

  contact: {
    badge: "Contáctame",
    title: "Ponte en contacto",

    availability: {
      availableLabel: "Disponibilidad",
      availableData: siteInfo.available ? "Disponible" : "No disponible",

      responseTimeLabel: "Tiempo de respuesta",
      responseTimeData: "24-48 horas"
    },

    form: [
      {
        id: "name",
        label: "Nombre",
        placeholder: "Tu nombre",
        type: "text"
      },
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
      sending: "Enviando",
      successMessage: "¡Mensaje enviado con éxito!",
      errorMessage: "Error al enviar el mensaje."
    }
  },
  footer: {
    rights: `${siteInfo.authorNameAndSurname}. Todos los derechos reservados.`
  },
  certificatesPage: {
    title: "Certificaciones",
    btnToRedirect: "Ver certificaciones",
    pageData: {
      title: "Educación y Certificaciones",
      description:
        "Mi formación continua a través de las mejores plataformas educativas y las certificaciones que validan mis conocimientos.",
      coursesCompleted: "Cursos completados",
      hoursCompleted: "Horas completadas",
      certificatesEarned: "Certificaciones"
    }
  }
}
