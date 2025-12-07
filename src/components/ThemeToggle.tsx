"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    setMounted(true);

    const saved = localStorage.getItem("theme") || "light";
    setTheme(saved);

    if (saved === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  if (!mounted) return null; // prevents hydration mismatch

  function toggleTheme() {
    const newTheme = theme === "light" ? "dark" : "light";

    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }

  return (
    <button
  onClick={toggleTheme}
  className="
    relative px-4 py-2 
    rounded-full 
    bg-gradient-to-r from-yellow-300 to-red-400 
    dark:from-red-600 dark:to-yellow-400 
    text-red-900 dark:text-yellow-100
    font-semibold shadow-md
    hover:shadow-xl hover:scale-105 
    transition-all duration-300
    flex items-center gap-2
  "
>
  <span
    className="
      w-5 h-5 flex items-center justify-center
      rounded-full bg-white/70 dark:bg-black/70
      shadow-inner transition-all duration-300
    "
  >
    {theme === "light" ? "🌙" : "☀"}
  </span>
  {theme === "light" ? "Dark Mode" : "Light Mode"}
</button>

  );
}
