import type { FieldValidation } from "react-hook-form"

import type { ByDesign } from "@/config/types/design"

export type Language = "es" | "en"

export type LanguageData = {
  seo: Seo
  nav: Nav
  hero: Hero
  about: About
  projects: Projects
  contact: Contact
  certificates: Certificates
  footer: Footer
  actionsResponses: ActionsResponses
}

// SEO Types
export type Seo = {
  title: string
  description: string
  certificatesPage: CertificatesPageSeo
}

export type CertificatesPageSeo = {
  title: string
  description: string
}

// Navigation Types
export type Nav = {
  about: ByDesign
  projects: ByDesign
  contact: ByDesign
}

// Hero Types
export type Hero = {
  yearExp: string
  greeting: string
  title: string
  description: string
  primaryBtn: ByDesign
  secondaryBtn: ByDesign
}

// About Types
export type About = {
  badge: string
  title: ByDesign
  description1: string
  description2: string
  skills: SkillsSection
  education: Education
}

export type SkillsSection = {
  badge: string
  title: ByDesign
  list: Skill[]
}

export type Skill = {
  label: string
  skills: string[]
}

export type Education = {
  badge: string
  title: ByDesign
  btnToCertificates: ByDesign
  coursesLabel: string
  list: EducationDetail[]
}

export type EducationDetail = {
  logo: string
  academy: string
  degree: string
  year: string
  courses: string[]
}

// Projects Types
export type Projects = {
  badge: string
  title: ByDesign
  demo: ByDesign
}

// Contact Types
export type Contact = {
  badge: string
  title: ByDesign
  windowTitle: string
  lede: string
  form: Form[]
  submit: Submit
  contactFormValidation: ContactFormValidation
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

export type ContactFormValidation = {
  name: FieldValidation
  email: FieldValidation & { pattern: { message: string } }
  subject: FieldValidation
  message: FieldValidation
}

// Certificates Types
export type Certificates = {
  title: ByDesign
  btnToVerify: ByDesign
  description: string
  coursesCompleted: string
  hoursCompleted: string
  certificatesEarned: string
}

// Footer Types
export type Footer = {
  rights: string
}

// Actions Responses Types
export type ActionsResponses = {
  contactForm: ContactForm
}

export type ContactForm = {
  success: string
  error: string
}
