import { routes } from "@/const/routes"

import type { Design } from "@/types/i18n"

export const getDesign = (url: URL): Design =>
  url.pathname.includes(routes.FORMAL.home) ? "FORMAL" : "TERMINAL"
