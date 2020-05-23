import React, { Component } from 'react';

class TimeInput extends Component {
  render() {
    const cyclePrefix = this.props.title === 'Session' ? 'session' : 'break';

    return (
      <div>
          <h2 id={`${ cyclePrefix }-label`}>{ this.props.title } length</h2>
          
          <button 
            id={`${ cyclePrefix }-decrement`}
            onClick={ this.props.handleDecrease }>
            -
          </button>

          <span id={`${ cyclePrefix }-length`}>{ this.props.time }</span>
          
          <button 
            id={`${ cyclePrefix }-increment`}
            onClick={ this.props.handleIncrease }>
            +
          </button>
      </div>
    );
  }
}

export default TimeInput;