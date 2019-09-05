import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import TodoListItem from './TodoListItem';

const TodoList = ({ todos, batchAction, toggleTodo, title }) => {
  const [search, setSearch] = React.useState('');
  const getFilteredTodos = () => {
    return (
      (todos &&
        todos.filter(
          t => t.title.toLowerCase().indexOf(search.toLowerCase()) !== -1
        )) ||
      []
    );
  };
  const filteredTodos = getFilteredTodos();
  return (
    <Card>
      <Card.Header>
        <header>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            {title} ({filteredTodos.length}) {batchAction}
          </div>
          <Form.Group>
            <Form.Label>
              Search: <b>{search}</b>{' '}
            </Form.Label>
            <Form.Control
              placeholder="Search todo"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </Form.Group>
        </header>
      </Card.Header>
      <ListGroup style={{ overflowY: 'scroll', height: 500 }}>
        {filteredTodos.map(t => {
          return <TodoListItem key={t.id} todo={t} toggleTodo={toggleTodo} />;
        })}
      </ListGroup>
    </Card>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array,
  batchAction: PropTypes.object
};

TodoList.defaultProps = {};

export default TodoList;
