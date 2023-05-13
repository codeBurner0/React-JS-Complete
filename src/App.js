import React, { Children } from 'react'
import CounterClass from './Components/CounterClass'
function App({children}) {
  return (
    <div>
      <h1>{children}</h1>
      <h2>Hello</h2>
      <CounterClass/>
    </div>
  )
}

export default App
