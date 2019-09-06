import React, { Component } from 'react';
import './App.css';
import Counter from './components/Counter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter initialCount={10} />
        <Counter initialCount={23} />
      </div>
    );
  }
}

export default App;
