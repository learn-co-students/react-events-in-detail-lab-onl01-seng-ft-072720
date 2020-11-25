import React from 'react'

export default class DelayeddButton extends React.Component {

    handleOnClick = (e) => {
        e.persist();
        setTimeout(() =>  this.props.onDelayedClick(e), this.props.delay);
    }
    render() {
        return (
            <button
            onClick={this.handleOnClick}
            >Delayed Button</button>
        )
    }
}