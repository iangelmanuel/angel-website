import { useState, useEffect } from "react"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ModeToggle() {
  const [theme, setThemeState] = useState<"theme-light" | "dark" | "system">(
    "theme-light"
  )

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark")
    setThemeState(isDarkMode ? "dark" : "theme-light")
  }, [])

  useEffect(() => {
    const isDark =
      theme === "dark" ||
      (theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    document.documentElement.classList[isDark ? "add" : "remove"]("dark")
  }, [theme])

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setThemeState(theme === "dark" ? "theme-light" : "dark")}
      className="mr-0 size-8 rounded-full transition-transform duration-300 hover:scale-110 hover:bg-black/5 sm:size-10 dark:hover:bg-white/5"
      aria-label="Toggle theme"
    >
      <Sun className="size-4 scale-100 rotate-0 transition-all duration-300 sm:h-5 sm:w-5 dark:scale-0 dark:-rotate-90" />
      <Moon className="absolute size-4 scale-0 rotate-90 transition-all duration-300 sm:h-5 sm:w-5 dark:scale-100 dark:rotate-0" />
    </Button>
  )
}
