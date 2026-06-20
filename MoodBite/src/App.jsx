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
  const [selectedMood, setSelectedMood] = useState(null)
  const [customMood, setCustomMood] = useState("")
  const [recipes, setRecipes] = useState([])

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

  const fetchRecipe = async (moodLabel) => {

    const prompt = `Your are a creative culinary expert, Based on someone feeling ${moodLabel}. right now suggest 2 recipe ideas that match their mood.
    
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
      const response = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent",
        {
          method: "POST",
          headers: { "Content-Type": "application/json", "X-goog-api-key": apikey },
          body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }],
            generationConfig: { temperature: 0.9, maxOutputTokens: 8192 }
          })
        }
      )
      //error ayo bhanne
      if (!response.ok) {
        const err = await response.json()
        console.log(err)
      }

      // if success ayo bhanne
      const data = await response.json()
      console.log(data)
      const text = data.candidates[0]?.content?.parts[0].text;

      if (!text) { console.log("No response from GEMINI") }

      const cleaned = text.replace(/```json\n?/g, "").replace(/```\n?/g, "").trim()
      const parsed = JSON.parse(cleaned)
      setRecipes(parsed)
    } catch (error) {
      console.log(error)
    }
  }


  const handleMoodSelect = (mood) => {
    // this function is used to select the mood from the MOOD json data
    setSelectedMood(mood)
    setCustomMood("") //if by mistake any thing is typed in input box then it will be empty 
    console.log(mood.label)

    fetchRecipe(mood.label)
  }

  //shrexhes
  const handleCustomMoodSubmit = (e) => {
    e.preventDefault()
    if (customMood) {
      setCustomMood({ id: "custom", emoji: "custom", label: customMood })

      //TODO : fetch function
      fetchRecipe(customMood)
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
      <MoodSelector moods={MOODS} onMoodSelect={handleMoodSelect} customMood={customMood} setCustomMood={setCustomMood} onCustomSubmit={handleCustomMoodSubmit} />
      <div className='mx-auto max-w-6xl'>
        {recipes.map((recipe, index) => (
          <div className='bg-neutral-900 text-white my-10 p-8 rounded-3xl'>
            <div className='flex items-center gap-5 pb-8'>
              <p className='text-3xl'>{recipe.emoji}</p>
              <p className='text-3xl google-sans font-bold'>{recipe.name}</p>
            </div>

            <p className='text-lg font-light google-sans'>{recipe.description}</p>
            <p className='bg-white text-black rounded-full w-fit px-4 py-2 my-3'>{recipe.difficulty}</p>
            <p className='bg-white text-black w-fit px-4 py-2 rounded-full'>{recipe.cookTime}</p>

            <p className='font-bold text-lg google-sans mt-10'>Ingredients</p>
            {recipe.ingredients.map((ingredient) => (
              <div className='my-5'>
                <p className='text-sm '>{ingredient}</p>
              </div>
            ))}

            <p className='font-bold text-lg google-sans mt-10'>Steps</p>
            {recipe.steps.map((step) => (
              <p className='my-5 text-sm google-sans'>{step}</p>
            ))}
          </div>
        ))}
      </div>
    </>
  )
}

export default App
