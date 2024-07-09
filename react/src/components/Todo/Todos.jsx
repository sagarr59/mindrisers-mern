import React from "react"

let todos = [
  {
    title: "HTML",
    status: true,
    user: "Sagar",
  },
  {
    title: "CSS",
    status: true,
    user: "Sagar",
  },
  {
    title: "JS",
    status: true,
    user: "Sagar",
  },
  {
    title: "NODE.JS",
    status: true,
    user: "Sagar",
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

// windows + . = Emoji

export default function Todo() {
  return (
    <>
      <div>
        <h1>TODO-LIST</h1>
        <table>
          <thead>
            <tr>
              <th>TITLE</th>
              <th>STATUS</th>
              <th>USERS</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo, index) => (
              <tr key={index}>
                <td>
                  {todo.title} {todo.user ? `(${todo.user})` : ""}
                </td>
                {/* conditional rendering */}
                <td>{todo.status ? "✅" : "❌"}</td>
                <td>{todo.user ? <span> {todo.user}</span> : <span> -</span>}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
