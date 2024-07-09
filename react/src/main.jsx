import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import "./components/Todo/todos.css"
import "./components/Todo/Todos.jsx"
import App from "./App"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
