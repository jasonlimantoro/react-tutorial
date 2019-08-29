import React from 'react';
import './App.css';
import Counter from './components/Counter';

const App = () => {
  return (
    <div className="App">
      <Counter initialCount={10} />
      <Counter initialCount={23} />
    </div>
  );
};
export default App;
