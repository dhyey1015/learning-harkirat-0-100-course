import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [exchnageData, setExchnageData] = useState({})
  const [bankData, setBankData] = useState({})
  console.log("hi there a re-render happened") //check inspect then log to too see whats happening

  // fetch("https://google.com")
  //   .then(async function (res) {
  //     let data = await res.json()
  //     data = {income: 100}
  //     setBankData(data)
  //     //assume  it is {income: 100}
  //   });
  useEffect(function (){
    setTimeout(function(){
      setBankData({
        income: 100
      });
    }, 3000);
  },[])

  useEffect(function (){
    setTimeout(function(){
      setExchnageData({
        returns: 100
      });
    }, 1000);
  },[])
  
  const incomeTax = (bankData.income + exchnageData.returns) * 0.3

  return (
    <div>
      hi, there  your income tax returns are {incomeTax}
    </div>
  )
}

export default App
