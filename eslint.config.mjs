import astro from "eslint-plugin-astro"
import tseslint from "typescript-eslint"
import jseslint from "@eslint/js"

export default [
  { ignores: ["dist/**", ".astro/**", ".vercel/**", "node_modules/**"] },
  jseslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...astro.configs.recommended,
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }
      ]
    }
  }
]
