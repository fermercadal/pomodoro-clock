import React, { Component } from 'react';
import './App.css';

import TimeInput from './Components/TimeInput/TimeInput';
import Clock from './Components/Clock/Clock';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sessionTime: 25,
      breakTime: 5,
      clockTime: 0
    }

    this.handleDecrease = this.handleDecrease.bind(this);
    this.handleIncrease = this.handleIncrease.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleDecrease() {

  }

  handleIncrease() {
    
  }

  handlePlay() {

  }

  handleReset() {
    
  }

  render() {
    const breakProps = {
      title: 'Break',
      time: this.state.breakTime,
      handleDecrease: this.handleDecrease,
      handleIncrease: this.handleIncrease
    }

    const sessionProps = {
      title: 'Session',
      time: this.state.sessionTime,
      handleDecrease: this.handleDecrease,
      handleIncrease: this.handleIncrease
    }

    return (
      <main id="clock" className="clock-container">
        <h1>Pomodoro clock</h1>

        <div className="set-timber">
          <TimeInput {...sessionProps} />
          <TimeInput {...breakProps} />
        </div>

        <Clock
          handlePlay={ this.handlePlay }
          handleReset={ this.handleReset }
          clock={ this.state.clockTime }
        />
      </main>
    );
  }
}

export default App;
