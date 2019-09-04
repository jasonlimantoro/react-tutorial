import React from 'react';
import './App.css';
import Counter from './components/Counter';
import CounterWithHooks from './components/CounterWithHooks';

const App = () => {
  return (
    <div className="App">
      <Counter initialCount={10} />
      <Counter initialCount={23} />
      <h1>Counter with hooks</h1>
      <CounterWithHooks initialCount={-1} />
    </div>
  );
};
export default App;
