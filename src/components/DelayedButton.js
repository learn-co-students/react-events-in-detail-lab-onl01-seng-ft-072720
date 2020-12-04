import React, { Component } from 'react';

class DelayedButton extends Component {


    //need explalnation for the below
    handleClick = event => {
        event.persist();
        window.setTimeout(() => {
            this.props.onDelayedClick(event);
        }, this.props.delay);
        
    };

    render() {
        return <button onClick={this.handleClick} ></button>
    }
}

export default DelayedButton;