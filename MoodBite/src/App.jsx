import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/Header'
import ApiSetUp from './components/ApiSetUp'
import HeroText from './components/HeroText'
import MoodSelector from './components/MoodSelector'

function App() {
  const [showApiKey, setShowApiKey] = useState(true)
  const [apiKeyInput, setApiKeyInput] = useState('')
  const [apikey, setApiKey] = useState("")
  const [selectedMood,setSelectedMood]=useState(null)
  const [customMood,setCustomMood]=useState("")


  const MOODS = [
    { id: "happy", emoji: "😄", label: "Happy", color: "from-yellow-400 to-orange-400", bg: "bg-yellow-50", border: "border-yellow-300" },
    { id: "cozy", emoji: "🧸", label: "Cozy", color: "from-amber-400 to-brown-400", bg: "bg-amber-50", border: "border-amber-300" },
    { id: "adventurous", emoji: "🌍", label: "Adventurous", color: "from-green-400 to-teal-500", bg: "bg-green-50", border: "border-green-300" },
    { id: "romantic", emoji: "💕", label: "Romantic", color: "from-pink-400 to-rose-500", bg: "bg-pink-50", border: "border-pink-300" },
    { id: "stressed", emoji: "😤", label: "Stressed", color: "from-purple-400 to-indigo-500", bg: "bg-purple-50", border: "border-purple-300" },
    { id: "sad", emoji: "😔", label: "Sad", color: "from-blue-400 to-cyan-500", bg: "bg-blue-50", border: "border-blue-300" },
    { id: "energetic", emoji: "⚡", label: "Energetic", color: "from-red-400 to-orange-500", bg: "bg-red-50", border: "border-red-300" },
    { id: "lazy", emoji: "🛋️", label: "Lazy", color: "from-slate-400 to-gray-500", bg: "bg-slate-50", border: "border-slate-300" },
  ];

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

  const fetchRecipe=async(moodLabel)=>{
    
    const prompt=`Your are a creative culinary expert, Based on someone feeling ${moodLabel}. right now suggest 2 recipe ideas that match their mood.
    
    for each recipe, return a JSON object with:
    - name : string(creative recipe with nepali background)
    - emoji : string (1 fitting emoji)
    - description: string (1-2 sentences about why this recipe fits the mood)
    - difficulty : string("Easy","Medium","Hard")
    - cookTime: string (eg:10mins)
    - ingredients: array of strings(5-6 main ingredients to make the dish)
    - steps : array of strings (5-7 clear cooking steps)

    Return only a valid JSON array of 2 recipes , no markdown , no extra text
    `
    try {
      const response=await fetch("")
    } catch (error) {
      console.log(error)
    }
  }


  const handleMoodSelect=(mood)=>{
    // this function is used to select the mood from the MOOD json data
    setSelectedMood(mood)
    setCustomMood("") //if by mistake any thing is typed in input box then it will be empty 
    console.log(mood.label)

    //TODO : fetch function
  }

  //shrexhes
  const handleCustomMoodSubmit=(e)=>{
    e.preventDefault()
    if(customMood){
      setCustomMood({id:"custom",emoji:"custom",label:customMood})

      //TODO : fetch function
    }
  }

  if (showApiKey) {
    return (
      <ApiSetUp apiKeyInput={apiKeyInput} setApiKeyInput={setApiKeyInput} onSubmit={handleApiKeySubmit} />
    )
  }


  return (
    <>
      <Header onChangeApiKey={() => { setShowApiKey(true); setApiKeyInput("") }} />
      <HeroText />
      <MoodSelector moods={MOODS} onMoodSelect={handleMoodSelect} customMood={customMood} setCustomMood={setCustomMood} onCustomSubmit={handleCustomMoodSubmit}  />
    </>
  )
}

export default App
