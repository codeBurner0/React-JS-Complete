import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import User from './User'
function DRouting() {
    const obj=[
        {id:2,name:"Anurag",email:'anurag@gmail.com'},
        {id:1,name:"Ankit",email:'ankit@gmail.com'},
        {id:3,name:"Sahil",email:'sahilt@gmail.com'},
        {id:4,name:"Anuj",email:'anuj@gmail.com'},
    ]
  return (
    <div>
        <h1>React Dynamic Routing</h1>
      {
        obj.map((e,i)=>{
            return (<strong id={i}><Link to={`/user/${e.id}`}>{e.name}</Link><span>&nbsp;&nbsp;&nbsp;</span></strong>)
        })
      }

     {
        obj.map((e,p)=>{
            return (
                <><Routes id={p+25}><Route  path={`/user/${e.id}`} element={<User id={p+25} name={e.name} email={e.email} />} /></Routes></>
            )
        })
      }
      
    </div>
  )
}

export default DRouting
