import { defineAction } from "astro:actions"
import { z } from "astro:schema"
import { Resend } from "resend"

import { siteInfo } from "@/const/site-info"
import { contactEmailHTML } from "@/const/contact-email-html"

import { es } from "@/i18n/es"
import { en } from "@/i18n/en"

export const sendContactEmail = defineAction({
  input: z.object({
    name: z.string().min(2).max(100),
    email: z.string().email(),
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
        from: "Angel DM <iangelmanuel02@resend.dev>",
        to: siteInfo.email,
        subject,
        html: contactEmailHTML(name, email, subject, message)
      })

      if (response.error) {
        return {
          ok: false,
          message: {
            es: es.actionsResponses.contactForm.error,
            en: en.actionsResponses.contactForm.error
          }
        }
      }

      return {
        ok: true,
        message: {
          es: es.actionsResponses.contactForm.success,
          en: en.actionsResponses.contactForm.success
        }
      }
    } catch (err) {
      return {
        ok: false,
        message: {
          es: es.actionsResponses.contactForm.error,
          en: en.actionsResponses.contactForm.error
        }
      }
    }
  }
})
