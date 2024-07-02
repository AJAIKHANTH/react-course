import React from 'react'
import { useState } from 'react'

export const UseEffect = () => {

    const [count,setCount]= useState(0)
  return (
    <div>
        <h3> count: {count} </h3>
        <button onClick={()=>setCount((value)=>value+1)}>+</button>
        <button onClick={()=>setCount((value)=>value-1)}>-</button>

    </div>
  )
}
