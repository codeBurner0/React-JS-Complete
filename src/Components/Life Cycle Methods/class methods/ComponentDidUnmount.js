import React, { Component } from 'react'

export default class ComponentDidUnmount extends Component {
    componentWillUnmount(){
        console.log("component will unmount")
    }
  render() {

    return (
      <div>
        <h1>Hello</h1>
      </div>
    )
  }
}
