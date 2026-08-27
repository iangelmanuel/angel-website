import { getRelativeLocaleUrl } from "astro:i18n"

import type { Language } from "@/types/language"

const locales: Language[] = ["es", "en"]

export const getPathWithoutLocale = (pathname: string) => {
  const segments = pathname.split("/").filter(Boolean)
  const [firstSegment] = segments

  const pathSegments = locales.includes(firstSegment as Language)
    ? segments.slice(1)
    : segments

  return `/${pathSegments.join("/")}`
}

export const getAlternateLocaleUrl = (
  pathname: string,
  currentLang: Language
) => {
  const targetLang = currentLang === "es" ? "en" : "es"
  return getRelativeLocaleUrl(targetLang, getPathWithoutLocale(pathname))
}
