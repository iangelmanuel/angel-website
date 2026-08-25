import type { FieldValidation } from "react-hook-form"

export type Language = "es" | "en"

export type LanguageData = {
  seo: Seo
  hero: Hero
  about: About
  contact: Contact
  footer: Footer
  certificates: Certificates
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

// Hero Types
export type Hero = {
  yearExp: string
  greeting: string
  title: string
  description: string
}

// About Types
export type About = {
  description1: string
  description2: string
  skills: Skill[]
  education: Education
}

export type Skill = {
  label: string
  skills: string[]
}

export type Education = {
  coursesLabel: string
  educations: EducationDetail[]
}

export type EducationDetail = {
  logo: string
  academy: string
  degree: string
  year: string
  courses: string[]
}

// Contact Types
export type Contact = {
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

// Footer Types
export type Footer = {
  rights: string
}

// Certificates Types
export type Certificates = {
  description: string
  coursesCompleted: string
  hoursCompleted: string
  certificatesEarned: string
}

// Actions Responses Types
export type ActionsResponses = {
  contactForm: ContactForm
}

export type ContactForm = {
  success: string
  error: string
}
