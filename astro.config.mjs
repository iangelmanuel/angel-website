import { defineConfig } from "astro/config"
import react from "@astrojs/react"
import tailwindcss from "@tailwindcss/vite"

import vercel from "@astrojs/vercel"

import icon from "astro-icon"

export default defineConfig({
  site: "https://angel-website-pi.vercel.app/",
  output: "static",
  adapter: vercel({ webAnalytics: true }),
  trailingSlash: "never",
  compressHTML: true,
  integrations: [react(), icon()],
  vite: {
    plugins: [tailwindcss()]
  },
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: {
      prefixDefaultLocale: false
    }
  }
})
