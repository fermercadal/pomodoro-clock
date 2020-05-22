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
      clockCount: 0,
      isPlaying: false
    }

    this.loop = undefined;

    this.handleBreakDecrease = this.handleBreakDecrease.bind(this);
    this.handleBreakIncrease = this.handleBreakIncrease.bind(this);
    this.handleSessionDecrease = this.handleSessionDecrease.bind(this);
    this.handleSessionIncrease = this.handleSessionIncrease.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  componentDidMount() {
    const sessionTime = this.state.sessionTime;

    this.setState({
      clockCount: sessionTime * 60
    });
  }

  componentWillUnmount() {
    clearInterval(this.loop);
  }

  handleSessionDecrease = () => {
    const sessionTime = this.state.sessionTime;

    if(sessionTime - 1 >= 0) {
      this.setState({
        sessionTime: sessionTime - 1
      });
    }

    this.updateCount((sessionTime - 1))
  }

  handleSessionIncrease = () => {
    const sessionTime = this.state.sessionTime;

    this.setState({
      sessionTime: sessionTime + 1
    });

    this.updateCount((sessionTime + 1))
  }

  updateCount(value) {
    this.setState({
      clockCount: value * 60
    });
  }
  
  handleBreakDecrease = () => {
    const breakTime = this.state.breakTime;

    if(breakTime - 1 >= 0) {
      this.setState({
        breakTime: breakTime - 1
      });
    }
  }

  handleBreakIncrease = () => {
    const breakTime = this.state.breakTime;

    this.setState({
      breakTime: breakTime + 1
    });
  }

  handlePlay = () => {
    const isPlaying = this.state.isPlaying;

    if(isPlaying) {
      clearInterval(this.loop);

      this.setState({
        isPlaying: false
      });
    }
    else {
      this.setState({
        isPlaying: true
      });

      this.loop = setInterval(() => {
        const clockCount = this.state.clockCount;
        const cycle = this.state.cycle;
        const breakTime = this.state.breakTime;
        const SessionTime = this.state.SessionTime;

        if(clockCount === 0) {
          this.setState({
            cycle: cycle === 'Session' ? 'Break' : 'Session',
            clockCount: cycle === 'Session' ? (breakTime * 60) : (SessionTime * 60)
          });
        } else {
          this.setState({
            clockCount: clockCount - 1
          });
        }        
      }, 1000);
    }
  }

  handleReset = () => {
    this.setState({
      cycle: 'Session',
      sessionTime: 25,
      breakTime: 5,
      clockCount: 25 * 60,
      isPlaying: false
    });

    clearInterval(this.loop);
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
          isPlaying={ this.state.isPlaying }
        />
      </main>
    );
  }
}

export default App;
