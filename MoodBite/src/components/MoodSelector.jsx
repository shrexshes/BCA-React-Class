import React from 'react'

const MoodSelector = ({ moods, selectMood, customMood, setCustomMood, onMoodSelect, onCustomSubmit }) => {
  return (
    <div className='max-w-6xl mx-auto'>
      <div className='grid grid-cols-3 gap-4'>
        {moods.map((mood) => (
          <button
            onClick={() =>}
            key={mood.id} className='bg-neutral-900 text-white p-10 rounded-3xl'>
            <div className='text-3xl mb-2'>{mood.emoji}</div>
            <div className='text-xl google-sans font-bold'>{mood.label}</div>
          </button>
        ))}
      </div>
    </div>
  )
}

export default MoodSelector