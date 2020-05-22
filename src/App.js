import React, { Component } from 'react';
import './App.css';

import TimeInput from './Components/TimeInput/TimeInput';
import Clock from './Components/Clock/Clock';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cycle: 'Session',
      sessionTime: 25,
      breakTime: 5,
      clockCount: 25 * 60
    }

    this.handleBreakDecrease = this.handleBreakDecrease.bind(this);
    this.handleBreakIncrease = this.handleBreakIncrease.bind(this);
    this.handleSessionDecrease = this.handleSessionDecrease.bind(this);
    this.handleSessionIncrease = this.handleSessionIncrease.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleSessionDecrease() {
    if(this.state.sessionTime - 1 >= 0) {
      this.setState({
        sessionTime: this.state.sessionTime - 1
      });
    }
  }

  handleSessionIncrease() {
    this.setState({
      sessionTime: this.state.sessionTime + 1
    });
  }
  
  handleBreakDecrease() {
    if(this.state.breakTime - 1 >= 0) {
      this.setState({
        breakTime: this.state.breakTime - 1
      });
    }
  }

  handleBreakIncrease() {
    this.setState({
      breakTime: this.state.breakTime + 1
    });
  }

  handlePlay() {

  }

  handleReset() {
    
  }

  render() {
    const breakProps = {
      title: 'Break',
      time: this.state.breakTime,
      handleDecrease: this.handleBreakDecrease,
      handleIncrease: this.handleBreakIncrease
    }

    const sessionProps = {
      title: 'Session',
      time: this.state.sessionTime,
      handleDecrease: this.handleSessionDecrease,
      handleIncrease: this.handleSessionIncrease
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
          clock={ this.state.clockCount }
          cycle={ this.state.cycle }
        />
      </main>
    );
  }
}

export default App;
