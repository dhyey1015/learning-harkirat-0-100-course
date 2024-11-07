import { Component } from "react";

export class ClassComponent extends Component{
    constructor(props){
        super(props);
        this.state = { count: 0 }; //state initilication
    }

    IncrementCount = function(){
        this.setState({ count: this.state.count + 1}) //setState to change the state
    }

    render(){
        return (
            <div>
                <p>Class Component</p>
                <p>count: {this.state.count}</p>
                <button onClick={this.IncrementCount}></button>
            </div>
        )
    }

}