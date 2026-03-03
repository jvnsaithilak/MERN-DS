import React from 'react'
import Child from './Child'

const Parent = () => {
  return (
    <div>
      <Child name="sai" age={20} isActive={true}/>
    </div>
  )
}

export default Parent 
