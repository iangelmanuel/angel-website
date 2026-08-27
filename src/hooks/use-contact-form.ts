import { actions } from "astro:actions"
import { useTransition } from "react"

import { useForm } from "react-hook-form"
import { toast } from "sonner"

import { contactFormRules } from "@/const/form-config"

import type { ContactFormData } from "@/types/contact-form-data"
import type { Lang } from "@/types/i18n"
import type { ContactCopy } from "@/modules/portfolio/components/ContactForm"

type Params = {
  contact: ContactCopy
  lang: Lang
}

export function useContactForm({ contact, lang }: Params) {
  const [isPending, startTransition] = useTransition()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>()

  const rules = contactFormRules(contact.validation)

  const onSubmit = handleSubmit((formData) => {
    startTransition(async () => {
      const { data, error } = await actions.sendContactEmail(formData)

      if (error) {
        toast.error(contact.submit.errorMessage)
        return
      }

      const { ok, message } = data

      if (ok) {
        toast.success(message[lang])
        reset()
      } else {
        toast.error(message[lang])
      }
    })
  })

  return { register, errors, isPending, onSubmit, rules }
}
