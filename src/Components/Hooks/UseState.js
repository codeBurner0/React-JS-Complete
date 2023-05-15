import React,{useState} from 'react'

function UseState() {
    const [data,setData]=useState(0)
    return (
      <div>
        <h1>{data}</h1>
        <button onClick={()=>setData(data+1)}>click me</button>
      </div>
    )
  }

export default UseState
