export type Language = "es" | "en"

export type LanguageData = {
  seo: Seo
  nav: Nav
  hero: Hero
  about: About
  skillsAndTechnologies: SkillsAndTechnologies
  projects: Projects
  contact: Contact
  footer: Footer
}

export type Seo = {
  title: string
  description: string
  image: string
  siteUrl: string
}

export type About = {
  badge: string
  title: string
  description1: string
  description2: string
  quickStats: QuickStats
}

export type QuickStats = {
  title: string
  experiencieLabel: string
  projectsLabel: string
  clientsLabel: string
  awardsLabel: string
  experienceValue: string
  projectsValue: string
  clientsValue: string
  awardsValue: string
}

export type Contact = {
  badge: string
  title: string
  availability: Availability
  form: Form[]
  submit: Submit
}

export type Availability = {
  availableLabel: string
  availableData: string
  responseTimeLabel: string
  responseTimeData: string
}

export type Projects = {
  badge: string
  title: string
  github: string
  demo: string
}

export type Form = {
  id: string
  label: string
  placeholder: string
  type: string
}

export type Submit = {
  label: string
  sending: string
  successMessage: string
  errorMessage: string
}

export type Footer = {
  rights: string
}

export type Hero = {
  yearExp: string
  available: HeroAvailable
  greeting: string
  title: string
  description: string
  btn1: string
  btn2: string
}

export type Nav = {
  about: string
  skills: string
  projects: string
  experience: string
  blog: string
  certifications: string
  contact: string
}

export type HeroAvailable = {
  label: string
}

export type SkillsAndTechnologies = {
  badge: string
  title: string
  skills: Skill[]
}

export type Skill = {
  label: string
  skills: string[]
}
