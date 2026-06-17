import React from 'react'

const Header = ({onChangeApiKey}) => {
    return (
        <div className='bg-neutral-900 flex items-center justify-center'>
            <div className='mx-auto max-w-6xl p-8 flex justify-between w-full'>
                <p className='text-white text-2xl google-sans font-light'>
                    MOOD BITE
                </p>
                <button 
                onClick={onChangeApiKey}
                className='text-black px-4 py-2 bg-neutral-200 rounded-full text-sm'>
                    Change API key
                </button>
            </div>

        </div>
    )
}

export default Header