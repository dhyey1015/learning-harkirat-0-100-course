import { Component } from "react";

export class LifeCycleClass extends Component{
    componentDidMount(){
        console.log("class component mounted")
    }

    componentWillUnmount(){
        console.log("class component unmounted")
    }

    render(){
        return(
            <div>
                form Life cycle Class component
            </div>
        )
    }
}