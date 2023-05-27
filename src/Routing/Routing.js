import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Nav from './Components/Nav'
import Home from './Components/Home'
import About from './Components/About'
import PageNotFound from './Components/PageNotFound'
function Routing() {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/About" element={<About/>}/>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    </div>
  )
}

export default Routing
