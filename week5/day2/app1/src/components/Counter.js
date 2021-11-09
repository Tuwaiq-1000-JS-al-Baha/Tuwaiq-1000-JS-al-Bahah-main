import { useState } from "react"

function Counter() {
  //   let number = 0
  const [number, setNumber] = useState(0)
  const [message, setMessage] = useState("")

  const increment = () => {
    console.log("increment")
    setNumber(number + 1)
    setMessage("")
    console.log("number:", number)
  }

  const decrement = () => {
    if (number > 0) {
      setNumber(number - 1)
    } else {
      setMessage("stop")
    }
  }

  return (
    <>
      <h1>Counter</h1>
      <p>{number}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <div>{message}</div>
    </>
  )
}

export default Counter
