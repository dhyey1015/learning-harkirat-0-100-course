import React, { Suspense, useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'; // Add this line
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
const Dashboard = React.lazy(() => import ('./components/Dashboard'));
const Landing = React.lazy(() => import ('./components/Landing'));
// import Landing from './components/Landing'

function App() {
    
  return (
    <BrowserRouter>
      <Appbar/>
      <Routes>
        <Route path='/dashboard' element={<Suspense fallback={"loading..."}><Dashboard/></Suspense>} />
        <Route path='/' element={<Suspense fallback={"loading..."}><Landing/></Suspense>} />
      </Routes>
    </BrowserRouter>
  );
}

function Appbar(){

  const navigate = useNavigate();
   
  return(
    <div>
      <div>
        <button onClick={()=> {
            navigate("/")
        }} >
          Landing
        </button>
        <button onClick={()=> {
          navigate("/Dashboard")
        }} >
          Dashboard
        </button>
      </div>
    </div>
  )
}

export default App;

