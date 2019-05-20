import React, { Component } from 'react';
import './Die.css'

class Die extends Component {
    render() {
    return (
        <div>
            <i class={`die fas fa-dice-${this.props.face} ${this.props.rolling && "shaking"}`}></i>
        </div>
    );
    }
};

export default Die;