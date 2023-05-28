import React, { useState } from 'react'

function GetFetchApi() {
    const [data,setData]=useState();
    fetch("https://jsonplaceholder.typicode.com/todos").then((res)=>{
        console.log(res);
    }
        
    )
  return (
    <div>
      <h1>Hello</h1>
    </div>
  )
}

export default GetFetchApi
