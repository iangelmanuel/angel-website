import { en } from "./en"
import { es } from "./es"

import type { Language } from "@/config/types/language"
import type { PixelCopy } from "@/modules/pixel/types/copy"

const copies: Record<Language, PixelCopy> = { es, en }

export const getCopy = (lang: string | undefined) =>
  copies[(lang ?? "es") as Language]
