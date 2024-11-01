import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Count count={count} setCount={setCount} />
    </div>
  )
}

function Count({ setCount }){

  return(
    <div style={{ fontSize:"40px"}}>
      <CountRenderer />
      <Buttons setCount={setCount} />
    </div>
  )
}

function CountRenderer({count}){
  const count = 1;
  return (
    <div>
      {count}
    </div>
  )
}

function Buttons({count, setCount}){
  const count = 1;
  return(
    <div>
      <button style={{ fontSize:"40px"}} onClick={function(){
        setCount(count + 1)
      }}>Increase</button>
      <br />
      <br />
      <button style={{ fontSize:"40px"}} onClick={function(){
        setCount(count - 1)
      }}>Decrease</button>
    </div>
    
  )
}

export default App
