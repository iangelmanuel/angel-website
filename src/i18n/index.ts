import { ui } from "./ui"
import { getDesign } from "@/libs/design"

import type { Design, Lang, Resolved } from "@/types/i18n"

export { ui }

export const LANGS = ["es", "en"] as const
export const DEFAULT_LANG: Lang = "es"
export const DEFAULT_DESIGN: Design = "TERMINAL"

const getLang = (locale?: string | null): Lang =>
  LANGS.includes(locale as Lang) ? (locale as Lang) : DEFAULT_LANG

const resolve = (node: unknown, lang: Lang, design: Design): unknown => {
  if (node === null || typeof node !== "object") return node

  if (Array.isArray(node)) {
    return node.map((item) => resolve(item, lang, design))
  }

  const record = node as Record<string, unknown>

  if ("TERMINAL" in record) return resolve(record[design], lang, design)
  if ("es" in record) return resolve(record[lang], lang, design)

  return Object.fromEntries(
    Object.entries(record).map(([key, value]) => [
      key,
      resolve(value, lang, design)
    ])
  )
}

export const translate = <T>(
  node: T,
  lang: Lang,
  design: Design = DEFAULT_DESIGN
) => resolve(node, lang, design) as Resolved<T>

export const createT =
  (lang: Lang, design: Design = DEFAULT_DESIGN) =>
  <T>(node: T) =>
    translate(node, lang, design)

export const useI18n = (astro: { url: URL; currentLocale?: string }) => {
  const lang = getLang(astro.currentLocale)
  const design = getDesign(astro.url)

  return { lang, design, t: createT(lang, design) }
}
