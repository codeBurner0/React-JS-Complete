import React from 'react'
import {HocRED,HocGREEN} from './Hoc'
import CounterFunction from '../CounterFunction'

function UseOfHOF() {
  return (
    <div>
      <HocRED CounterFunction={CounterFunction} />
      <HocGREEN CounterFunction={CounterFunction} />
    </div>
  )
}
export default UseOfHOF

