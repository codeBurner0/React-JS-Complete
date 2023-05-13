import React,{useState} from 'react'

function CounterFunction() {
    const [count,setCount]=useState(0)
    function Increase(){
        setCount(count+1)
    }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>Increase()}>Increase</button>
    </div>
  )
}

export default CounterFunction
