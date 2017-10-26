import React from 'react'
import PropTypes from 'prop-types'
import Todo from './todo'

const TodoList = ({ todos, onTodoClick, status }) => (
  <div className="todos-wrapper">
    <h3 className="title is-3">{status}</h3>
    {todos.map(todo => (
      <Todo key={todo._id} {...todo} />
    ))}
  </div>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}

export default TodoList