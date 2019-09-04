import React from 'react';
import PropTypes from 'prop-types';

const CounterWithHooks = ({ initialCount }) => {
  const [count, setCount] = React.useState(initialCount);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};

CounterWithHooks.propTypes = {
  initialCount: PropTypes.number
};

CounterWithHooks.defaultProps = {
  initialCount: 0
};

export default CounterWithHooks;
