import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'
import { memo } from 'react'
import { useMemo } from 'react'

function App() {
  const [exchnage1Data, setExchnage1Data] = useState({})
  const [exchnage2Data, setExchnage2Data] = useState({})
  const [bankData, setBankData] = useState({})
  
  useEffect(function (){
    setTimeout(function(){
      setBankData({
        income: 100
      });
    }, 5000);
  },[])

  useEffect(function(){
      setExchnage1Data({
        returns: 100
      });
    },[])
    useEffect(function(){
      setExchnage2Data({
        returns: 100
      });
    },[])

    
  

  const cryptoReturns = useMemo(function(){
    console.log("hi there before") // see inspect and console to see whats happening
    return exchnage1Data.returns + exchnage2Data.returns;
  }, [exchnage1Data, exchnage2Data]);


  const incomeTax = (bankData.income + cryptoReturns) * 0.3
  return (
    <div>
      hi, there  your income tax returns are {incomeTax}
    </div>
  )
}

export default App

