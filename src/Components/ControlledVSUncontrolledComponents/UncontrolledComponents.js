import React, { useRef } from 'react'

function UncontrolledComponents() {
    const ref1=useRef(null);
    const ref2=useRef(null);
    function Clicker(){
        console.log(ref1.current.value);
        console.log(ref2.current.value);
        var inp=document.getElementById("input").value;
        console.log(inp);
    }
  return (
    <div>
      <input type="text" ref={ref1}/>
      <input type="text" ref={ref2}/>
      <input id='input' type="text" />
      <button onClick={Clicker}>Show Data</button>
    </div>
  )
}

export default UncontrolledComponents
