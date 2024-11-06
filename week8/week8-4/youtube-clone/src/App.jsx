import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { VideoGrid } from './components/VideoGrid'
import { Appbar } from './components/Appbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <VideoGrid/>
    </div>
  )
}

export default App
