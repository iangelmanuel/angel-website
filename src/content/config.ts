import { defineCollection, z } from "astro:content"
import { siteInfo } from "@/const/site-info"

const projects = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      publishDate: z.date(),
      technologies: z.array(z.string()),
      githubUrl: z.object({
        url: z.string().url(),
        isPrivate: z.boolean().default(false)
      }),
      liveUrl: z.string().url(),
      image: image(),
      featured: z.boolean().default(false),
      status: z
        .enum(["completed", "in-progress", "planned"])
        .default("completed")
    })
})

const certificates = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    issuer: z.string(),
    issueDate: z.date().optional(),
    credentialId: z.string().optional(),
    credentialUrl: z.string().url().optional(),
    image: z.string().optional(),
    skills: z.array(z.string()).optional(),
    status: z
      .enum(["completed", "in-progress", "paused", "planned"])
      .default("completed")
  })
})

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    tags: z.array(z.string()),
    author: z.string().default(siteInfo.authorNameAndSurname),
    image: z.string(),
    draft: z.boolean().default(false)
  })
})

export const collections = {
  "projects": projects,
  "certificates": certificates,
  "blog": blog
}
