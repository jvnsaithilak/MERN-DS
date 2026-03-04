import React from 'react'

const child = ({name,age,isActive,food,contact}) => {
  return (
    <div>
      <h1>Name:{name}</h1>
      <h2>Age:{age}</h2>
      <h3>Active Status:{isActive ? "Active" : "Not Active"}</h3>
      <br />
      <hr />
      <h1>Fav food</h1>
      <ul>
        {food.map((value,index)=>(
          <li key={index}>{value}</li>
        ))}
      </ul>
      <br />
      <hr />
      <h1>Contact</h1>
      <p>Mobile no:{contact.mobile}</p>
      <p>Email : {contact.email}</p>
    </div>
  )
}

export default child
