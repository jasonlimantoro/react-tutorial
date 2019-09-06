import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import './App.css';
import TemperatureConverter from './components/TemperatureConverter';

class App extends Component {
  render() {
    return (
      <Container>
        <TemperatureConverter />
      </Container>
    );
  }
}

export default App;
