import type { ui } from "@/i18n/ui"
import type { Resolved } from "@/types/i18n"

type Validation = Resolved<typeof ui.contact.validation>

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export const contactFormRules = (validation: Validation) => ({
  name: validation.name,
  email: {
    required: validation.email.required,
    pattern: {
      value: EMAIL_PATTERN,
      message: validation.email.pattern.message
    }
  },
  subject: validation.subject,
  message: validation.message
})
