import { useContactForm } from "@/hooks/use-contact-form"

import type { ContactFormData } from "@/types/contact-form-data"
import type { LanguageData } from "@/types/language"

type Props = {
  t: LanguageData
  currentLang: string
}

export function ContactForm({ t, currentLang }: Props) {
  const { register, errors, isPending, onSubmit, validation } = useContactForm({
    t,
    currentLang
  })

  return (
    <form
      noValidate
      onSubmit={onSubmit}
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
                {...register(
                  field.id as keyof ContactFormData,
                  validation[field.id as keyof ContactFormData]
                )}
              />
            ) : (
              <input
                id={field.id}
                type={field.type}
                placeholder={field.placeholder}
                required
                className="field"
                {...register(
                  field.id as keyof ContactFormData,
                  validation[field.id as keyof ContactFormData]
                )}
              />
            )}

            {errors[field.id as keyof ContactFormData] && (
              <span className="field-error">
                {errors[field.id as keyof ContactFormData]?.message}
              </span>
            )}
          </div>
        ))}
      </div>

      <div className="pt-2 text-center">
        <button
          type="submit"
          disabled={isPending}
          className="btn-primary btn-pill px-10 sm:px-12"
        >
          {t.contact.submit.label}
        </button>
      </div>
    </form>
  )
}
