import React, { Component } from 'react';
import './Tomato.scss';

class Tomato extends Component {
  render() {
    const cyclePrefix = this.props.title === 'Session' ? 'session' : 'break';

    return (
      <div className="tomato-container">
        <div className="tomato">

          <span className="face-container">
            <span class="glasses">
              <span className="cristal" />
              <span className="cristal" />
            </span>

            <span class="sunglasses">
              <span className="cristal" />
              <span className="cristal" />
            </span>

            <span className="eye" />
            <span className="eye" />

            <span className="smile" />
          </span>
        </div>
      </div>
    );
  }
}

export default Tomato;