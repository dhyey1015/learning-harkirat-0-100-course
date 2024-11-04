import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RevenueCard } from './components/RevenueCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='grid grid-cols-4'>
      <RevenueCard title={"Amount Pending"} orderCount={true} amount={"9,92,345.20"} count={14}/>
    </div>
  )
}

export default App
