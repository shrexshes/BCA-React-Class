import React, { useState } from 'react'

const UseStateExample = () => {
    const [count,setCount]=useState(0)
  return (
    <div>
        State Management : In react sdtate management refers to how data is handled within a component especially when that data can change over time

        USESTATE:
        Use state is a react hook that allows fucntional components to have state , it lets you add state variable to your components which can be used to store data that can change and rerender the components when updated

        SYNTAX:
        const [state,setState]=useState(initialValue)

        state: the current value of the state
        setState: A function that updates the state
        initialValue: The initial value of the state : number,string , boolean,array
<br/>
        count:{count}

        <button onClick={()=>setCount(count+1)}>Increment +</button>
        <button onClick={()=>setCount(count-1)}>Decrement -</button>
    </div>
  )
}

export default UseStateExample