import type { LanguageData } from "@/types/language"

export const formConfig = {
  contactForm: (t: LanguageData) => {
    const { contactFormValidation } = t.contact

    return {
      name: {
        required: contactFormValidation.name.required,
        min: {
          value: 2,
          message: contactFormValidation.name.min
        },
        max: {
          value: 50,
          message: contactFormValidation.name.max
        }
      },
      email: {
        required: contactFormValidation.email.required,
        pattern: {
          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          message: contactFormValidation.email.pattern
        }
      },
      subject: {
        required: contactFormValidation.subject.required,
        min: {
          value: 2,
          message: contactFormValidation.subject.min
        },
        max: {
          value: 100,
          message: contactFormValidation.subject.max
        }
      },
      message: {
        required: contactFormValidation.message.required,
        min: {
          value: 10,
          message: contactFormValidation.message.min
        },
        max: {
          value: 1000,
          message: contactFormValidation.message.max
        }
      }
    } as const
  }
}
