import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"

export function ModeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light")

  useEffect(() => {
    const stored = localStorage.getItem("theme") as "light" | "dark" | null
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches
    const initial = stored ?? (prefersDark ? "dark" : "light")
    setTheme(initial)
    document.documentElement.classList.toggle("dark", initial === "dark")
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark")
    localStorage.setItem("theme", theme)
  }, [theme])

  const toggle = () => setTheme((prev) => (prev === "dark" ? "light" : "dark"))

  return (
    <button
      type="button"
      onClick={toggle}
      className="icon-btn relative mr-0 size-8 transition-transform duration-300 hover:scale-110 sm:size-10"
      aria-label="Toggle theme"
    >
      <Sun className="size-4 scale-100 rotate-0 transition-all duration-300 sm:h-5 sm:w-5 dark:scale-0 dark:-rotate-90" />
      <Moon className="absolute size-4 scale-0 rotate-90 transition-all duration-300 sm:h-5 sm:w-5 dark:scale-100 dark:rotate-0" />
    </button>
  )
}
