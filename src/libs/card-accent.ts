const CARD_ACCENTS = ["blue", "violet", "cyan", "green", "orange"] as const

export const getCardAccent = (index: number) =>
  CARD_ACCENTS[index % CARD_ACCENTS.length]
