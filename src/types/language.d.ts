export type Language = "es" | "en"

export type LanguageData = {
  seo: Seo
  nav: Nav
  hero: Hero
  about: About
  projects: Projects
  contact: Contact
  footer: Footer
  certificatesPage: CertificatesPage
}

// SEO Types
export type Seo = {
  title: string
  description: string
  image: string
  siteUrl: string
  certificatesPage: CertificatesPageSeo
}

export type CertificatesPageSeo = {
  title: string
  description: string
  btnToVerify: string
}

// Navigation Types
export type Nav = {
  about: string
  skills: string
  projects: string
  experience: string
  blog: string
  certifications: string
  contact: string
}

// Hero Types
export type Hero = {
  yearExp: string
  available: HeroAvailable
  greeting: string
  title: string
  description: string
  btn1: string
  btn2: string
}

export type HeroAvailable = {
  label: string
}

// About Types
export type About = {
  badge: string
  title: string
  description1: string
  description2: string
  skillsAndTechnologies: SkillsAndTechnologies
  education: Education
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

export type Education = {
  title: string
  educations: EducationDetail[]
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
  title: string
  github: string
  demo: string
}

// Contact Types
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

// Footer Types
export type Footer = {
  rights: string
}

// Certificates Page Types
export type CertificatesPage = {
  title: string
  btnToRedirect: string
  pageData: CertificatesPageData
}

export type CertificatesPageData = {
  title: string
  description: string
  coursesCompleted: string
  hoursCompleted: string
  certificatesEarned: string
}
