import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'


function App() {
  const [count, setCount] = useState(0)

  useEffect(function(){
    alert("hi")
  })

  return (
    <div>
      <CardWrapper >
      <CardWrapper >
        <div>
          hi there!!
        </div>
      </CardWrapper>
      </CardWrapper>
      <CardWrapper >
        <div>
          hi there!!
        </div>
      </CardWrapper>
    </div> 
  )
}

function CardWrapper({children}){
  return( 
  <div style={{border: "2px solid black", padding: 20, margin: 20}}>
    {children}
  </div>
  )
}

// function TextComponent(){
//   return(
//     <div>
//       hi there!!
//     </div>
//   )
// }


export default App
