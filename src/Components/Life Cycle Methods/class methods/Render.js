import React, { Component } from 'react'

export default class Render extends Component {
  constructor(){
    super();
    this.state={
      count:0,
    }
  }

  clicker(){
    this.setState({
      count:this.state.count+1,
    })
  }
  render() {
    console.log("Hello")
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={()=>this.clicker()}>Update State of count</button>
      </div>
    )
  }
}
