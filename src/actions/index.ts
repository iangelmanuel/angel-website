import { defineAction } from "astro:actions"
import { z } from "astro:schema"

import { Resend } from "resend"

import { siteInfo } from "@/const/site-info"
import { es } from "@/i18n/es"
import { en } from "@/i18n/en"

const sendContactEmail = defineAction({
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
        html: `
        <!doctype html>
        <html lang="es">
          <head>
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
            <meta name="x-apple-disable-message-reformatting">
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>Nuevo mensaje de contacto</title>
            <style>
              /* Mobile tweaks */
              @media (max-width: 640px) {
                .container { width: 100% !important; }
                .px-32 { padding-left:16px !important; padding-right:16px !important; }
                .p-24 { padding:16px !important; }
                h1 { font-size:20px !important; }
              }
              /* Prefer light appearance (Apple-like) */
              :root { color-scheme: light only; }
            </style>
          </head>
          <body style="margin:0; padding:0; background:#f5f5f7;">
            <!-- Preheader (oculto) -->
            <div style="display:none; max-height:0; overflow:hidden; opacity:0; mso-hide:all;">
              Tienes un nuevo mensaje del formulario de contacto.
            </div>

            <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse;">
              <tr>
                <td align="center" style="padding: 32px;">
                  <!-- Contenedor -->
                  <table role="presentation" cellpadding="0" cellspacing="0" width="640" class="container" style="width:640px; max-width:640px; border-collapse:separate;">
                    <!-- Header (Apple-like: limpio, claro, espacioso) -->
                    <tr>
                      <td style="padding:0;">
                        <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background:#ffffff; border:1px solid #e5e5ea; border-bottom:none; border-radius:20px 20px 0 0;">
                          <tr>
                            <td class="px-32" style="padding: 28px 32px;">
                              <h1 style="margin:0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; font-size:22px; line-height:1.35; color:#1d1d1f; font-weight:700;">
                                Nuevo mensaje de contacto
                              </h1>
                              <p style="margin:8px 0 0; font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; font-size:14px; line-height:1.6; color:#6e6e73;">
                                Alguien completó el formulario en tu sitio.
                              </p>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>

                    <!-- Card principal (bordes redondeados + sombra sutil) -->
                    <tr>
                      <td style="padding:0;">
                        <table role="presentation" cellpadding="0" cellspacing="0" width="100%" class="card" style="background:#ffffff; border:1px solid #e5e5ea; border-top:none; border-radius:0 0 20px 20px;">
                          <tr>
                            <td class="p-24" style="padding:24px 32px; font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;">
                              <!-- Chip de asunto -->
                              <table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse:separate;">
                                <tr>
                                  <td style="background:#f2f2f7; border:1px solid #e5e5ea; padding:8px 12px; border-radius:999px; font-size:12px; color:#1d1d1f;">
                                    <strong style="font-weight:600;">Asunto:</strong>
                                    <span style="color:#007aff;"> ${subject}</span>
                                  </td>
                                </tr>
                              </table>

                              <!-- Separador -->
                              <div style="height:20px; line-height:20px;">&zwnj;</div>
                              <hr style="border:none; border-top:1px solid #e5e5ea; margin:0;" />
                              <div style="height:20px; line-height:20px;">&zwnj;</div>

                              <!-- Tabla de datos con estilo de cards suaves -->
                              <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:separate; border-spacing:0;">
                                <tr>
                                  <td style="padding:0;">
                                    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:separate; border:1px solid #e5e5ea; border-radius:16px; overflow:hidden;">
                                      <tr>
                                        <td style="background:#f9f9fb; width:180px; padding:14px 16px; font-size:14px; color:#6e6e73; border-bottom:1px solid #e5e5ea;">
                                          Nombre
                                        </td>
                                        <td style="background:#ffffff; padding:14px 16px; font-size:14px; color:#1d1d1f; border-bottom:1px solid #e5e5ea;">
                                          ${name}
                                        </td>
                                      </tr>
                                      <tr>
                                        <td style="background:#f9f9fb; width:180px; padding:14px 16px; font-size:14px; color:#6e6e73; border-bottom:1px solid #e5e5ea;">
                                          Email
                                        </td>
                                        <td style="background:#ffffff; padding:14px 16px; font-size:14px; color:#1d1d1f; border-bottom:1px solid #e5e5ea;">
                                          <a href="mailto:${email}" style="color:#007aff; text-decoration:none;">${email}</a>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td style="background:#f9f9fb; width:180px; padding:14px 16px; font-size:14px; color:#6e6e73; border-bottom:1px solid #e5e5ea;">
                                          Asunto
                                        </td>
                                        <td style="background:#ffffff; padding:14px 16px; font-size:14px; color:#1d1d1f; border-bottom:1px solid #e5e5ea;">
                                          ${subject}
                                        </td>
                                      </tr>
                                      <tr>
                                        <td style="background:#f9f9fb; width:180px; padding:14px 16px; font-size:14px; color:#6e6e73; vertical-align:top;">
                                          Mensaje
                                        </td>
                                        <td style="background:#ffffff; padding:16px; font-size:14px; color:#1d1d1f;">
                                          ${message}
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>

                              <!-- CTA -->
                              <table role="presentation" cellpadding="0" cellspacing="0" align="left" style="margin-top:24px;">
                                <tr>
                                  <td align="center" style="border-radius:999px;" bgcolor="#007aff">
                                    <!--[if mso]>
                                      <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="mailto:${email}" style="height:44px;v-text-anchor:middle;width:230px;" arcsize="50%" stroke="f" fillcolor="#007aff">
                                        <w:anchorlock/>
                                        <center>
                                    <![endif]-->
                                    <a href="mailto:${email}"
                                      style="display:inline-block; padding:12px 24px; font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; font-size:14px; line-height:20px; color:#ffffff; text-decoration:none; border-radius:999px;">
                                      Responder
                                    </a>
                                    <!--[if mso]>
                                        </center>
                                      </v:roundrect>
                                    <![endif]-->
                                  </td>
                                </tr>
                              </table>

                              <!-- Nota -->
                              <p style="padding: 16px; margin:16px 0 0; font-size:12px; color:#6e6e73;">
                                Recibiste este correo porque alguien envió el formulario de contacto de tu sitio.
                              </p>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                      <td style="padding: 16px; text-align:center;">
                        <p style="margin:0; font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; font-size:12px; color:#6e6e73;">
                          © ${new Date().getFullYear()} — Mensaje automático del formulario.
                        </p>
                      </td>
                    </tr>
                  </table>
                  <!-- /Contenedor -->
                </td>
              </tr>
            </table>
          </body>
        </html>
      `
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

export const server = { sendContactEmail }
