import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0
    };

    increaseCount() {
        // this.state.count = this.state.count + 1; we don't change the state directly because it will not rerendering the UI
        // this.setState({
        //     count: this.state.count + 1
        // }, 
        // () => {console.log('Callback value -- ', this.state.count)});

        this.setState((prevState, props) => ({
            count: prevState.count +1 
        }));
        console.log(this.state.count);
    }

    incrementFiveTimes() {
        this.increaseCount();
        this.increaseCount();
        this.increaseCount();
        this.increaseCount();
        this.increaseCount();
    }

    render() {
        return (
            <div>
                <p>Count - {this.state.count}</p>
                <button onClick={() => this.incrementFiveTimes()}>Increment the Counter</button>
            </div>
        );
    }
}

export default Counter;