import React, { useEffect, useState } from 'react'

function UseEffect() {
    const [count1,setCount1]=useState(0)
    const [count5,setCount5]=useState(5)
    useEffect(()=>{
        console.log("useEffect run")
    }
    )
  return (
    <div>
      <h1>{count1},{count5}</h1>
      <button onClick={()=>setCount1(count1+1)}>Count by 1</button>
      <button onClick={()=>setCount5(count5+5)}>Count by 5</button>
    </div>
  )
}
export default UseEffect
