import React, { Component } from 'react';

class Clock extends Component {
  constructor(props) {
    super(props);

    this.convertToTime = this.convertToTime.bind(this);
  }

  convertToTime = (count) => {
    let minutes = Math.floor(count / 60);
    let seconds = count % 60;

    minutes = minutes < 10 ? ('0' + minutes) : minutes;
    seconds = seconds < 10 ? ('0' + seconds) : seconds;

    return `${ minutes }:${ seconds }`;
  }

  render() {
    return (
      <div className="running-clock">
        <h2 id="timer-label">{ this.props.cycle } Time</h2>

        <div id="time-left">
          { this.convertToTime(this.props.clock) }
        </div>

        <div className="buttons">
          <button 
            id="start_stop"
            className={ this.props.isPlaying ? 'pause' : 'play' }
            onClick={ this.props.handlePlay }>
            { this.props.isPlaying ? 'Pause' : 'Play' }
          </button>

          <button 
            id="reset"
            className="reset"
            onClick={ this.props.handleReset }>
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default Clock;