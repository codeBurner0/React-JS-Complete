import React, { useState } from 'react'

function ComponentIntro() {
    const [count,setCount]=useState(0);

    function Alert(){
        setCount(count+1);
    }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>Alert()}>Click</button>
    </div>
  )
}

export default ComponentIntro

