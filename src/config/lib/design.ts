import { routes } from "@/config/const/routes"

import type { Design } from "@/config/types/design"

export const getDesign = (url: URL): Design =>
  url.pathname.includes(routes.FORMAL.home) ? "FORMAL" : "TERMINAL"
