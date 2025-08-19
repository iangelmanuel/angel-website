import { defineConfig } from "astro/config"
import react from "@astrojs/react"
import tailwindcss from "@tailwindcss/vite"

import vercel from "@astrojs/vercel"

import icon from "astro-icon";

export default defineConfig({
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
  },

  site: "https://angel-website-pi.vercel.app/",

  adapter: vercel({ webAnalytics: true }),
  output: "static"
})