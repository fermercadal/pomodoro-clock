import React, { Component } from 'react';

class Clock extends Component {
  render() {
    return (
      <div className="clock">
        <h2>Time</h2>
        <div>00:00</div>

        <div className="buttons">
          <button onClick={ this.props.handlePlay }>
            Play/Pause
          </button>

          <button onClick={ this.props.handleReset }>
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default Clock;