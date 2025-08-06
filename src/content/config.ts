import { defineCollection, z } from "astro:content"

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    technologies: z.array(z.string()),
    githubUrl: z.object({
      url: z.string().url(),
      isPrivate: z.boolean().default(false)
    }),
    liveUrl: z.string().url(),
    image: z.string(),
    featured: z.boolean().default(false),
    status: z.enum(["completed", "in-progress", "planned"]).default("completed")
  })
})

const certifications = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    issuer: z.string(),
    issueDate: z.date(),
    credentialId: z.string().optional(),
    credentialUrl: z.string().url().optional(),
    image: z.string(),
    skills: z.array(z.string())
  })
})

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    tags: z.array(z.string()),
    author: z.string().default("Angel De La Torre"),
    image: z.string(),
    draft: z.boolean().default(false)
  })
})

export const collections = {
  "projects": projects,
  "certifications": certifications,
  "blog": blog
}
