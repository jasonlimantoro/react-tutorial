import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Counter extends Component {
  static propTypes = {
    initialCount: PropTypes.number
  };
  state = {
    count: this.props.initialCount || 0
  };
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  componentDidMount() {
    document.title = `Current count: ${this.state.count}`;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.state.count !== prevState.count) {
      document.title = `Current count: ${this.state.count}`;
    }
  }

  render() {
    return (
      <div>
        <h1>Counter: {this.state.count}</h1>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    );
  }
}

Counter.propTypes = {};

Counter.defaultProps = {};

export default Counter;
