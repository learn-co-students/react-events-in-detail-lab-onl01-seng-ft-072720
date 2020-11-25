import React from 'react'

export default class CoordinatesButton extends React.Component {

    handleOnClick = (e) => {
        const array = [e.clientX, e.clientY]
        this.props.onReceiveCoordinates(array)
    }
    render() {
        return (
        <button onClick={this.handleOnClick}>Coordinates Button</button>
        )
    }
}