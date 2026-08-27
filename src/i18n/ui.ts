import { SITE } from "@/config/site"

const YEARS_OF_EXPERIENCE = new Date().getFullYear() - SITE.info.founded

export const ui = {
  seo: {
    certificates: {
      title: { es: "Certificaciones", en: "Certifications" },
      description: {
        es: "Explora las certificaciones y cursos completados por Angel De La Torre, un Desarrollador Full Stack y de Teléfonos. Valida mis habilidades y conocimientos a través de credenciales reconocidas.",
        en: "Explore the certifications and courses completed by Angel De La Torre, a Full Stack and Phone Developer. Validate my skills and knowledge through recognized credentials."
      }
    }
  },

  hero: {
    yearExp: {
      es: `${YEARS_OF_EXPERIENCE}+ años de experiencia`,
      en: `${YEARS_OF_EXPERIENCE}+ years of experience`
    },
    greeting: { es: "Hola, soy ", en: "Hi, I'm " },
    title: {
      es: "Desarrollador Full Stack y de Teléfonos",
      en: "Full Stack and Phone Developer"
    },
    description: {
      es: `Construyo experiencias digitales excepcionales que son rápidas, accesibles, visualmente atractivas y responsivas. Actualmente enfocado en desarrollar productos de <a href="${SITE.info.work.url}" target="_blank" rel="noopener noreferrer" class="font-semibold">${SITE.info.work.company}</a>.`,
      en: `I build exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Currently focused on developing products at <a href="${SITE.info.work.url}" target="_blank" rel="noopener noreferrer" class="font-semibold">${SITE.info.work.company}</a>.`
    },
    primaryBtn: {
      TERMINAL: { es: "./ver-proyectos", en: "./view-projects" },
      FORMAL: { es: "Ver mi trabajo", en: "View my work" }
    },
    secondaryBtn: {
      TERMINAL: { es: "descargar-cv", en: "download-cv" },
      FORMAL: { es: "Descargar CV", en: "Download CV" }
    }
  },

  about: {
    badge: { es: "Sobre mí", en: "About Me" },
    title: {
      TERMINAL: { es: "cat ./sobre-mi.md", en: "cat ./about-me.md" },
      FORMAL: { es: "Quién soy", en: "About" }
    },
    description1: {
      es: "Soy un Desarrollador Full Stack con pasión por crear experiencias digitales hermosas, funcionales y centradas en el usuario. Con más de 2 años de experiencia en el campo, siempre busco nuevas formas innovadoras de dar vida a las visiones de mis clientes.",
      en: "I'm a Full Stack Developer with a passion for creating beautiful, functional, and user-centered digital experiences. With over 2 years of experience in the field, I'm always looking for innovative ways to bring my clients' visions to life."
    },
    description2: {
      es: "Creo que el diseño es más que solo hacer que algo se vea bien: se trata de resolver problemas y crear experiencias intuitivas y agradables para los usuarios.",
      en: "I believe design is more than just making something look good—it's about solving problems and creating intuitive, enjoyable experiences for users."
    },

    skills: {
      badge: { es: "Habilidades", en: "Skills" },
      title: {
        TERMINAL: "ls ./stack",
        FORMAL: { es: "Habilidades y Tecnologías", en: "Skills & Technologies" }
      },
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
      badge: { es: "Educación", en: "Education" },
      title: {
        TERMINAL: { es: "ls ./educacion", en: "ls ./education" },
        FORMAL: { es: "Formación académica", en: "Academic Background" }
      },
      btnToCertificates: {
        TERMINAL: { es: "ver certificaciones", en: "view certificates" },
        FORMAL: { es: "Ver certificaciones", en: "View Certificates" }
      },
      coursesLabel: { es: "cursos", en: "courses" },
      list: [
        {
          logo: "/img/academy-logo/devtalles.webp",
          academy: "Devtalles",
          degree: {
            es: "Desarrollo Web Frontend y Backend",
            en: "Frontend and Backend Web Development"
          },
          year: { es: "2024 - Presente", en: "2024 - Present" },
          courses: {
            es: [
              "Shadcn/ui: Componentes accesibles y personalizables",
              "Astro: El framework para sitios web orientados al contenido",
              "OpenAI: Ejercicios prácticos y asistentes con React + Nest.js",
              "Nest.js + Reportes: Genera PDFs desde Node",
              "React Native Expo: Aplicaciones nativas para iOS y Android"
            ],
            en: [
              "Shadcn/ui: Accessible and Customizable Components",
              "Astro: The Framework for Content-Oriented Websites",
              "OpenAI: Practical Exercises and Assistants with React + Nest.js",
              "Nest.js + Reports: Generate PDFs from Node",
              "React Native Expo: Native Applications for iOS and Android"
            ]
          }
        },
        {
          logo: "/img/academy-logo/midudev.webp",
          academy: "Midudev Academy",
          degree: {
            es: "Desarrollo de MCP y JavaScript",
            en: "MCP and JavaScript Development"
          },
          year: "2025 - 2025",
          courses: {
            es: [
              "Curso Intensivo de Model Context Protocol (MCP)",
              "Aprende lo último de JavaScript (ES2023 & ES2024)"
            ],
            en: [
              "Intensive Course on Model Context Protocol (MCP)",
              "Learn the Latest in JavaScript (ES2023 & ES2024)"
            ]
          }
        },
        {
          logo: "/img/academy-logo/udemy.webp",
          academy: "Udemy",
          degree: {
            es: "Desarrollo Web Full Stack",
            en: "Full Stack Web Development"
          },
          year: "2023 - 2025",
          courses: {
            es: [
              "Master en programación fullstack con JavaScript, Angular y Node",
              "JavaScript Moderno guía definitiva. Construye +20 proyectos",
              "React - La guía completa: Hooks, Context, Redux, MERN. +15 Apps",
              "TypeScript sin fronteras: Guía definitiva",
              "Laravel 9 - Crea aplicaciones y sitios web con PHP 8 y MVC",
              "Vue.js 3 - La Guía Completa - Composition, Pinia, MEVN. +10 Apps"
            ],
            en: [
              "Master in Fullstack Programming with JavaScript, Angular, and Node",
              "Modern JavaScript – The Definitive Guide. Build 20+ Projects",
              "React – The Complete Guide: Hooks, Context, Redux, MERN. 15+ Apps",
              "TypeScript Without Borders – The Definitive Guide",
              "Laravel 9 – Build Applications and Websites with PHP 8 and MVC",
              "Vue.js 3 - The Complete Guide - Composition, Pinia, MEVN. 10+ Apps"
            ]
          }
        },
        {
          logo: "/img/academy-logo/uac.webp",
          academy: "Universidad Autónoma del Caribe",
          degree: {
            es: "Negocios y Finanzas Internacionales",
            en: "International Business and Finance"
          },
          year: "2021 - 2026",
          courses: {
            es: [
              "Análisis y Visualización de Datos con Python",
              "Marketing Digital y Estrategias de Negocios",
              "Análisis Financiero y Estrategias de Inversión",
              "Comercio Internacional y Negocios Globales",
              "Finanzas Corporativas y Gestión de Riesgos"
            ],
            en: [
              "Data Analysis and Visualization with Python",
              "Digital Marketing and Business Strategies",
              "Financial Analysis and Investment Strategies",
              "International Trade and Global Business",
              "Corporate Finance and Risk Management"
            ]
          }
        }
      ]
    }
  },

  projects: {
    badge: { es: "Proyectos", en: "Projects" },
    title: {
      TERMINAL: { es: "ls ./proyectos --recent", en: "ls ./projects --recent" },
      FORMAL: { es: "Lo que puedo hacer", en: "What I can do" }
    },
    demo: {
      TERMINAL: { es: "abrir", en: "open" },
      FORMAL: "Demo"
    }
  },

  contact: {
    badge: { es: "Contáctame", en: "Contact Me" },
    title: {
      TERMINAL: "./contact.sh --send",
      FORMAL: { es: "Ponte en contacto", en: "Get in touch" }
    },
    windowTitle: "contact.sh",
    lede: {
      es: "Cuéntame qué necesitas y te respondo directo a tu correo.",
      en: "Tell me what you need and I'll get back to you directly by email."
    },

    form: [
      {
        id: "name",
        type: "text",
        label: { es: "Nombre", en: "Name" },
        placeholder: { es: "Tu nombre", en: "Your name" }
      },
      {
        id: "email",
        type: "email",
        label: { es: "Correo electrónico", en: "Email" },
        placeholder: { es: "tu@email.com", en: "your@email.com" }
      },
      {
        id: "subject",
        type: "text",
        label: { es: "Asunto", en: "Subject" },
        placeholder: {
          es: "Consulta de proyecto...",
          en: "Project inquiry..."
        }
      },
      {
        id: "message",
        type: "textarea",
        label: { es: "Mensaje", en: "Message" },
        placeholder: {
          es: "Cuéntame sobre tu proyecto...",
          en: "Tell me about your project..."
        }
      }
    ],

    submit: {
      label: { es: "Enviar mensaje", en: "Send message" },
      errorMessage: {
        es: "Error al enviar el mensaje.",
        en: "Error sending message."
      }
    },

    validation: {
      name: {
        required: {
          es: "El nombre es requerido",
          en: "Name is required"
        },
        minLength: {
          value: 2,
          message: {
            es: "El nombre debe tener al menos 2 caracteres",
            en: "Name must be at least 2 characters"
          }
        },
        maxLength: {
          value: 50,
          message: {
            es: "El nombre no puede exceder los 50 caracteres",
            en: "Name cannot exceed 50 characters"
          }
        }
      },
      email: {
        required: {
          es: "El correo electrónico es requerido",
          en: "Email is required"
        },
        pattern: {
          message: {
            es: "Por favor, ingresa un correo electrónico válido",
            en: "Please enter a valid email address"
          }
        }
      },
      subject: {
        required: {
          es: "El asunto es requerido",
          en: "Subject is required"
        },
        minLength: {
          value: 2,
          message: {
            es: "El asunto debe tener al menos 2 caracteres",
            en: "Subject must be at least 2 characters"
          }
        },
        maxLength: {
          value: 100,
          message: {
            es: "El asunto no puede exceder los 100 caracteres",
            en: "Subject cannot exceed 100 characters"
          }
        }
      },
      message: {
        required: {
          es: "El mensaje es requerido",
          en: "Message is required"
        },
        minLength: {
          value: 10,
          message: {
            es: "El mensaje debe tener al menos 10 caracteres",
            en: "Message must be at least 10 characters"
          }
        },
        maxLength: {
          value: 1000,
          message: {
            es: "El mensaje no puede exceder los 1000 caracteres",
            en: "Message cannot exceed 1000 characters"
          }
        }
      }
    }
  },

  certificates: {
    title: {
      TERMINAL: { es: "ls ./certificaciones", en: "ls ./certificates" },
      FORMAL: {
        es: "Educación y Certificaciones",
        en: "Education and Certificates"
      }
    },
    btnToVerify: {
      TERMINAL: { es: "verificar", en: "verify" },
      FORMAL: { es: "Verificar", en: "Verify" }
    },
    description: {
      es: "Mi formación continua a través de las mejores plataformas educativas y las certificaciones que validan mis conocimientos.",
      en: "My continuous learning through the best educational platforms and the certificates that validate my knowledge."
    },
    coursesCompleted: { es: "Cursos completados", en: "Courses completed" },
    hoursCompleted: { es: "Horas completadas", en: "Hours completed" },
    certificatesEarned: { es: "Certificaciones", en: "Certifications" }
  },

  footer: {
    rights: {
      es: `${SITE.info.name}. Todos los derechos reservados.`,
      en: `${SITE.info.name}. All rights reserved.`
    }
  },

  actions: {
    contactForm: {
      success: {
        es: "¡Mensaje enviado con éxito!",
        en: "Message sent successfully!"
      },
      error: {
        es: "Hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo más tarde.",
        en: "There was an error sending your message. Please try again later."
      }
    }
  }
} as const
