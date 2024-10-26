//idk why this works and mine dosent't
import { useCallback, useState, useEffect, memo, useMemo } from 'react'
import './App.css'

// Memoize the Child component
const Child = memo(function Child({calculateCryptoReturns}) {
  console.log("child re rendered");
  
  return (
    <div>
      Your crypto returns are {calculateCryptoReturns()}
      <p>something</p>
      <p>something</p>
      <p>something</p>
      <p>something</p>
    </div>
  );
});

function App() {
  const [exchange1Data, setExchange1Data] = useState({});
  const [exchange2Data, setExchange2Data] = useState({});
  const [bankData, setBankData] = useState({});

  useEffect(() => {
    setTimeout(() => {
      setBankData({ income: 100 });
    }, 5000);
  }, []);

  useEffect(() => {
    setExchange1Data({ returns: 100 });
  }, []);

  useEffect(() => {
    setExchange2Data({ returns: 100 });
  }, []);

  const calculateCryptoReturns = useCallback(() => {
    return exchange1Data.returns + exchange2Data.returns;
  }, [exchange1Data, exchange2Data]);

  const incomeTax = useMemo(() => {
    return (bankData.income + calculateCryptoReturns()) * 0.3;
  }, [bankData.income, calculateCryptoReturns]);

  return (
    <div>
      <Child calculateCryptoReturns={calculateCryptoReturns} />
      hi, there your income tax returns are {incomeTax}
    </div>
  );
}

export default App;