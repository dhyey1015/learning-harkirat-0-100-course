import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [title, setTitle] = useState("my name is Dhyey")

  function updateTitle(){
    setTitle("my name is " + Math.random())
  }
  return (
    <div>
        <button onClick={updateTitle}>Update the title</button>
        <Headers title = {title}></Headers>
        <Headers title = "Dhyey"></Headers>
        <Headers title = "Dhyey"></Headers>
        <Headers title = "Dhyey"></Headers>
        <Headers title = "Dhyey"></Headers>
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
