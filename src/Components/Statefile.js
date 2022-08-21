import React, { Component } from 'react';

class Statefile extends Component {
    constructor(){
        super()
        this.state = {
            message: "Welcome to Home"
        }
    }
    
    changeMessage(){
        this.setState({
            message: "Thank you"
        })
    }
    render() {
        return (
            <div>
                <p>Hi {this.props.name}</p>
                <button onClick={()=> this.changeMessage()}>Welcome</button>
                <p>Hi {this.state.message}</p>
            </div>
        );
    }
}

export default Statefile;
