import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'
import axios from "axios"
import { FetchDataHook } from './components/FetchDataHook'

function App() {
  
  return(
    <div>
      <FetchDataHook/>
    </div>
  )
}



export default App
