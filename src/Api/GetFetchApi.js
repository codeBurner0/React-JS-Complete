import React, { useEffect, useState } from 'react'

function GetFetchApi() {
    const [data,setData]=useState({});
    useEffect(()=>{fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(json => {
        console.log(json)
        setData(json)
    })
    },[])
  return (
    <div>
      <h1>{data[3].title}</h1>
      <h1>{data[100].title}</h1>
    </div>
  )
}

export default GetFetchApi
