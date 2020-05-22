import React, { Component } from 'react';

class Clock extends Component {
  constructor(props) {
    super(props);

    this.convertToTime = this.convertToTime.bind(this);
  }

  convertToTime = (count) => {
    const minutes = Math.floor(count / 60);
    let seconds = count % 60;

    seconds = seconds < 10 ? ('0' + seconds) : seconds;
    
    return `${ minutes }:${ seconds }`;
  }

  render() {
    return (
      <div className="clock">
        <h2>{ this.props.cycle } Time</h2>
        <div>
          { this.convertToTime(this.props.clock) }
        </div>

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