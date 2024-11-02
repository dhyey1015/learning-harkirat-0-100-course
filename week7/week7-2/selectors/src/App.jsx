import { useState } from 'react'
import './App.css'
import { useRecoilState, useRecoilValue, RecoilRoot, useRecoilState_TRANSITION_SUPPORT_UNSTABLE, useSetRecoilState } from 'recoil'
import { countAtom } from './store/atoms/count'
import { evenSelector } from './store/selectors/count'

function App() {

  return (
    <div> 
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  )
}

function Count(){

  console.log("re-render count")
  return(
    <div style={{ fontSize:"40px"}}>
      <CountRenderer />
      <Buttons />
    </div>
  )
}

function CountRenderer(){
  const count = useRecoilValue(countAtom)
  return (
    <div>
      {count}
      <EvenCountRenderer/>
    </div>
  )
}

function EvenCountRenderer(){
  const isEven = useRecoilValue(evenSelector);
  return(
    <div>
      {(isEven % 2 == 0)? "It is Even" : ""}
    </div>
  )
}

function Buttons(){
  const  setCount = useSetRecoilState(countAtom)
  console.log("re-render buttons")
  return(
    <div>
      <button style={{ fontSize:"40px"}} onClick={function(){
        setCount(function(count){
          return count + 1
        })
      }}>Increase</button>
      <br />
      <br />
      <button style={{ fontSize:"40px"}} onClick={function(){
        setCount(function(count){
          return count + 1
        })
      }}>Decrease</button>
    </div>
    
  )
}

export default App
