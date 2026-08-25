const CARD_ACCENTS = ["cyan", "violet", "green", "pink", "orange"] as const

export const getCardAccent = (index: number) =>
  CARD_ACCENTS[index % CARD_ACCENTS.length]
