import React, { useState } from "react"

/* 
    hooks: functions having use 

    function useState(initalValue){
        // code ...


        return [initialValue,mutatorFunction]
    }

*/

export default function Counter() {
  //   let value = 100 //normal variable cant trigger re render
  const [value, setValue] = useState(100)
  function increment() {
    setValue(value + 1)
    console.log(value)
    // value++
  }

  function decrement() {
    setValue(value - 1)
    console.log(value)

    // value++
  }
  console.log("Re-Render")
  return (
    <div>
      <h1>Counter:{value}</h1>

      <button className="count" onClick={increment}>
        Increment
      </button>
      <button className="count" onClick={decrement}>
        Decrement
      </button>
    </div>
  )
}
