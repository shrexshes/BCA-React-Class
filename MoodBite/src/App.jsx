import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/Header'
import ApiSetUp from './components/ApiSetUp'

function App() {
  const [showApiKey, setShowApiKey] = useState(true)
  const [apiKeyInput, setApiKeyInput] = useState('')
  const [apikey, setApiKey] = useState("")

  //save to localstorage
  useEffect(() => {
    if (apikey) {
      localStorage.setItem("apiKey", apikey)
    }
  }, [apikey])

  const handleApiKeySubmit = (e) => {
    e.preventDefault()
    if (apiKeyInput) {
      setApiKey(apiKeyInput)
      setShowApiKey(false)
    }
  }

  console.log(apiKeyInput)

  if (showApiKey) {
    return (
      <ApiSetUp apiKeyInput={apiKeyInput} setApiKeyInput={setApiKeyInput} onSubmit={handleApiKeySubmit} />
    )
  }


  return (
    <>
      <Header onChangeApiKey={()=>{setShowApiKey(true); setApiKeyInput("")}} />
    </>
  )
}

export default App
