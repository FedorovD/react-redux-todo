import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { drag } from '../services/drag-drop'

const Todo = ({ onClick, _id, status, category, name }) => (
  <Link to={`/details/${_id}`}>
  <div draggable="true" onDragStart={drag(_id)} className={category === 'bug' ? "card todo-card bug" : "card todo-card task"}>
    <div className="card-content">
      {name}
    </div>
  </div>
  </Link>
)

Todo.propTypes = {
  status: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default Todo