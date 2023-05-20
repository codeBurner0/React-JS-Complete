import React,{useRef} from 'react'

function UseRefFun() {
    const ref1=useRef(null);
    function Clicker(){
        ref1.current.value="1000";
        ref1.current.style.color="green";
        ref1.current.style.display="none";
        ref1.current.focus()
    }
  return (
    <div>
      <input type="text" ref={ref1}/>
      <button onClick={Clicker}>Click me</button>
    </div>
  )
}

export default UseRefFun
