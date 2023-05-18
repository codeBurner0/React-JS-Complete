import React from 'react'
import Child from './Child'

function Parent() {
    function Invoker(name){
        alert("Hello! "+name)
    }
  return (
    <div>
      <Child data={Invoker}/>
    </div>
  )
}

export default Parent
