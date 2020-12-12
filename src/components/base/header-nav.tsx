import React, { useState } from "react";
import { Link } from "gatsby";

export default () => {
  const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const isDarkMode = localStorage.theme === "dark" || (!("theme" in localStorage) && darkModeMediaQuery.matches);
  const [darkMode, setDarkMode] = useState(isDarkMode);
  const handleDarkMode = (darkMode: boolean) => {
    if (darkMode) {
      document.querySelector("html")?.classList.add("dark");
    } else {
      document.querySelector("html")?.classList.remove("dark");
    }
    window.localStorage.theme = darkMode ? "dark" : "light";
  };
  handleDarkMode(darkMode);
  darkModeMediaQuery.addEventListener("change", e => {
    const darkMode = e.matches;
    handleDarkMode(darkMode);
    setDarkMode(darkMode);
  });
  const toggleDarkMode = () => {
    handleDarkMode(!darkMode);
    setDarkMode(!darkMode);
  };

  return (
    <div className="h-60px flex justify-between">
      <h1 className="h-full flex items-center">
        <Link
          to="/"
          className="h-full flex items-center text-18px font-medium transition duration-300 ease-in-out hover:text-primary"
        >
          Hi, this is kaneshin.
        </Link>
      </h1>
      <div className="h-full flex items-center">
        <div className={`text-22px ${darkMode ? "text-moon" : "text-sun"}`} onClick={toggleDarkMode} role="button">
          ●
        </div>
      </div>
    </div>
  );
};
