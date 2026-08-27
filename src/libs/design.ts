import { getRelativeLocaleUrl } from "astro:i18n"

import { routes } from "@/const/routes"
import { getPathWithoutLocale } from "@/libs/language-path"

import type { Design } from "@/types/design"
import type { Language } from "@/types/language"

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
