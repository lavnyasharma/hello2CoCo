"use client"

import { useTheme } from "@/components/theme-provider"
import { Moon, Sun } from "lucide-react"

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="p-2 rounded-full bg-white/10 dark:bg-slate-800/50 backdrop-blur-sm border border-blue-100/20 dark:border-slate-700/50 hover:bg-blue-50 dark:hover:bg-slate-800 transition-all"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Moon className="h-5 w-5 text-slate-700 dark:text-slate-200" />
      ) : (
        <Sun className="h-5 w-5 text-slate-700 dark:text-slate-200" />
      )}
    </button>
  )
}
