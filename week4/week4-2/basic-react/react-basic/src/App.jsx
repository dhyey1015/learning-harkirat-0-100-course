import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(<div>hello</div>) //inside this the inital state of the site is defined which(current state)

  return (
    <div>      
        <button onClick={function(){
          setCount(<div>changed here</div>)//inside this change are given to usestate to chnage the state of the object (new state)
        }}>
          count is {count}
        </button>
    </div>
  )
}

export default App
