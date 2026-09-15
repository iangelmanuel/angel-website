const CARD_ACCENTS = ["violet", "cyan", "green", "pink", "orange"] as const

export const getCardAccent = (index: number) =>
  CARD_ACCENTS[index % CARD_ACCENTS.length]
