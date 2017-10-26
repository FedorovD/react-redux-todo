import { connect } from 'react-redux'
// import { toggleTodo } from '../actions'
import TodoList from '../../components/todoList'

const mapStateToProps = state => {
  return {
    todos: state.todos.filter(todo => todo.status === 'completed'),
    status: 'Done'
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // onTodoClick: id => {
    //   dispatch(toggleTodo(id))
    //}
  }
}

const CompletedTodos = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default CompletedTodos