import React from 'react'
function User({name,email}) {
  return (
    <div>
      <h1>{name}</h1>
      <h3>{email}</h3>
    </div>
  )
}

export default User
// It is a high order function