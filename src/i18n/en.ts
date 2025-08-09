import { siteInfo } from "@/const/site-info"
import type { LanguageData } from "@/types/language"

export const en: LanguageData = {
  seo: {
    title: "Angel De La Torre",
    description:
      "Website of Angel De La Torre, a Full Stack and Phone Developer based in Barranquilla, Colombia. Explore my work, skills, and contact me for your next project.",
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
    yearExp: "2+ years of experience",
    available: {
      label: siteInfo.available
        ? "Available for new projects."
        : "Not available at the moment."
    },
    greeting: "Hi, I'm",
    title: "Full Stack and Phone Developer",
    description: `I build exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Currently focused on developing products at <a href="#" class="hover:underline font-semibold">${siteInfo.work.isWorking ? siteInfo.work.company : siteInfo.quasarDesign.title}</a>.`,
    btn1: "View my work",
    btn2: "Download CV"
  },
  about: {
    badge: "About Me",
    title: "About",
    description1:
      "I'm a Full Stack Developer with a passion for creating beautiful, functional, and user-centered digital experiences. With over 2 years of experience in the field, I'm always looking for innovative ways to bring my clients' visions to life.",
    description2:
      "I believe design is more than just making something look good—it's about solving problems and creating intuitive, enjoyable experiences for users.",
    skillsAndTechnologies: {
      badge: "Skills & Technologies",
      title: "Skills",
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
    }
  },
  // certifications: {
  //   title: "Certifications",
  //   viewCredential: "View credential",
  //   issuedBy: "Issued by"
  // },

  projects: {
    badge: "Projects",
    title: "What I can do",
    github: "Code",
    demo: "Demo"
  },

  contact: {
    badge: "Contact Me",
    title: "Get in touch",

    availability: {
      availableLabel: "Availability",
      availableData: siteInfo.available ? "Available" : "Not available",

      responseTimeLabel: "Response time",
      responseTimeData: "24-48 hours"
    },

    form: [
      {
        id: "name",
        label: "Name",
        placeholder: "Your name",
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
      label: "Send message",
      sending: "Sending",
      successMessage: "Message sent successfully!",
      errorMessage: "Error sending message."
    }
  },
  footer: {
    rights: `${siteInfo.authorNameAndSurname}. All rights reserved.`
  }
}
