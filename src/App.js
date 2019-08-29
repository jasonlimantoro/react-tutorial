import React from 'react';
import './App.css';
import Header from './components/shared/Header';
import SearchBar from './components/shared/SearchBar';
import EmployeeList from './components/employee/EmployeeList';

const App = () => (
  <main className="App">
    <Header title="Employee Directory" />
    <SearchBar />
    <EmployeeList />
  </main>
);

export default App;
