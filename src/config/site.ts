import type { Bilingual, Lang } from "@/types/i18n"

export interface Service {
  id: string
  eyebrow: Bilingual
  h3: Bilingual
  body: Bilingual
  items: Bilingual[]
}

export interface FaqItem {
  q: Bilingual
  a: Bilingual
}

const SITE_URL = (import.meta.env.SITE ?? "http://localhost:4321").replace(
  /\/$/,
  ""
)

export const SITE = {
  info: {
    name: "Angel De La Torre",
    legalName: "Angel Manuel De La Torre Montaño",
    description: {
      es: "Soy un desarrollador web full stack con experiencia en la creación de aplicaciones web y móviles. Me especializo en tecnologías modernas como React, Node.js y bases de datos SQL y NoSQL. Mi objetivo es crear soluciones eficientes y escalables que satisfagan las necesidades de los clientes.",
      en: "I am a full stack web developer with experience building web and mobile applications. I specialize in modern technologies like React, Node.js, and SQL/NoSQL databases. My goal is to create efficient and scalable solutions that meet client needs."
    },
    slogan: null as { es: string; en: string } | null,
    tagline: null as { es: string; en: string } | null,
    founded: 2023,
    founders: [{ name: "Angel De La Torre", role: "Fundador" }],
    teams: [] as Array<{ name: string; lead: string }>,

    certificates: {
      totalCourses: 12,
      totalHours: 300,
      certifications: 12
    },

    work: {
      isWorking: false,
      company: "Verlun Studio",
      position: "Full Stack Developer",
      since: "2023",
      url: "https://www.verlun.com"
    },

    verlunStudio: {
      title: "Verlun Studio",
      url: "https://www.verlun.com",
      image: "/img/verlun-studio.png"
    }
  },

  location: {
    address: "Calle 88 #49C",
    city: "Barranquilla",
    state: "Atlántico",
    country: "Colombia",
    countryCode: "CO",
    postalCode: "080001",
    timezone: "America/Bogota",
    display: "Barranquilla, Colombia"
  },

  contact: {
    email: "iangelmanuel02@gmail.com",
    countryCode: "+57",
    phone: "317 611 5270",
    phoneDisplay: () => `${SITE.contact.countryCode} ${SITE.contact.phone}`,
    whatsapp: () =>
      `${SITE.contact.countryCode}${SITE.contact.phone.replace(/\s/g, "")}`,
    landline: null as string | null
  },

  whatsAppMessage: {
    general: {
      es: "Hola Angel, me gustaría ponerme en contacto contigo.",
      en: "Hello Angel, I would like to get in touch with you."
    },
    service: (service: string, lang: Lang) => {
      const messages = {
        es: `Hola Angel, me interesa el servicio de ${service}. ¿Podrías darme más información?`,
        en: `Hello Angel, I'm interested in the ${service} service. Could you give me more information?`
      }
      return messages[lang]
    },
    appointment: {
      es: "Hola Angel, me gustaría agendar una reunión contigo.",
      en: "Hello Angel, I would like to schedule an appointment with you."
    }
  },

  social: {
    instagram: "https://www.instagram.com/iangelmanuel",
    linkedin: "https://www.linkedin.com/in/iangelmanuel",
    x: "https://x.com/iangelmanuel",
    github: "https://github.com/iangelmanuel",
    tiktok: null as string | null,
    youtube: "https://www.youtube.com/@iangelmanuel"
  },

  services: [
    {
      es: "Desarrollo Web Full Stack",
      en: "Full Stack Web Development"
    },
    {
      es: "Desarrollo de Software",
      en: "Software Development"
    },
    {
      es: "Consultoría Técnica",
      en: "Technical Consulting"
    },
    {
      es: "Diseño de Producto",
      en: "Product Design"
    }
  ],

  businessHours: [
    {
      day: { es: "Lunes", en: "Monday" },
      open: "09:00",
      close: "18:00"
    },
    {
      day: { es: "Martes", en: "Tuesday" },
      open: "09:00",
      close: "18:00"
    },
    {
      day: { es: "Miércoles", en: "Wednesday" },
      open: "09:00",
      close: "18:00"
    },
    {
      day: { es: "Jueves", en: "Thursday" },
      open: "09:00",
      close: "18:00"
    },
    {
      day: { es: "Viernes", en: "Friday" },
      open: "09:00",
      close: "18:00"
    },
    {
      day: { es: "Sábado", en: "Saturday" },
      open: "10:00",
      close: "14:00"
    },
    {
      day: { es: "Domingo", en: "Sunday" },
      open: null,
      close: null
    }
  ],

  legal: [
    {
      slug: "privacidad",
      title: {
        es: "Política de Privacidad",
        en: "Privacy Policy"
      },
      updatedAt: "2025-02-15"
    },
    {
      slug: "terminos",
      title: {
        es: "Términos y Condiciones",
        en: "Terms and Conditions"
      },
      updatedAt: "2025-02-15"
    },
    {
      slug: "cookies",
      title: {
        es: "Política de Cookies",
        en: "Cookie Policy"
      },
      updatedAt: "2025-02-15"
    }
  ],

  navigation: [
    {
      name: { es: "Sobre mí", en: "About" },
      href: "/#about"
    },
    {
      name: { es: "Proyectos", en: "Projects" },
      href: "/#projects"
    },
    {
      name: { es: "Contacto", en: "Contact" },
      href: "/#contact"
    }
  ],

  stats: [
    {
      value: "+12",
      label: {
        es: "Cursos completados",
        en: "Courses completed"
      },
      sublabel: {
        es: "Formación continua",
        en: "Continuous learning"
      }
    },
    {
      value: "300+",
      label: {
        es: "Horas de estudio",
        en: "Study hours"
      },
      sublabel: {
        es: "En plataformas reconocidas",
        en: "On recognized platforms"
      }
    }
  ],

  site: {
    url: SITE_URL,
    locale: "es-CO",
    lang: "es",
    timezone: "America/Bogota",
    currency: "COP"
  },

  seo: {
    title: {
      es: "Angel De La Torre — Desarrollador Full Stack",
      en: "Angel De La Torre — Full Stack Developer"
    },
    description: {
      es: "Desarrollador Full Stack y de Teléfonos con sede en Barranquilla, Colombia. Construyo experiencias digitales excepcionales que son rápidas, accesibles, visualmente atractivas y responsivas.",
      en: "Full Stack and Mobile Developer based in Barranquilla, Colombia. I build exceptional digital experiences that are fast, accessible, visually appealing, and responsive."
    },
    keywords: [
      "desarrollador full stack",
      "full stack developer",
      "desarrollo web",
      "web development",
      "desarrollo de software",
      "software development",
      "React",
      "Next.js",
      "Astro",
      "TypeScript",
      "Tailwind CSS",
      "Barranquilla",
      "Colombia",
      "portafolio",
      "portfolio"
    ],
    author: "Angel De La Torre",
    creator: "Angel De La Torre",
    publisher: "Angel De La Torre",

    url: SITE_URL,
    locale: "es-CO",
    lang: "es",
    currency: "COP",
    contactRegion: "LATAM",
    languages: ["Spanish", "English"],
    locales: [
      { hreflang: "es-CO", default: true },
      { hreflang: "en-US", default: false }
    ] as const,
    geo: { region: "ATL", latitude: 10.9685, longitude: -74.7813 },

    image: "/img/logo.webp",
    imageAlt: {
      es: "Angel De La Torre — Desarrollador Full Stack",
      en: "Angel De La Torre — Full Stack Developer"
    },
    imageWidth: 1200,
    imageHeight: 630,

    ogType: "website" as "website" | "article",
    twitterAuthor: "@iangelmanuel" as string | null,
    twitterHandle: "@iangelmanuel" as string | null,
    twitterCard: "summary_large_image" as
      "summary" | "summary_large_image" | "app" | "player",
    noindex: false,

    category: "technology",
    classification: "Personal Portfolio",
    priceRange: "$$",

    themeColor: { light: "#FFFFFF", dark: "#000000" },
    manifestCategories: ["portfolio", "development", "technology"],

    areaServed: [
      { type: "Country", name: "Colombia" },
      { type: "Place", name: "Latin America" },
      { type: "Place", name: "Remote" }
    ]
  }
} as const

export const SERVICES: Service[] = [
  {
    id: "desarrollo-web",
    eyebrow: { es: "Desarrollo", en: "Development" },
    h3: { es: "Desarrollo Web Full Stack", en: "Full Stack Web Development" },
    body: {
      es: "Sitios web y aplicaciones modernas con Astro, React, Next.js y Tailwind CSS.",
      en: "Modern websites and applications with Astro, React, Next.js, and Tailwind CSS."
    },
    items: [
      { es: "Sitios web corporativos", en: "Corporate websites" },
      { es: "Aplicaciones web a medida", en: "Custom web applications" },
      { es: "E-commerce y dashboards", en: "E-commerce and dashboards" }
    ]
  },
  {
    id: "consultoria-tecnica",
    eyebrow: { es: "Consultoría", en: "Consulting" },
    h3: {
      es: "Consultoría Técnica",
      en: "Technical Consulting"
    },
    body: {
      es: "Asesoría en arquitectura, stack tecnológico y mejores prácticas de desarrollo.",
      en: "Advisory on architecture, tech stack, and development best practices."
    },
    items: [
      { es: "Auditoría de código", en: "Code auditing" },
      { es: "Selección de tecnologías", en: "Technology selection" },
      { es: "Optimización de rendimiento", en: "Performance optimization" }
    ]
  }
]

export const FAQ_ITEMS: FaqItem[] = [
  {
    q: {
      es: "¿Qué tecnologías utilizas?",
      en: "What technologies do you use?"
    },
    a: {
      es: "Trabajo principalmente con React, Next.js, Astro, TypeScript, Tailwind CSS, Node.js y PostgreSQL.",
      en: "I primarily work with React, Next.js, Astro, TypeScript, Tailwind CSS, Node.js, and PostgreSQL."
    }
  },
  {
    q: {
      es: "¿Cuánto tarda un proyecto típico?",
      en: "How long does a typical project take?"
    },
    a: {
      es: "Depende del alcance, pero un sitio web profesional suele tomar entre 2 y 6 semanas.",
      en: "It depends on the scope, but a professional website typically takes between 2 and 6 weeks."
    }
  }
]

export function whatsAppMessage(message: string) {
  return `https://wa.me/${SITE.contact.whatsapp()}?text=${encodeURIComponent(message)}`
}
