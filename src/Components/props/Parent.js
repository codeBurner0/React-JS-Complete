import React,{useState} from 'react'
import Child from './Child'

function Parent() {
    const [count,setCount]=useState(1);

    function Alert(){
        setCount(count+1);
    }

    function handleClick(){
      console.log("HEllO WORLD")
    }
  return (
    <div>
      <Child Alert={Alert} count={count}/>
    </div>
  )
}

export default Parent
