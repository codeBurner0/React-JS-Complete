import React, { Component } from 'react'

export default class ComponentDidMount extends Component {
    constructor(){
        super()
        this.state={
            count:0
        }
        console.log("Constructor")
    }
    componentDidMount(){
        console.log("Hello")
    }

    clicker() {
        this.setState({
            count:this.state.count+1
        })
    }
    // call after html loaded
  render() {
    console.log("render")
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={()=>this.clicker()}></button>
      </div>
    )
  }
}
