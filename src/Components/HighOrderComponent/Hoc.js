import React from 'react'
import CounterFunction from '../CounterFunction'
function HocRED(props) {
  return (
    <h1 style={{backgroundColor:'red',color:'gray',width:'100px'}}><props.CounterFunction/>Red</h1>
  )
}
function HocGREEN(props) {
  return (
    <h1 style={{backgroundColor:'green',color:'gray',width:'100px'}}><props.CounterFunction/>Green</h1>
  )
}
export default Hoc;
