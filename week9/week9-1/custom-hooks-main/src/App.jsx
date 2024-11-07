import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'
import axios from "axios"
import FetchDataHook from './components/FetchDataHook'
import IsOnlineHook from './components/IsOnlinehook'
import { MouseTracerHook } from './components/MousePointerHook'

function App() {
  
  return(
    <div>
      <FetchDataHook/>
      <IsOnlineHook/>
      <MouseTracerHook/>
    </div>
  )
}



export default App
