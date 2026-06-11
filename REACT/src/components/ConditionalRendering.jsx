import React, { useState } from 'react'

const ConditionalRendering = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true)
    const [hasNotification,setHasNotification]=useState(true)
    return (
        <div>
            COnditional Rendering has two types
            1. Ternary Operator
            2. Short Circuit Evaluation

            1. Ternery Operator (if-else)
            <br />
            {isLoggedIn ? "Welcome USER" : "Get out"}
            <button
                onClick={() => setIsLoggedIn(!isLoggedIn)}
                className='bg-red-300 px-4 py-2 rounded-full'>{isLoggedIn ? "Logout" : "login"}</button>


            SHORT CIRCUIT EVAL
            <p className='text-lg text-blue-400'>{hasNotification && "you have notification man "}</p>

        </div>
    )
}

export default ConditionalRendering