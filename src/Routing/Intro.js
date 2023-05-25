import React from 'react'
import {BrowserRouter,Link,Routes,Route} from 'react-router-dom'
function Intro() {
  return (
    <div>
        <Link to="/home">Home Page</Link>
        <Link to="/about">About Page</Link>
        <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/about' element={<About/>}/>
        </Routes>
    </div>
  )
}

function Home() {
  return (
    <div>
      <h1>This is Home Page</h1>
    </div>
  )
}


function About() {
    return (
      <div>
        <h1>This is about page</h1>
      </div>
    )
  }


export default Intro
