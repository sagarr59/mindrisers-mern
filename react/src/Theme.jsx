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
      {/* dynamic class name */}
      <h1>Theme Change</h1>
      <h2>Current Theme: {theme}</h2>

      {theme == "dark" ? (
        <button className="btn" onClick={lightMode}>
          Light Theme
        </button>
      ) : (
        <button className="btn" onClick={darkMode}>
          Dark Theme
        </button>
      )}
      <h3>AAA</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero voluptate odio quisquam sit a dolorem asperiores rem sequi, et ducimus delectus mollitia
        deleniti consequuntur recusandae quis eius aperiam suscipit sunt, itaque vel! Ab dolore, dignissimos hic nemo animi consequuntur quae voluptate harum?
        Quaerat sapiente quo earum harum ducimus reprehenderit vel explicabo nisi officia totam, similique mollitia eaque eveniet quos reiciendis sit magni ex
        cumque, vitae laudantium iusto quasi expedita hic aspernatur? Obcaecati in ut voluptatibus, provident culpa reprehenderit voluptas vitae aliquid nulla
        debitis libero. Laudantium delectus nisi amet quibusdam. A sunt odio, suscipit minima unde quas? Similique consequatur harum quidem ipsum sunt magnam,
        iure blanditiis odit mollitia numquam sit! Ipsum pariatur, temporibus fuga nesciunt odio suscipit optio exercitationem corporis recusandae accusantium
        cupiditate nemo dignissimos dolor officiis quod, ad laboriosam assumenda aliquid vel. Iusto ad temporibus necessitatibus enim. Impedit quia suscipit
        debitis eligendi cumque totam provident quo minus. Tempore, pariatur est.
      </p>
      <h3>BBB</h3>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus saepe quisquam nam minima vero blanditiis repudiandae ut illum pariatur similique
        debitis iste accusantium quia explicabo dignissimos itaque ullam at repellendus iusto molestias, facere autem tempore! Voluptate minus sit consectetur
        sequi. Tempora labore doloribus quis ab adipisci nisi voluptatum aliquam ad unde, placeat ullam excepturi ducimus a perferendis laborum in eaque
        delectus maxime sed sunt sapiente consequatur blanditiis. Ad quo ea asperiores, voluptate quos natus perspiciatis id laborum sunt tempora quia?
        Obcaecati quae ipsa, mollitia vitae explicabo odit ut fuga corrupti?
      </p>
    </div>
  )
}
