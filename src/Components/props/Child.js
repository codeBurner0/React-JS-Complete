// import React from 'react'

// function Child({Alert,count}) {
//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={()=>Alert()}>Click</button>
//     </div>
//   )
// }

// export default Child

import React, { Component } from 'react'

export default class Child extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.count}</h1>
        <button onClick={()=>this.props.Alert()}>Click</button>
      </div>
    )
  }
}

