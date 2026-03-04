import React from 'react'
import Child from './Child'

const Parent = () => {
  return (
    <div>
      <Child name="sai" age={20} isActive={true} food={["curd" , "rice"]}
      contact={{
        mobile:987654321,
        email:"sai@gmail.com"
      }}/>
      <Child name="sai" age={20} isActive={true} food={["curd" , "rice"]}
      contact={{
        mobile:987654321,
        email:"sai@gmail.com"
      }}/>
    </div>
  )
}

export default Parent 
