import { en } from "./en"
import { es } from "./es"

import type { Language } from "@/config/types/language"
import type { FormalCopy } from "@/modules/formal/types/copy"

const copies: Record<Language, FormalCopy> = { es, en }

export const getCopy = (lang: string | undefined) =>
  copies[(lang ?? "es") as Language]
