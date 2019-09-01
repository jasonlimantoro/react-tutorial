import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import './App.css';

const selectCompletedTodos = todos =>
  todos.length > 0 && todos.filter(t => t.completed === true);

class App extends Component {
  state = {
    todos: [],
    url: ''
  };

  componentDidMount() {
    document.title = `Todos (${this.state.todos.length})`;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.todos.length !== this.state.todos.length) {
      document.title = `Todos (${this.state.todos.length})`;
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
      todos: this.state.todos.map(t => {
        if (t.id === todo.id) {
          t.completed = !t.completed;
        }
        return t;
      })
    });
  };
  completeAllTodos = () => {
    this.setState({
      todos: this.state.todos.map(t => {
        t.completed = true;
        return t;
      })
    });
  };
  incompleteAllTodos = () => {
    this.setState({
      todos: this.state.todos.map(t => {
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
    const completedTodos = selectCompletedTodos(this.state.todos);
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
            <Card style={{ overflowY: 'scroll' }}>
              <Card.Header
                style={{ display: 'flex', justifyContent: 'space-between' }}
              >
                All ({this.state.todos.length}){' '}
                <Button onClick={this.completeAllTodos}>
                  Mark all as completed
                </Button>
              </Card.Header>
              <ListGroup>
                {this.state.todos.length > 0 &&
                  this.state.todos.map(t => {
                    return (
                      <ListGroup.Item
                        key={t.id}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between'
                        }}
                      >
                        {t.id}. {t.title}{' '}
                        <Button
                          onClick={() => this.toggleTodo(t)}
                          variant={!t.completed ? 'primary' : 'warning'}
                        >
                          {!t.completed
                            ? 'Mark as complete'
                            : 'Mark as incomplete'}
                        </Button>
                      </ListGroup.Item>
                    );
                  })}
              </ListGroup>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Header
                style={{ display: 'flex', justifyContent: 'space-between' }}
              >
                Completed ({completedTodos.length})
                <Button variant="warning" onClick={this.incompleteAllTodos}>
                  Mark all as incomplete
                </Button>
              </Card.Header>
              <ListGroup>
                {completedTodos &&
                  completedTodos.map(t => {
                    return (
                      <ListGroup.Item
                        key={t.id}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between'
                        }}
                      >
                        {t.id}. {t.title}{' '}
                        <Button
                          onClick={() => this.toggleTodo(t)}
                          variant="warning"
                        >
                          Mark as incomplete
                        </Button>
                      </ListGroup.Item>
                    );
                  })}
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
