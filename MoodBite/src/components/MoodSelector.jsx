import React from 'react'

const MoodSelector = ({ moods, selectMood, customMood, setCustomMood, onMoodSelect, onCustomSubmit }) => {
  return (
    <div className='max-w-6xl mx-auto'>
      <div className='grid grid-cols-3 gap-4'>
        {moods.map((mood) => (
          <button
            onClick={() => onMoodSelect(mood)}
            key={mood.id} className='bg-neutral-900 text-white p-10 rounded-3xl'>
            <div className='text-3xl mb-2'>{mood.emoji}</div>
            <div className='text-xl google-sans font-bold'>{mood.label}</div>
          </button>
        ))}

      </div>
      <form onSubmit={onCustomSubmit} className='border-t p-8 m-8'>
        <p className='font-xl google-sans'>Do You want a custom mood recipe?</p>

        <input 
        value={customMood}
        onChange={(e)=>setCustomMood(e.target.value)}
        className='p-4 w-full rounded-full my-2 bg-neutral-100'
        type='text' placeholder='Enter your custom mood'></input>
        
        <button type='submit' className='px-4 py-2 bg-neutral-900 text-white text-lg rounded-full'>Get Recipe</button>
      </form>
    </div>
  )
}

export default MoodSelector