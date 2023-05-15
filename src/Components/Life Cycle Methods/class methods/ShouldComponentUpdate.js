import React, { Component } from 'react'

export default class ShouldComponentUpdate extends Component {
    constructor(){
        super()
        this.state={
            count:0
        }
    }
    shouldComponentUpdate(){
        if(this.state.count>=5 && this.state.count<=10){
            return false
        }
        return true
    }

    componentDidUpdate(){
        console.log("updated")
    }
// componentdidupdate only run when shouldcomponentupdate return true
    clicker() {
        this.setState({
            count:this.state.count+1
        })
    }
    // call after html loaded
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={()=>this.clicker()}></button>
      </div>
    )
  }
}
