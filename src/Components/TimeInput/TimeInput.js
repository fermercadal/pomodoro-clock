import React, { Component } from 'react';

class TimeInput extends Component {
  render() {
    return (
      <div>
          <h2>{ this.props.title } time</h2>
          <button onClick={ this.props.handleDecrease }>
            -
          </button>

          <span>{ this.props.time }</span>
          
          <button onClick={ this.props.handleIncrease }>
            +
          </button>
      </div>
    );
  }
}

export default TimeInput;