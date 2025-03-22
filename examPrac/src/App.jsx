import { useState } from 'react'




function App(props) {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1> my name is {props.name}</h1>
    </>
  )
}

export default App
