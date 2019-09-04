import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    username: '',
    password: ''
  };
  handleChangeUsername = e => {
    this.setState({ username: e.target.value });
  };
  handleChangePassword = e => {
    this.setState({ password: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    alert(JSON.stringify(this.state, null, 2));
  };

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            value={this.state.username}
            onChange={this.handleChangeUsername}
            id="username"
          />
          <label htmlFor="password">Password</label>
          <input
            value={this.state.password}
            onChange={this.handleChangePassword}
            id="password"
            type="password"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
