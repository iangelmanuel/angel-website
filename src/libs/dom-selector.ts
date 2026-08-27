export const $ = <T extends HTMLElement>(
  selector: string,
  context: Document | HTMLElement = document
) => {
  const element = context.querySelector<T>(selector)
  return element
}

export const $$ = <T extends HTMLElement>(
  selector: string,
  context: Document | HTMLElement = document
) => {
  const elements = context.querySelectorAll<T>(selector)
  return elements
}
