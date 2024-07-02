import React from 'react'
import { useState } from 'react';

export const Handle = () => {
    
const [name,setName]=useState("spend")

function handleNameChange() {
  const names= ["give","take","earn"];
  const int = Math.floor(Math.random()*3);
  setName(names[int])    
} 
  
  return (
    <main>
        {/* {} here it is used to represent it as javascript method */}
        <p>lets {name} money</p> 
       <button onClick={handleNameChange}>subscribe</button>
    </main>
  )
}
