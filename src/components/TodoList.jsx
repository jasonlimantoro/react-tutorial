import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import TodoListItem from './TodoListItem';

const TodoList = ({ todos, batchAction, toggleTodo, title }) => {
  return (
    <Card style={{ overflowY: 'scroll' }}>
      <Card.Header style={{ display: 'flex', justifyContent: 'space-between' }}>
        {title} ({todos.length}){' '}
        <Button onClick={batchAction}>Mark all as completed</Button>
      </Card.Header>
      <ListGroup>
        {todos.length > 0 &&
          todos.map(t => {
            return <TodoListItem key={t.id} todo={t} toggleTodo={toggleTodo} />;
          })}
      </ListGroup>
    </Card>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array
};

TodoList.defaultProps = {};

export default TodoList;
