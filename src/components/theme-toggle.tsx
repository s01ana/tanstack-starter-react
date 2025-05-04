import { MoonIcon, SunIcon } from "lucide-react";
import { useAppKitTheme } from "@reown/appkit/react";
import { Button } from "./ui/button";
import { useEffect } from "react";

export default function ThemeToggle() {
  const { setThemeMode, setThemeVariables } = useAppKitTheme();
  useEffect(() => {
    if (
      document.documentElement.classList.contains("dark") ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setThemeMode("dark");
      setThemeVariables({
        '--w3m-color-mix': "#000000",
        '--w3m-accent': '#e7e3e4',
        "--w3m-color-mix-strength": 50,
      });
    }
  }, []);
  function toggleTheme() {
    if (
      document.documentElement.classList.contains("dark") ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
      setThemeMode("light");
      setThemeVariables({
        '--w3m-color-mix': "#ffffff",
        '--w3m-accent': '#1b1718',
        "--w3m-color-mix-strength": 50,
      });
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
      setThemeMode("dark");
      setThemeVariables({
        '--w3m-color-mix': "#000000",
        '--w3m-accent': '#e7e3e4',
        "--w3m-color-mix-strength": 50,
      });
    }
  }

  return (
    <Button variant="outline" size="icon" type="button" onClick={toggleTheme}>
      <SunIcon className="size-4 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
      <MoonIcon className="absolute size-4 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
