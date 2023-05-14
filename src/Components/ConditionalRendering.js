import React from 'react'

function ConditionalRendering() {
    const login=0;
  return (
    <div>
      {(login===1)?<h1>User 1 Logged in</h1>:(login===2)?<h1>User 2 Logged in</h1>:<h1>User 3 Logged in</h1>}
    </div>
  )
}

export default ConditionalRendering
