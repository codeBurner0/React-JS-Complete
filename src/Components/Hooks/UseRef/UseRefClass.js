import React, { Component,createRef } from 'react'

export default class UseRefClass extends Component {
    constructor(){
        super();
        this.ref=createRef();
    }
    Clicker(){
        console.log(this.ref.current.value);
        this.ref.current.style.color="red";
        this.ref.current.style.backgroundColor="gray";
    }
  render() {
    return (
      <div>
        <input type="text" ref={this.ref}/>
        <button onClick={()=>this.Clicker()}>Submit</button>
      </div>
    )
  }
}
