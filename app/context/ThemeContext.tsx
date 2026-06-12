import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";

type Theme = "light" | "dark" | "system";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  isDark: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window === "undefined") return "system";
    return (localStorage.getItem("theme") as Theme) || "system";
  });

  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const updateDarkMode = () => {
      let shouldBeDark = false;

      if (theme === "dark") {
        shouldBeDark = true;
      } else if (theme === "light") {
        shouldBeDark = false;
      } else {
        shouldBeDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      }

      setIsDark(shouldBeDark);
      if (shouldBeDark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    };

    updateDarkMode();

    if (theme === "system") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      mediaQuery.addEventListener("change", updateDarkMode);
      return () => mediaQuery.removeEventListener("change", updateDarkMode);
    }
  }, [theme]);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, isDark }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
