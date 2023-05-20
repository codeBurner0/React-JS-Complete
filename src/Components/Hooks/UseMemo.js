import React, { useMemo, useState } from 'react'

function UseMemo() {
    const [count,setCount]=useState(0);
    const [item,setItem]=useState(1);
    const fun=useMemo(function Clicker(){
        console.log("render")
        return count*10;
        
    },[count])
  return (
    <div>
      <h1>{count}</h1>
      <h1>{item}</h1>
      <button onClick={()=>setCount(count+1)}>Click Count</button>
      <button onClick={()=>setItem(item*10)}>Click Item</button>
      <h1>{fun}</h1>
    </div>
  )
}

export default UseMemo
