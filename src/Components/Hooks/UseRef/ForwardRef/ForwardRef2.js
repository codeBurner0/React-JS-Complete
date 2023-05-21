import React,{useRef} from 'react'
import ForwardRef1 from './ForwardRef1';

function ForwardRef2(props) {
    const iref=useRef(null);
    function Clicker(){
        iref.current.style.color="red";
        iref.current.focus()
        iref.current.style.backgroundColor="black";
    }
  return (
    <div>
        <ForwardRef1 ref={iref}/>
      <button onClick={Clicker}>Update Input</button>
    </div>
  )
}

export default ForwardRef2
