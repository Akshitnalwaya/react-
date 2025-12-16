import React,{ useState } from 'react'

const App = () => {
  const [counter, setCounter] = useState(0)

  function handleClick() {
    if (counter >= 10) {
      window.alert("Max value reached")
    } else {
      setCounter(counter + 1)
    }
  }

  function handleClickDecrement() {
    if (counter <= 0) {
      window.alert("Min value reached")
    } else {
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <h1>Counter value : {counter}</h1>
      <button onClick={handleClick}>Increment</button>
      <button onClick={handleClickDecrement}>Decrement</button>
    </>
  )
}

export default App
