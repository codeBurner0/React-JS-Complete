import React, { Children } from 'react'

function App({children}) {
  return (
    <div>
      <h1>{children}</h1>
      <h2>Hello</h2>
      
    </div>
  )
}

export default App
