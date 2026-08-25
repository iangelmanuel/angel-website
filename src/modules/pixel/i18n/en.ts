import type { PixelCopy } from "@/modules/pixel/types/copy"

export const en: PixelCopy = {
  nav: {
    about: "about-me",
    projects: "projects",
    contact: "contact"
  },
  hero: {
    primaryBtn: "./view-projects",
    secondaryBtn: "download-cv"
  },
  about: {
    badge: "About Me",
    title: "cat ./about-me.md"
  },
  education: {
    badge: "Education",
    title: "ls ./education",
    btnToCertificates: "view certificates"
  },
  skills: {
    badge: "Skills",
    title: "ls ./stack"
  },
  projects: {
    badge: "Projects",
    title: "ls ./projects --recent",
    demo: "open"
  },
  contact: {
    badge: "Contact Me",
    title: "./contact.sh --send",
    windowTitle: "contact.sh"
  },
  certificates: {
    title: "ls ./certificates",
    btnToVerify: "verify"
  }
}
