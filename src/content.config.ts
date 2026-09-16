import { glob } from "astro/loaders"
import { defineCollection } from "astro:content"
import { z } from "astro/zod"

const experience = defineCollection({
  loader: glob({
    pattern: "**/*.yml",
    base: "./src/content/experience"
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      companyUrl: z.url().optional(),
      position: z.string(),
      logo: image(),
      order: z.number(),
      startDate: z.date(),
      endDate: z.date().optional(),
      isCurrent: z.boolean().default(false),
      location: z.string().optional()
    })
})

const education = defineCollection({
  loader: glob({
    pattern: "**/*.yml",
    base: "./src/content/education"
  }),
  schema: ({ image }) =>
    z.object({
      academy: z.string(),
      degree: z.string(),
      year: z.string(),
      logo: image(),
      order: z.number(),
      courses: z.array(z.string())
    })
})

const projects = defineCollection({
  loader: glob({
    pattern: "**/*.yml",
    base: "./src/content/projects"
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      publishDate: z.date(),
      technologies: z.array(z.string()),
      githubUrl: z.object({
        url: z.url(),
        isPrivate: z.boolean().default(false)
      }),
      liveUrl: z.url(),
      image: image(),
      featured: z.boolean().default(false),
      status: z
        .enum(["completed", "in-progress", "planned", "paused", "beta"])
        .default("completed")
    })
})

const certificates = defineCollection({
  loader: glob({
    pattern: "**/*.yml",
    base: "./src/content/certificates"
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    issuer: z.string(),
    issueDate: z.date().optional(),
    credentialId: z.string().optional(),
    credentialUrl: z.url().optional(),
    image: z.string().optional(),
    skills: z.array(z.string()).optional(),
    status: z
      .enum(["completed", "in-progress", "paused", "planned"])
      .default("completed")
  })
})

const blog = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/blog"
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      publishDate: z.date(),
      image: image().optional(),
      tags: z.array(z.string()).optional(),
      draft: z.boolean().default(false)
    })
})

export const collections = {
  experience,
  education,
  projects,
  certificates,
  blog
}
