// Code CoordinatesButton Component Here
import React, { Component } from 'react'

export default class CoordinatesButton extends Component {

    handleClick = (e) =>{
        let array = [e.clientX, e.clientY]
        return this.props.onReceiveCoordinates(array)
    }

    render(){
        return(
            <button onClick={this.handleClick}></button>
        )
    }
}