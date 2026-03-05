import React, { useEffect, useRef, useState } from 'react'

const Ref = () => {
  const [count,setCount]= useState(0);
  const like= useRef(0);
  const inputRef =useRef(null);
  // Example-1
  // useEffect(()=>{
  //   console.log("component Re-rendered")
  // })
  // const handleLike=()=>{
  //   like.current = like.current+1;
  // }


  // Example-2
  // useEffect(()=>{
  //   like.current = like.current+1;
  // })

  // example-3
  const handleClick=()=>{
    inputRef.current.focus();
    inputRef.current.style.color="red";
  }
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>focus</button>

      {/* example-2
      <h1>Count:{count}</h1>
      <button onClick={()=>setCount(count+1)}>inc</button>
      <h1>like:{like.current}</h1> */}

      {/* Example-1
      <h1>Count:{count}</h1>
      <button onClick={()=>setCount(count+1)}>inc</button>
      <h1>like:{like.current}</h1>
      <button onClick={handleLike}>❤️</button> */}
    </div>
  )
}

export default Ref
