// Code DelayedButton Component Here
import React, { Component } from 'react';

class DelayedButton extends Component {

    delayClick = (e) => {
        e.persist();
        setTimeout(() => {
            this.props.onDelayedClick(e)
        }, this.props.delay)
    }

    render() {
        return(
            <button onClick={this.delayClick}>Delay</button>
        )
    }

}

export default DelayedButton