import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import type { LanguageData } from "@/types/language"
import { CardContent } from "./ui/card"

type Props = {
  t: LanguageData
}

export function ContactForm({ t }: Props) {
  return (
    <CardContent className="p-0">
      <form className="space-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {t.contact.form.map((field) => (
            <div
              key={field.id}
              className={`space-y-2 ${
                field.type === "textarea"
                  ? "col-span-1 sm:col-span-2"
                  : field.id === "subject"
                    ? "col-span-1 sm:col-span-2"
                    : ""
              } `}
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
                />
              ) : (
                <Input
                  id={field.id}
                  type={field.type}
                  placeholder={field.placeholder}
                  required
                  className="w-full text-sm"
                />
              )}
            </div>
          ))}
        </div>

        <Button
          type="submit"
          className="w-full"
        >
          {t.contact.submit.label}
        </Button>
      </form>
    </CardContent>
  )
}
