import React, { useEffect, useState } from 'react'

const UseEffectExample = () => {
    const [showName, setShowName] = useState(false)
    const [datas,setData]=useState([])
    useEffect(()=>{
        console.log("AYUSH")
    },[showName])

    useEffect(()=>{
        const dataFetch=async()=>{
            const response=await fetch("https://jsonplaceholder.typicode.com/todos")
            const results=await response.json()
            setData(results)
        }
        dataFetch()
    },[])
    console.log(datas)
    return (
        <div>
            UseEffect In simple term means Do this when things happen or do this action when something happens

            SYNTAX:
            useEffect(effect,[dependencies])

            this hook perform side effect in function components. SIde effect are operations that interact with the outside world like fetching data ,setting up subscription etc
            <br/>
            <button
                className='bg-purple-400 px-4 py-2'
                onClick={() => setShowName(!showName)}
            >SHOW NAME</button>

            <p>{showName ? "showing name ayush" : "no name sorry"}</p>

            {datas.map((item)=>(
                <p className='bg-amber-200'>{item.title}</p>
            ))}
        </div>
    )
}

export default UseEffectExample