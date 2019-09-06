import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import TemperatureConverter from './components/TemperatureConverter';
import TodoApp from './components/TodoApp';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/temperature">Temperature</Link>
              </li>
              <li>
                <Link to="/todos">Todos</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Container>
          <Route path="/temperature" component={TemperatureConverter} />
          {/*<Route path="/todos" component={TodoApp} />*/}
        </Container>
      </Router>
    );
  }
}

export default App;
