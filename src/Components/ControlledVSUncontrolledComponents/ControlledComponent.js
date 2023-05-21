import React, { useState } from 'react'
function ControlledComponent() {
    const [val,setVal]=useState("Ankit");
    function Clicker(e){
        setVal(e.target.value)
    }
  return (
    <div>
        <h1>{val}</h1>
      <input type="text" value={val} onChange={Clicker}/>
    </div>
  )
}
export default ControlledComponent
