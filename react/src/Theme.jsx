import React, { useState } from "react"

export default function Theme() {
  const [theme, setTheme] = useState("light")

  const darkMode = () => {
    setTheme("dark")
  }

  const lightMode = () => {
    setTheme("light")
  }

  return (
    <div className={theme === "dark" ? "dark" : "light"}>
      <p>Current theme: {theme}</p>

      <button onClick={darkMode}>Dark Theme</button>
      <button onClick={lightMode}>Light Theme</button>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus ipsum laboriosam provident perspiciatis voluptatum neque quos officia adipisci
        deleniti magnam expedita vero, placeat, sed at illum inventore iste cupiditate veniam!
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus ipsum laboriosam provident perspiciatis voluptatum neque quos officia adipisci
        deleniti magnam expedita vero, placeat, sed at illum inventore iste cupiditate veniam!
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus ipsum laboriosam provident perspiciatis voluptatum neque quos officia adipisci
        deleniti magnam expedita vero, placeat, sed at illum inventore iste cupiditate veniam!
      </p>
    </div>
  )
}
