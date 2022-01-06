import React from "react";

class Counter extends React.Component{
    constructor(){
        super()
        this.state={
            Counter:0
        }
    }

    render(){
    return <h1>{this.state.Counter} </h1>
}

componentDidMount(){
    this.myInterval= setInterval(()=>{
    this.setState ({
        Counter: this.state.Counter+ 1
     })
    },1000)
}
}
export default Counter