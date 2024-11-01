import { useState } from 'react'
import './App.css'
import { CountContext } from './Context'
import { useContext } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <CountContext.Provider value={{count, setCount}}>
        <Count setCount={setCount} />
      </CountContext.Provider>
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

function CountRenderer(){
  const count = useContext(CountContext);
  return (
    <div>
      {count}
    </div>
  )
}

function Buttons(){
  const {count, setCount} = useContext(CountContext);
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
