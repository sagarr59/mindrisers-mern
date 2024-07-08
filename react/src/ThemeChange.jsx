import React, { useState, useEffect } from "react"
import "./ThemeChange.css" // Assume that this file contains the necessary CSS

const ThemeChange = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    document.body.className = isDarkMode ? "dark-mode" : "light-mode"
  }, [isDarkMode])

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode)
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>{isDarkMode ? "Dark Mode" : "Light Mode"}</h1>
        <button onClick={toggleTheme}>Switch to {isDarkMode ? "Light" : "Dark"} Mode</button>
      </header>
    </div>
  )
}

export default ThemeChange
