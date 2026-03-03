import React from 'react'

const child = (props) => {
  return (
    <div>
      <h1>Name:{props.name}</h1>
      <h2>Age:{props.age}</h2>
      <h3>Active Status:{props.isActive ? "Active" : "Not Active"}</h3>
    </div>
  )
}

export default child
