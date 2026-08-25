import { actions } from "astro:actions"
import { useTransition } from "react"

import { useForm } from "react-hook-form"
import { toast } from "sonner"

import { formConfig } from "@/config/const/form-config"

import type { ContactFormData } from "@/config/types/contact-form-data"
import type { LanguageData } from "@/config/types/language"

type Params = {
  t: LanguageData
  currentLang: string
}

export function useContactForm({ t, currentLang }: Params) {
  const [isPending, startTransition] = useTransition()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>()

  const validation = formConfig.contactForm(t)

  const onSubmit = handleSubmit((formData) => {
    startTransition(async () => {
      const { data, error } = await actions.sendContactEmail(formData)

      if (error) {
        toast.error(t.contact.submit.errorMessage)
        return
      }

      const { ok, message } = data

      const translatedMessage = message[currentLang as keyof typeof message]

      if (ok) {
        toast.success(translatedMessage)
        reset()
      } else {
        toast.error(translatedMessage)
      }
    })
  })

  return { register, errors, isPending, onSubmit, validation }
}
