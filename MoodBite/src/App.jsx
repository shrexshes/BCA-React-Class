import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/Header'
import ApiSetUp from './components/ApiSetUp'

function App() {
  const [showApiKey,setShowApiKey]=useState(true)
  const [apiKeyInput,setApiKeyInput]=useState('')

  const handleApiKeySubmit=(e)=>{
    e.preventDefault()
  }

  if(showApiKey){
    return(
      <ApiSetUp apiKeyInput={apiKeyInput} setApiKeyInput={setApiKeyInput} onSubmit={handleApiKeySubmit}/>
    )
  }


  useEffect(()=>{

  },[])
  return (
    <>
    <Header/>
    </>
  )
}

export default App
