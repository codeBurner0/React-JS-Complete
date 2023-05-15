import React, { Component } from 'react'

export default class ComponentDidUpdate extends Component {
    constructor(){
        super()
        this.state={
            count:0
        }
        console.log("Constructor")
    }
    componentDidUpdate(){
        console.log("updated")
    }

    clicker() {
        this.setState({
            count:this.state.count+1
        })
    }
    // called wheneever state is updated
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
