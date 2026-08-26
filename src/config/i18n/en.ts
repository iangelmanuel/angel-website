import { siteInfo } from "@/config/const/site-info"
import type { LanguageData } from "@/config/types/language"

export const en: LanguageData = {
  seo: {
    title: "Angel De La Torre",
    description:
      "Website of Angel De La Torre, a Full Stack and Phone Developer based in Barranquilla, Colombia. Explore my work, skills, and contact me for your next project.",
    certificatesPage: {
      title: "Certifications - Angel De La Torre",
      description:
        "Explore the certifications and courses completed by Angel De La Torre, a Full Stack and Phone Developer. Validate my skills and knowledge through recognized credentials."
    }
  },

  nav: {
    about: { TERMINAL: "about-me", FORMAL: "About" },
    projects: { TERMINAL: "projects", FORMAL: "Projects" },
    contact: { TERMINAL: "contact", FORMAL: "Contact" }
  },

  hero: {
    yearExp: `${siteInfo.yearsOfExperience}+ years of experience`,
    greeting: "Hi, I'm ",
    title: "Full Stack and Phone Developer",
    description: `I build exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Currently focused on developing products at <a href="${siteInfo.work.isWorking ? siteInfo.work.url : siteInfo.verlunStudio.url}" target="_blank" rel="noopener noreferrer" class="font-semibold">${siteInfo.work.isWorking ? siteInfo.work.company : siteInfo.verlunStudio.title}</a>.`,
    primaryBtn: { TERMINAL: "./view-projects", FORMAL: "View my work" },
    secondaryBtn: { TERMINAL: "download-cv", FORMAL: "Download CV" }
  },

  about: {
    badge: "About Me",
    title: { TERMINAL: "cat ./about-me.md", FORMAL: "About" },
    description1:
      "I'm a Full Stack Developer with a passion for creating beautiful, functional, and user-centered digital experiences. With over 2 years of experience in the field, I'm always looking for innovative ways to bring my clients' visions to life.",
    description2:
      "I believe design is more than just making something look good—it's about solving problems and creating intuitive, enjoyable experiences for users.",

    skills: {
      badge: "Skills",
      title: { TERMINAL: "ls ./stack", FORMAL: "Skills & Technologies" },
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
      badge: "Education",
      title: { TERMINAL: "ls ./education", FORMAL: "Academic Background" },
      btnToCertificates: {
        TERMINAL: "view certificates",
        FORMAL: "View Certificates"
      },
      coursesLabel: "courses",
      list: [
        {
          logo: "/img/academy-logo/devtalles.webp",
          academy: "Devtalles",
          degree: "Frontend and Backend Web Development",
          year: "2024 - Present",
          courses: [
            "Shadcn/ui: Accessible and Customizable Components",
            "Astro: The Framework for Content-Oriented Websites",
            "OpenAI: Practical Exercises and Assistants with React + Nest.js",
            "Nest.js + Reports: Generate PDFs from Node",
            "React Native Expo: Native Applications for iOS and Android"
          ]
        },
        {
          logo: "/img/academy-logo/midudev.webp",
          academy: "Midudev Academy",
          degree: "MCP and JavaScript Development",
          year: "2025 - 2025",
          courses: [
            "Intensive Course on Model Context Protocol (MCP)",
            "Learn the Latest in JavaScript (ES2023 & ES2024)"
          ]
        },
        {
          logo: "/img/academy-logo/udemy.webp",
          academy: "Udemy",
          degree: "Full Stack Web Development",
          year: "2023 - 2025",
          courses: [
            "Master in Fullstack Programming with JavaScript, Angular, and Node",
            "Modern JavaScript – The Definitive Guide. Build 20+ Projects",
            "React – The Complete Guide: Hooks, Context, Redux, MERN. 15+ Apps",
            "TypeScript Without Borders – The Definitive Guide",
            "Laravel 9 – Build Applications and Websites with PHP 8 and MVC",
            "Vue.js 3 - The Complete Guide - Composition, Pinia, MEVN. 10+ Apps"
          ]
        },
        {
          logo: "/img/academy-logo/uac.webp",
          academy: "Universidad Autónoma del Caribe",
          degree: "International Business and Finance",
          year: "2021 - 2026",
          courses: [
            "Data Analysis and Visualization with Python",
            "Digital Marketing and Business Strategies",
            "Financial Analysis and Investment Strategies",
            "International Trade and Global Business",
            "Corporate Finance and Risk Management"
          ]
        }
      ]
    }
  },

  projects: {
    badge: "Projects",
    title: { TERMINAL: "ls ./projects --recent", FORMAL: "What I can do" },
    demo: { TERMINAL: "open", FORMAL: "Demo" }
  },

  contact: {
    badge: "Contact Me",
    title: { TERMINAL: "./contact.sh --send", FORMAL: "Get in touch" },
    windowTitle: "contact.sh",
    lede: "Tell me what you need and I'll get back to you directly by email.",

    form: [
      { id: "name", label: "Name", placeholder: "Your name", type: "text" },
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
    },

    contactFormValidation: {
      name: {
        required: "Name is required",
        min: "Name must be at least 2 characters",
        max: "Name cannot exceed 50 characters"
      },
      email: {
        required: "Email is required",
        pattern: "Please enter a valid email address"
      },
      subject: {
        required: "Subject is required",
        min: "Subject must be at least 2 characters",
        max: "Subject cannot exceed 100 characters"
      },
      message: {
        required: "Message is required",
        min: "Message must be at least 10 characters",
        max: "Message cannot exceed 1000 characters"
      }
    }
  },

  certificates: {
    title: {
      TERMINAL: "ls ./certificates",
      FORMAL: "Education and Certificates"
    },
    btnToVerify: { TERMINAL: "verify", FORMAL: "Verify" },
    description:
      "My continuous learning through the best educational platforms and the certificates that validate my knowledge.",
    coursesCompleted: "Courses completed",
    hoursCompleted: "Hours completed",
    certificatesEarned: "Certifications"
  },

  footer: {
    rights: `${siteInfo.authorNameAndSurname}. All rights reserved.`
  },

  actionsResponses: {
    contactForm: {
      success: "Message sent successfully!",
      error: "There was an error sending your message. Please try again later."
    }
  }
}
