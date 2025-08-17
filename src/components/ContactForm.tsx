import { actions } from "astro:actions"
import { useTransition } from "react"

import { useForm } from "react-hook-form"
import { formConfig } from "@/const/form-config"
import { toast } from "sonner"

import { CardContent } from "./ui/card"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Button } from "./ui/button"

import type { LanguageData } from "@/types/language"
import type { ContactFormData } from "@/types/contact-form-data"

type Props = {
  t: LanguageData
  currentLang: string
}

export function ContactForm({ t, currentLang }: Props) {
  const [isPending, startTransition] = useTransition()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ContactFormData>()

  const formValidation = formConfig.contactForm(t)

  const onSubmit = (formData: ContactFormData) => {
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
      } else {
        toast.error(translatedMessage)
      }
    })
  }

  return (
    <CardContent className="p-0">
      <form
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4"
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {t.contact.form.map((field) => (
            <div
              key={field.id}
              className={
                field.type === "textarea"
                  ? "col-span-1 sm:col-span-2"
                  : field.id === "subject"
                    ? "col-span-1 sm:col-span-2"
                    : ""
              }
            >
              <Label
                htmlFor={field.id}
                className="text-xs sm:text-sm"
              >
                {field.label}
              </Label>

              {field.type === "textarea" ? (
                <Textarea
                  id={field.id}
                  placeholder={field.placeholder}
                  rows={4}
                  required
                  className="resize-none text-sm"
                  {...register(
                    field.id as keyof ContactFormData,
                    formValidation[field.id as keyof ContactFormData]
                  )}
                />
              ) : (
                <Input
                  id={field.id}
                  type={field.type}
                  placeholder={field.placeholder}
                  required
                  className="w-full text-sm"
                  {...register(
                    field.id as keyof ContactFormData,
                    formValidation[field.id as keyof ContactFormData]
                  )}
                />
              )}

              {errors[field.id as keyof ContactFormData] && (
                <span className="text-xs text-red-500">
                  {errors[field.id as keyof ContactFormData]?.message}
                </span>
              )}
            </div>
          ))}
        </div>

        <Button
          disabled={isPending}
          className="w-full"
        >
          {t.contact.submit.label}
        </Button>
      </form>
    </CardContent>
  )
}
