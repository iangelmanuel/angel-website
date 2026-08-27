import { defineAction } from "astro:actions"
import { z } from "astro/zod"
import { Resend } from "resend"

import { SITE } from "@/config/site"
import { contactEmailHTML } from "@/libs/contact-email-html"

import { ui } from "@/i18n/ui"

export const sendContactEmail = defineAction({
  input: z.object({
    name: z.string().min(2).max(100),
    email: z.email(),
    subject: z.string().min(2).max(100),
    message: z.string().min(10).max(1000)
  }),

  handler: async ({ name, email, subject, message }) => {
    try {
      const key = import.meta.env.RESEND_API_KEY
      const resend = new Resend(key)

      if (!key) {
        throw new Error("RESEND_API_KEY is not set in environment variables.")
      }

      const response = await resend.emails.send({
        from: `${SITE.info.name} <${SITE.contact.email}>`,
        to: SITE.contact.email,
        subject,
        html: contactEmailHTML(name, email, subject, message)
      })

      if (response.error) {
        return {
          ok: false,
          message: ui.actions.contactForm.error
        }
      }

      return {
        ok: true,
        message: ui.actions.contactForm.success
      }
    } catch {
      return {
        ok: false,
        message: ui.actions.contactForm.error
      }
    }
  }
})
