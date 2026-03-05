import React from 'react'
import Child from './Child'

const Parent = ({message}) => {
  return (
    <div>
      <button onClick={()=>{message("Message from Parent")}}>send</button>
      <Child name="sai" age={20} isActive={true} food={["curd" , "rice"]}
      contact={{
        mobile:987654321,
        email:"sai@gmail.com"
      }}
      sendMessage={message}
      />
      <Child name="sai" age={20} isActive={true} food={["curd" , "rice"]}
      contact={{
        mobile:987654321,
        email:"sai@gmail.com"
      }}
      sendMessage={message}/>
    </div>
  )
}

export default Parent 
