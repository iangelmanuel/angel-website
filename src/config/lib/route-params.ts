const LOCALES = ["", "en", "es"]
const DESIGNS = ["", "formal"]

export const getRouteParams = () =>
  LOCALES.flatMap((locale) =>
    DESIGNS.map((design) => ({
      params: { route: [locale, design].filter(Boolean).join("/") || undefined }
    }))
  )
