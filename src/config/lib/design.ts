import { getRelativeLocaleUrl } from "astro:i18n"

import { routes } from "@/config/const/routes"
import { getPathWithoutLocale } from "@/config/lib/language-path"

import type { Design } from "@/config/types/design"
import type { Language } from "@/config/types/language"

export const getDesign = (url: URL): Design =>
  url.pathname.includes(routes.FORMAL.home) ? "FORMAL" : "TERMINAL"

// TODO
export const getAlternateDesignUrl = (url: URL, currentLang: Language) => {
  const design = getDesign(url)
  const target: Design = design === "TERMINAL" ? "FORMAL" : "TERMINAL"

  const path = getPathWithoutLocale(url.pathname)
  const isCertificates = path.endsWith(routes[design].certificates)

  const targetPath = isCertificates
    ? routes[target].certificates
    : routes[target].home

  return getRelativeLocaleUrl(currentLang, targetPath)
}
