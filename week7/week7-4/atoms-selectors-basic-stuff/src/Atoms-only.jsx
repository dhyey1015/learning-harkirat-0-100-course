import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import './App.css'
import { jobsAtom, messagingAtom, networkAtom, notificationsAtom } from './store/atoms/atoms'

function App() {

  return (
    <RecoilRoot>
      <MainApp/>
    </RecoilRoot>
  )
}

function MainApp(){

  const networkAtomCount = useRecoilValue(networkAtom)
  const jobsAtomCount = useRecoilValue(jobsAtom)
  const notificationAtomCount = useRecoilValue(notificationsAtom)
  const messagingAtomCount = useRecoilValue(messagingAtom)

  return(
    <div >
      <button style={{fontSize:"40px"}}>Home</button>
      <br />
      <br />
      <button style={{fontSize:"40px"}}>My Network ({networkAtomCount >= 100 ? "99+" : networkAtomCount})</button>
      <br />
      <br />
      <button style={{fontSize:"40px"}}>Jobs ({jobsAtomCount})</button>
      <br />
      <br />      
      <button style={{fontSize:"40px"}}>Messaging ({messagingAtomCount})</button>
      <br />
      <br />
      <button style={{fontSize:"40px"}}>Notifications ({notificationAtomCount})</button>
      <br />  
      <br />
      <ButtonUpdater/>
    </div>
  )
}

function ButtonUpdater(){
  const setMessagingAtomCount = useSetRecoilState(messagingAtom)
  return(
    <div>
      <button onClick={()=>{
        setMessagingAtomCount(count => count + 1)    
      }}style={{fontSize:"40px"}}>Me</button>
    </div>
  )
}

export default App
