import type { APIRoute } from "astro"
import { SITE } from "@/config/site"
import { DEFAULT_LANG, translate } from "@/i18n"

export const GET: APIRoute = () => {
  const manifest = {
    name: SITE.info.legalName,
    short_name: SITE.info.name,
    description: translate(SITE.seo.description, DEFAULT_LANG),
    start_url: "/",
    display: "standalone",
    background_color: SITE.seo.themeColor.dark,
    theme_color: SITE.seo.themeColor.dark,
    lang: SITE.seo.locale,
    categories: SITE.seo.manifestCategories,
    icons: [
      { src: SITE.seo.image, sizes: "any", type: "image/webp", purpose: "any" }
    ]
  }

  return new Response(JSON.stringify(manifest, null, 2), {
    headers: { "Content-Type": "application/manifest+json; charset=utf-8" }
  })
}
