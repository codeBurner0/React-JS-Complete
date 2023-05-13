import React,{useState} from 'react'

function GetInputBoxValue() {

    const [data,setData]=useState()
    const [click,setClick]=useState()
    function getValue(e){
        setData(e.target.value)
    }
    function Clicker(val){
        (val)?setClick(true):setClick(false);

    }
  return (
    <div>
      <input type="text" onChange={getValue}/>
      {(click)?<h1>{data}</h1>:null}
      <button onClick={()=>Clicker(true)}>Click</button>
    </div>
  )
}

export default GetInputBoxValue
