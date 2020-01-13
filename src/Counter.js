import React, {Component} from 'react';

class Counter extends Component {
    // constructor(props) {
    //     super(props);
    //     this.handleIncrease = this.handleIncrease.bind(this);
    //     this.handleDecrease = this.handleDecrease.bind(this);
    // }

    state = {
        counter: 0,
        fixed: 1,
        updateMe: {
            toggleMe: false,
            dontChangeMe: 1
        }
    };

    handleIncrease = () => {
        console.log('increase');
        console.log(this);
        this.setState({
            counter: this.state.counter + 1
        });
    };

    handleDecrease = () => {
        console.log('decrease');
        console.log(this);
        this.setState({
            counter: this.state.counter - 1
        });
    };

    handleToggle = () => {
        this.setState({
            updateMe: {
                ...this.state.updateMe,
                toggleMe: !this.state.updateMe.toggleMe
            }
        });
    };
    
    render() {
        return(
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={this.handleIncrease}>+1</button>
                <button onClick={this.handleDecrease}>-1</button>
                <p>고정된 값: {this.state.fixed}</p>
            </div>
        )
    }
}

export default Counter;