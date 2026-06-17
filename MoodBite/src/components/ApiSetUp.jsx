import React from 'react'

const ApiSetUp = ({apiKeyInput,setApiKeyInput,onSubmit}) => {
    return (
        <div className='min-h-screen bg-neutral-900 text-white flex items-center justify-center p-4'>
            <div className='w-full text-center'>
                <h1 className='text-4xl font-bold  mb-2 tracking-tighter google-sans'>MoodBite</h1>
                <p className='text-white text-2xl'>AI powered recipes for every feelings</p>

                <div className='mt-5 sm:mt-10 md:mt-40 p-10 bg-neutral-500 max-w-md mx-auto rounded-2xl'>
                    <p className='text-lg google-sans'>Enter Your Gemini Key</p>
                    <p>Get your free key at </p>
                    <a className='text-blue-200 underline' href="https://aistudio.google.com/app/apikey" target='_blank'> aistudio.google.com</a>

                    <form onSubmit={onSubmit} className='mt-10 flex flex-col item-center'>
                        <input
                         className='bg-white google-sans rounded-full text-black px-4 py-2' type='password'
                         value={apiKeyInput}
                         onChange={(e)=> setApiKeyInput(e.target.value)}
                         placeholder='enter your api key '
                         ></input>

                         <button type='submit' className='px-4 w-fit mt-4 py-2 ml-2 google-sans bg-orange-500 rounded-full'>Start Cooking </button>
                    </form>
                </div>


            </div>
        </div>
    )
}

export default ApiSetUp