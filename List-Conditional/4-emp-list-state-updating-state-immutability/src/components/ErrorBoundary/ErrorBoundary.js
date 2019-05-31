import React, { Component } from 'react';

class ErrorBoundary extends Component {
    state = {
        hasError: false,
        errorMessage: ''
    }

    componentDidCatch = (error, info) => {
        console.log('Hello error  -', info);
        this.setState({ hasError: true, errorMessage: error });
    }

    render() {
        if (this.state.hasError) {
            return <h1> {this.state.errorMessage} </h1>;
        } else {
            return <h5> {this.props.children} </h5>;
        }

    }
}

export default ErrorBoundary;