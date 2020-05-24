import React, { Component } from 'react';

class TimeInput extends Component {
  render() {
    const cyclePrefix = this.props.title === 'Session' ? 'session' : 'break';

    return (
      <div className="time-input">
          <h3 id={`${ cyclePrefix }-label`}>{ this.props.title } length</h3>
          
          <span id={`${ cyclePrefix }-length`}>{ this.props.time }</span>

          <div className="buttons">
            <button 
              id={`${ cyclePrefix }-decrement`}
              className="decrease"
              onClick={ this.props.handleDecrease }>
              Decrease value
            </button>

            <button 
              id={`${ cyclePrefix }-increment`}
              className="increase"
              onClick={ this.props.handleIncrease }>
              Increase value
            </button>
          </div>
      </div>
    );
  }
}

export default TimeInput;