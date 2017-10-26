import { connect } from 'react-redux'
// import { toggleTodo } from '../actions'
import TodoList from '../../components/todoList'

const mapStateToProps = state => {
  return {
    todos: state.todos.filter(todo => todo.status === 'inProgress'),
    status: 'In Progress'
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // onTodoClick: id => {
    //   dispatch(toggleTodo(id))
    //}
  }
}

const InProgress = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default InProgress