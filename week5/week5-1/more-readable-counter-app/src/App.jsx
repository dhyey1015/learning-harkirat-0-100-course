import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  
  return (
    <div>
     <CustomButton count= {count} setCount = {setCount}/>
    </div>
  )
}

function CustomButton(props){
  function onClickHandler(){
    props.setCount(props.count + 1)
    // const x= setCount(count + 1)
    // console.log(x); will print undefined because it does not return any thing 
  }
  return(
    <button onClick={onClickHandler}>
      Counter {props.count}
    </button>
  )

}


export default App