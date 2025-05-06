"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  console.log(theme);

  return (
    <>
      <Button
        variant="outline"
        size="icon"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        <SunIcon className="size-5 text-white rotate-0 dark:rotate-90 scale-0 dark:scale-100 transition-all" />
        <MoonIcon className="absolute size-5 text-black rotate-0 dark:rotate-0 scale-100 dark:scale-0 transition-all" />
      </Button>
    </>
  );
};
