import React, { Component } from 'react';

class CoordinatesButton extends Component {
    handleClick = event => {
        this.props.onRecieveCoordinates([event.clientX, event.clientY]);
    };

    render() {
        return <button onclick={this.handleClick} ></button>
    }
}

export default CoordinatesButton;