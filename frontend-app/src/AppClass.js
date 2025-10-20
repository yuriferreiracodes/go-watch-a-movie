import React, { Component } from 'react';

export default class AppClass extends Component {
    render() {
        return (
            <h1>{this.props.message}</h1>
        );
    }
}
