import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

const TodoListItem = ({ todo, toggleTodo }) => {
  return (
    <ListGroup.Item
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}
    >
      {todo.id}. {todo.title}{' '}
      <Button
        onClick={() => toggleTodo(todo)}
        variant={!todo.completed ? 'primary' : 'warning'}
      >
        {!todo.completed ? 'Mark as complete' : 'Mark as incomplete'}
      </Button>
    </ListGroup.Item>
  );
};

TodoListItem.propTypes = {
  todo: PropTypes.object,
  toggleTodo: PropTypes.func.isRequired
};

TodoListItem.defaultProps = {};

export default TodoListItem;
