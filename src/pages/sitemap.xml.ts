import type { APIRoute } from "astro"
import { getCollection } from "astro:content"

import { SITE } from "@/config/site"
import { routes } from "@/const/routes"

type SitemapUrl = {
  path: string
  lastModified: string
  changeFrequency: string
  priority: string
}

export const GET: APIRoute = async () => {
  const now = new Date().toISOString()

  const staticUrls: SitemapUrl[] = [
    {
      path: "/",
      lastModified: now,
      changeFrequency: "monthly",
      priority: "1.0"
    },
    {
      path: "/en",
      lastModified: now,
      changeFrequency: "monthly",
      priority: "0.9"
    }
  ]

  const posts = await getCollection("blog", (post) => !post.data.draft)

  const postUrls: SitemapUrl[] = posts.map((post) => {
    const [lang, file] = post.id.split("/")
    const slug = file.replace(/\.md$/, "")
    const prefix = lang === "es" ? "" : `/${lang}`

    return {
      path: `${prefix}${routes.TERMINAL.blog}/${slug}`,
      lastModified: post.data.publishDate.toISOString(),
      changeFrequency: "yearly",
      priority: "0.8"
    }
  })

  const urls = [...staticUrls, ...postUrls]
    .map(
      (url) => `  <url>
    <loc>${SITE.seo.url}${url.path}</loc>
    <lastmod>${url.lastModified}</lastmod>
    <changefreq>${url.changeFrequency}</changefreq>
    <priority>${url.priority}</priority>
  </url>`
    )
    .join("\n")

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`

  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" }
  })
}
