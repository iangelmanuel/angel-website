import { glob } from "astro/loaders"
import { defineCollection } from "astro:content"
import { z } from "astro/zod"

const projects = defineCollection({
  loader: glob({
    pattern: "**/*.md",
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
        .enum(["completed", "in-progress", "planned"])
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

export const collections = {
  projects,
  certificates
}
