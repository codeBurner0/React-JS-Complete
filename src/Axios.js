import axios from 'axios'
import React, { useEffect } from 'react'

function Axios() {
    useEffect(()=>{
        axios.get("http://localhost:4000").then((res)=>{
            console.log(res)})
    })
  return (
    <div>
      <h1>Hello everyone</h1>
    </div>
  )
}

export default Axios
