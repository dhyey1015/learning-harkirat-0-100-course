import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div style={{display:'flex', justifyContent: "space-around"}}>
          <div style={{background: "red"}}>
            i am div 1
          </div>
          <div style={{background: "blue"}}>
            i am div 2
          </div>
          <div style={{background: "green"}}>
            i am div 3
          </div>
      </div>
      <p>flex class tailwind</p>
      <div className='flex justify-center'>
        <div className='bg-red-500'>
          i am div 1
        </div>
        <div className="bg-blue-500">
          i am div 2
        </div>
        <div className="bg-green-500">
          i am div 3
        </div>
      </div>
      <p>grid class tailwind</p>
      <div className='grid grid-cols-10'>
        <div className='bg-red-500 col-span-4'>
          i am div 1
        </div>
        <div className="bg-blue-500 col-span-4">
          i am div 2
        </div>
        <div className="bg-green-500 col-span-2">
          i am div 3
        </div>  
      </div>
      <p>Responsiveness</p>
      <div className='bg-yellow-500 md:bg-black'>
        i am div 1
      </div>
      <br />
      <p>task</p>
      <div className='grid grid-cols-1 md:grid-cols-10'>
        <div className='bg-red-500 col-span-4'>
          i am div 1
        </div>
        <div className="bg-blue-500 col-span-4">
          i am div 2
        </div>
        <div className="bg-green-500 col-span-2">
          i am div 3
        </div>
      </div>
      <p>text color</p>
      <div className='text-red-500'>
       i am div 1
      </div>
      <p>text-size</p>
      <div className='text-xs'>
       i am div 1
      </div>
      <div className='text-sm'>
       i am div 1
      </div>
      <div className='text-base'>
       i am div 1
      </div>
      <div className='text-lg'>
       i am div 1
      </div>
      <p>border radius</p>
      <div className='bg color-red-500 rounded-s-sm '>
          something
      </div>
    </div>
  )
}

export default App
