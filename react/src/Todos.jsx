import React from "react"

let todos = [
  {
    title: "HTML",
    status: true,
  },
  {
    title: "CSS",
    status: true,
  },
  {
    title: "JS",
    status: true,
  },
  {
    title: "NODE.JS",
    status: true,
  },
  {
    title: "REACT",
    status: false,
  },
  {
    title: "MONOGODB",
    status: false,
  },
  {
    title: "EXPRESS.JS",
    status: false,
  },
]

export default function Todo() {
  return (
    <div>
      <h1>TODO-LIST</h1>
      <table>
        <thead>
          <tr>
            <th>TITLE</th>
            <th>STATUS</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, index) => (
            <tr key={index}>
              <td>{todo.title}</td>
              <td>{todo.status ? "✅" : "❌"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
