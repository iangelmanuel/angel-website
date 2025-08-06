import { siteInfo } from "@/const/site-info"
import type { LanguageData } from "@/types/language"

export const en: LanguageData = {
  seo: {
    title: "Angel De La Torre",
    description:
      "Website of Angel De La Torre, a Full Stack Developer & Phone Developer based in Barranquilla, Colombia. Explore my work, skills, and contact me for your next project.",
    image: "/img/logo-ad.png",
    siteUrl: import.meta.env.SITE || "https://angel-app.vercel.app"
  },
  nav: {
    about: "About",
    skills: "Skills",
    projects: "Projects",
    experience: "Experience",
    blog: "Blog",
    certifications: "Certifications",
    contact: "Contact"
  },
  hero: {
    yearExp: "2+ years exp.",
    available: {
      label: siteInfo.available
        ? "Available for new projects."
        : "Not available for now."
    },
    greeting: "Hi, I'm",
    title: "Full Stack Developer & Phone Developer",
    description: `I build exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Currently focused on building products of ${siteInfo.work.isWorking ? siteInfo.work.company : siteInfo.quasarDesign.title}.`,
    btn1: "See My Work",
    btn2: "Download CV"
  },
  about: {
    badge: "About Me",
    title: "Who I Am",
    description1:
      "I'm a Full Stack Developer with a passion for creating beautiful, functional, and user-centered digital experiences. With 10+ years of experience in the field, I am always looking for new and innovative ways to bring my clients' visions to life.",
    description2:
      "I believe that design is about more than just making things look pretty – it's about solving problems and creating intuitive, enjoyable experiences for users.",

    quickStats: {
      title: "Quick Stats",

      experiencieLabel: "Experience",
      projectsLabel: "Projects",
      clientsLabel: "Clients",
      awardsLabel: "Awards",

      experienceValue: "2+ Years",
      projectsValue: "10+ Projects",
      clientsValue: "5+ Clients",
      awardsValue: "3 Awards"
    }
  },
  skillsAndTechnologies: {
    badge: "Skills & Technologies",
    title: "What I Do",
    skills: [
      {
        label: "Frontend",
        skills: ["Astro", "React", "Next.js", "Tailwind CSS"]
      },
      {
        label: "Backend",
        skills: ["Node.js", "Express", "Supabase", "PostgreSQL", "MongoDB"]
      },
      { label: "DevOps", skills: ["Git", "Vercel", "Cloudflare"] }
    ]
  },
  // certifications: {
  //   title: "Certifications",
  //   viewCredential: "View Credential",
  //   issuedBy: "Issued by"
  // },

  projects: {
    badge: "Projects",
    title: "What I Can Do",
    github: "Code",
    demo: "Demo"
  },

  contact: {
    badge: "Contact Me",
    title: "Get in Touch",

    availability: {
      availableLabel: "Availability",
      availableData: siteInfo.available ? "Available" : "Not Available",

      responseTimeLabel: "Response Time",
      responseTimeData: "24-48 hours"
    },

    form: [
      {
        id: "name",
        label: "Name",
        placeholder: "Your Name",
        type: "text"
      },
      {
        id: "email",
        label: "Email",
        placeholder: "your@email.com",
        type: "email"
      },
      {
        id: "subject",
        label: "Subject",
        placeholder: "Project inquiry...",
        type: "text"
      },
      {
        id: "message",
        label: "Message",
        placeholder: "Tell me about your project...",
        type: "textarea"
      }
    ],
    submit: {
      label: "Send Message",
      sending: "Sending",
      successMessage: "Message sent successfully!",
      errorMessage: "Error sending message. Please try again later."
    }
  },
  footer: {
    rights: `${siteInfo.authorNameAndSurname}. All rights reserved.`
  }
}
