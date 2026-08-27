export type Lang = "es" | "en"
export type Design = "TERMINAL" | "FORMAL"

export type Bilingual<T = string> = Record<Lang, T>

export type ByDesign<T = string> = Record<Design, T>

type Primitive = string | number | boolean | null | undefined

export type Resolved<T> = T extends Primitive
  ? T
  : T extends readonly (infer Item)[]
    ? Resolved<Item>[]
    : T extends ByDesign<infer ByDesignValue>
      ? Resolved<ByDesignValue>
      : T extends Bilingual<infer BilingualValue>
        ? Resolved<BilingualValue>
        : { [Key in keyof T]: Resolved<T[Key]> }
