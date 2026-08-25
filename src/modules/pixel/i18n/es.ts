import type { PixelCopy } from "@/modules/pixel/types/copy"

export const es: PixelCopy = {
  nav: {
    about: "sobre-mi",
    projects: "proyectos",
    contact: "contacto"
  },
  hero: {
    primaryBtn: "./ver-proyectos",
    secondaryBtn: "descargar-cv"
  },
  about: {
    badge: "Sobre mí",
    title: "cat ./sobre-mi.md"
  },
  education: {
    badge: "Educación",
    title: "ls ./educacion",
    btnToCertificates: "ver certificaciones"
  },
  skills: {
    badge: "Habilidades",
    title: "ls ./stack"
  },
  projects: {
    badge: "Proyectos",
    title: "ls ./proyectos --recent",
    demo: "abrir"
  },
  contact: {
    badge: "Contáctame",
    title: "./contact.sh --send",
    windowTitle: "contact.sh"
  },
  certificates: {
    title: "ls ./certificaciones",
    btnToVerify: "verificar"
  }
}
