import React from 'react'
class CounterClass extends React.Component{
    constructor(){
        super();
        this.state={
            count:0,
        }
    }
    Increase(){
        this.setState({
            count:this.state.count+1
        })
    }
    render(){
        return(
            <>
            <h1>{this.state.count}</h1>
            <button onClick={()=>this.Increase()}>Increase</button>
            </>
        )
    }
}

export default CounterClass