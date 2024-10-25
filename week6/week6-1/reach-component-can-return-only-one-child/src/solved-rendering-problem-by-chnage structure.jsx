import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div>
        <HeaderWithButton/>
        <Headers title = "Dhyey"></Headers>
        <Headers title = "Dhyey"></Headers>
        <Headers title = "Dhyey"></Headers>
        <Headers title = "Dhyey"></Headers>
    </div>
  )
}

function HeaderWithButton(){
    const [title, setTitle] = useState("myname is dhyey")

    function updateTitle(){
        setTitle("my name is " + Math.random())
    }
    return(
        <div>
            <button onClick={updateTitle}>click to update title</button>
            <Headers title={title}></Headers>
        </div>
    )
}

function Headers({title}){
  return (
    <div>
      {title}
    </div>
  )
}

export default App
