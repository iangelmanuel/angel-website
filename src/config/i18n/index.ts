import { en } from "./en"
import { es } from "./es"

import type { Language, LanguageData } from "@/config/types/language"

export const translations: Record<Language, LanguageData> = { es, en }

export const getTranslations = (lang: string | undefined) =>
  translations[(lang ?? "es") as Language]
