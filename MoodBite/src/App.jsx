import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/Header'
import ApiSetUp from './components/ApiSetUp'

function App() {
  const [showApiKey,setShowApiKey]=useState(false)

  if(showApiKey){
    return(
      <ApiSetUp/>
    )
  }
  return (
    <>
    <Header/>
    </>
  )
}

export default App
