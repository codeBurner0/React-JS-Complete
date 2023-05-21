import React, { forwardRef } from 'react'

function ForwardRef1(props,ref) {
    
  return (
    <div>
      <input type="text" ref={ref}/>
    </div>
  )
}

export default forwardRef(ForwardRef1);
