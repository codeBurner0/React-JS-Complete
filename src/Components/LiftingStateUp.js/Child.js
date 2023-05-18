import React from 'react'

function Child(props) {
  return (
    <div>
      <button onClick={()=>props.data("Ankit")}>Click Me</button>
    </div>
  )
}

export default Child
