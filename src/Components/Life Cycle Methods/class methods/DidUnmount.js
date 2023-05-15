import React, { useState } from 'react'
import ComponentDidUnmount from './ComponentDidUnmount'

function DidUnmount() {
    const [data,setData]=useState(true)
  return (
    <div>
      {data?<ComponentDidUnmount/>:<></>}
      <button onClick={()=>setData(!data)}>click me</button>
    </div>
  )
}

export default DidUnmount
