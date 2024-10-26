import { useCallback, useState } from 'react'
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

  
  const calculateCryptoReturns = useCallback(function(){
    return exchnage1Data.returns + exchnage2Data.returns;
  }, [exchnage1Data, exchnage2Data]);

  const incomeTax = (bankData.income + calculateCryptoReturns()) * 0.3
  return (
    <div>
    <Child calculateCryptoReturns = {calculateCryptoReturns}></Child>
      hi, there  your income tax returns are {incomeTax}
    </div>
  )
}

function Child({calculateCryptoReturns}){

  console.log("child re rendered")// why it is re-rendering?
  
  return (
    <div>
      Yout crypto returns are {calculateCryptoReturns()}
      <p>something</p>
      <p>something</p>
      <p>something</p>
      <p>something</p>
    </div>
  )
}

export default App

