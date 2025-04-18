import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProfileList from './components/ProfileList'

const profileData = [{
    name: "이주찬",
    age: 26,
    isOnline: true
},{
  name: "전진영",
  age: 25,
  isOnline: false
},{
  name: "황인태",
  age: 26,
  isOnline: false
},{
  name: "김현아",
  age: 24,
  isOnline: true
},]

function App() {
  

  return (
    <>
      <ProfileList profile={profileData}/>
    </>
  )
}

export default App
