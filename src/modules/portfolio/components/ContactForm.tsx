import { useContactForm } from "@/hooks/use-contact-form"

import type { ui } from "@/i18n/ui"
import type { ContactFormData } from "@/types/contact-form-data"
import type { Lang, Resolved } from "@/types/i18n"

export type ContactCopy = Resolved<typeof ui.contact>

type Props = {
  contact: ContactCopy
  lang: Lang
}

export function ContactForm({ contact, lang }: Props) {
  const { register, errors, isPending, onSubmit, rules } = useContactForm({
    contact,
    lang
  })

  return (
    <form
      noValidate
      onSubmit={onSubmit}
      className="space-y-4"
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {contact.form.map((field) => {
          const id = field.id as keyof ContactFormData
          const isWide = field.type === "textarea" || field.id === "subject"

          return (
            <div
              key={field.id}
              className={isWide ? "col-span-1 sm:col-span-2" : ""}
            >
              <label
                htmlFor={field.id}
                className="field-label"
              >
                {field.label}
              </label>

              {field.type === "textarea" ? (
                <textarea
                  id={field.id}
                  placeholder={field.placeholder}
                  rows={4}
                  required
                  className="field field-textarea"
                  {...register(id, rules[id])}
                />
              ) : (
                <input
                  id={field.id}
                  type={field.type}
                  placeholder={field.placeholder}
                  required
                  className="field"
                  {...register(id, rules[id])}
                />
              )}

              {errors[id] && (
                <span className="field-error">{errors[id]?.message}</span>
              )}
            </div>
          )
        })}
      </div>

      <div className="pt-2 text-center">
        <button
          type="submit"
          disabled={isPending}
          className="btn-primary btn-pill px-10 sm:px-12"
        >
          {contact.submit.label}
        </button>
      </div>
    </form>
  )
}
