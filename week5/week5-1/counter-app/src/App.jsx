import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function onClickHandler(){
    setCount(count + 1)
    // const x= setCount(count + 1)
    // console.log(x); will print undefined because it does not return any thing 
  }
  return (
    <div>
     <button onClick={onClickHandler} >Counter {count}</button>
    </div>
  )
}


export default App