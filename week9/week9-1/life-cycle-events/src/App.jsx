import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { LifeCycleFunction } from './components/LifeCycleFunction'
import { LifeCycleClass } from './components/LifeCycleClass'

function App() {
  const [render, setRender] = useState(true)

  useEffect(function(){
    setInterval(function(){
      return setRender(r => !r)
    }, 5000)
  }, [])

  return (
    <div>
      {render ? <LifeCycleFunction/> : <div> NOT form Life cycle Function component</div>}
      {render ? <LifeCycleClass/> : <div> NOT form Life cycle Class component</div>}
    </div>
  )
}

export default App
