import React from 'react'

const Header = ({onChangeApiKey}) => {
    return (
        <div className='bg-neutral-500 flex items-center justify-center'>
            <div className='mx-auto max-w-6xl p-8 flex justify-between w-full'>
                <p className='text-white text-2xl font-sans font-bold'>
                    MOOD BITE
                </p>
                <button 
                onClick={onChangeApiKey}
                className='text-white px-4 py-2 bg-black rounded-full text-sm'>
                    Change API key
                </button>
            </div>

        </div>
    )
}

export default Header