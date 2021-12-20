import React, { Component } from 'react';
import { render } from 'react-dom';
import LineChart from './line-chart';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <LineChart />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
