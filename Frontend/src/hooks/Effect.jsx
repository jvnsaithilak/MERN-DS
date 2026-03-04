import React, { useEffect, useState } from 'react'

const Effect = () => {
    const [count,setCount]= useState(0);
    const [value,setValue]= useState(0);
    // Systex
    // useEffect(callback Function,[dependence array(optional)]);
    // useEffect(()=>{
    //     // statement  
    // },[dependence]);

    
    useEffect(()=>{
        console.log("useEffect Mounted")
    }) //Without dependence array

    // useEffect(()=>{
    //     console.log("useEffect Mounted")
    // },[]) //With Empty dependence array

    // useEffect(()=>{
    //     console.log("useEffect Mounted")
    // },[count])

    const handleIncrement =()=>{
      setCount((prev)=>prev+1);
      setCount((prev)=>prev+1);
      setCount((prev)=>prev+1);
    }
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <h1>value:{value}</h1>
      <button onClick={()=>setValue(value+1)}>++</button>
    </div>
  )
}

export default Effect
