import { getRelativeLocaleUrl } from "astro:i18n"

import { routes } from "@/const/routes"
import { getDesign } from "@/libs/design"
import { LANGS } from "@/i18n"

import type { Lang } from "@/types/i18n"

export const getPathWithoutLocale = (pathname: string) => {
  const segments = pathname.split("/").filter(Boolean)
  const [firstSegment] = segments

  const pathSegments = LANGS.includes(firstSegment as Lang)
    ? segments.slice(1)
    : segments

  return `/${pathSegments.join("/")}`
}

export const getAlternateLocaleUrl = (pathname: string, currentLang: Lang) => {
  const targetLang = currentLang === "es" ? "en" : "es"
  return getRelativeLocaleUrl(targetLang, getPathWithoutLocale(pathname))
}

export const getAlternateDesignUrl = (url: URL, currentLang: Lang) => {
  const design = getDesign(url)
  const target = design === "TERMINAL" ? "FORMAL" : "TERMINAL"

  const path = getPathWithoutLocale(url.pathname)
  const isCertificates = path.endsWith(routes[design].certificates)

  const targetPath = isCertificates
    ? routes[target].certificates
    : routes[target].home

  return getRelativeLocaleUrl(currentLang, targetPath)
}
