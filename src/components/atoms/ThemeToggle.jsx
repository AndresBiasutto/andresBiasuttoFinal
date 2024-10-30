import { useState, useEffect } from "react";
import imgUrls from "../../data/imgUrls";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const {lightOff, lightOn}=imgUrls.icons

  // Cambia el tema y lo guarda en localStorage
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button onClick={toggleTheme}>
      {theme === "dark" ? (
        <img className="h-6 w-6" src={lightOff} />
      ) : (
        <img className="h-6 w-6" src={lightOn} />
      )}
    </button>
  );
}
