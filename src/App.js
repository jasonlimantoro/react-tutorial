import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import './App.css';
import TodoList from './components/TodoList';

class App extends Component {
  state = {
    todos: [],
    url: 'https://jsonplaceholder.typicode.com/todos'
  };

  get todos() {
    return this.state.todos;
  }

  get completedTodos() {
    return this.todos.filter(t => t.completed === true);
  }

  componentDidMount() {
    document.title = `Todos (${this.todos.length})`;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.todos.length !== this.todos.length) {
      document.title = `Todos (${this.todos.length})`;
    }
  }

  fetchTodos = () => {
    fetch(this.state.url)
      .then(r => r.json())
      .then(todos => {
        if (todos.length > 0) {
          this.setState({
            todos
          });
        } else {
          this.setState({ todos: [todos] });
        }
      });
  };
  toggleTodo = todo => {
    this.setState({
      todos: this.todos.map(t => {
        if (t.id === todo.id) {
          t.completed = !t.completed;
        }
        return t;
      })
    });
  };
  completeAllTodos = () => {
    this.setState({
      todos: this.todos.map(t => {
        t.completed = true;
        return t;
      })
    });
  };
  incompleteAllTodos = () => {
    this.setState({
      todos: this.todos.map(t => {
        t.completed = false;
        return t;
      })
    });
  };

  handleChange = e => {
    this.setState({ url: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.fetchTodos();
  };

  render() {
    const { url } = this.state;
    return (
      <Container>
        <h1>Todo list</h1>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label>Url</Form.Label>
            <Form.Control
              value={url}
              onChange={this.handleChange}
              placeholder="Enter Url"
              isInvalid={this.state.url === ''}
            />
            <Form.Control.Feedback type="invalid">
              Please enter url
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Button type="submit">Fetch</Button>
          </Form.Group>
        </Form>
        <Row>
          <Col>
            <TodoList
              title="All"
              todos={this.todos}
              batchAction={
                <Button onClick={this.completeAllTodos}>Complete all</Button>
              }
              toggleTodo={this.toggleTodo}
            />
          </Col>
          <Col>
            <TodoList
              title="Completed"
              todos={this.completedTodos}
              batchAction={
                <Button variant="warning" onClick={this.incompleteAllTodos}>
                  Incomplete all
                </Button>
              }
              toggleTodo={this.toggleTodo}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
