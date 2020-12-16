import React, { useState, useEffect } from "react";
import { Link } from "gatsby";

export default () => {
  const theme = ((initialDarkMode = false) => {
    const [darkMode, setDarkMode] = useState(initialDarkMode);
    const toggleMode = () => {
      setDarkMode(!darkMode);
    };

    // Initialize
    useEffect(() => {
      const query = window.matchMedia("(prefers-color-scheme: dark)");
      // Add Listener
      query.addEventListener("change", (e: MediaQueryListEvent) => {
        setDarkMode(e.matches);
      });

      // SetDarkMode
      const isDarkMode = window.localStorage.theme === "dark" || (!("theme" in window.localStorage) && query.matches);
      setDarkMode(isDarkMode);
    }, []);

    // Change theme
    useEffect(() => {
      if (darkMode) {
        document.querySelector("html")?.classList.add("dark");
      } else {
        document.querySelector("html")?.classList.remove("dark");
      }
      window.localStorage.theme = darkMode ? "dark" : "light";
    }, [darkMode]);

    return { darkMode, toggleMode };
  })();

  return (
    <div className="h-60px flex justify-between">
      <h1 className="h-full flex items-center">
        <Link
          to="/"
          className="h-full flex items-center text-18px font-medium transition duration-300 ease-in-out hover:opacity-70"
        >
          Hi, this is kaneshin.
        </Link>
      </h1>
      <div className="h-full flex items-center">
        <div
          className={`text-22px ${theme.darkMode ? "text-moon" : "text-sun"}`}
          onClick={theme.toggleMode}
          role="button"
        >
          ●
        </div>
      </div>
    </div>
  );
};
