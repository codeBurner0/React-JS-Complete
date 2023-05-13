import React, { Children } from 'react'
import CounterClass from './Components/CounterClass'
import GetInputBoxValue from './Components/GetInputBoxValue'
function App({children}) {
  return (
    <div>
      <GetInputBoxValue/>
    </div>
  )
}

export default App
