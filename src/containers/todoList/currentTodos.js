import { connect } from 'react-redux'
// import { toggleTodo } from '../actions'
import TodoList from '../../components/todoList'

const mapStateToProps = state => {
  return {
    todos: state.todos.filter(todo => todo.status === 'todo').sort((cur, next) => {
      if(cur.order < next.order) return 1
      else if(cur.order > next.order) return -1
      else return 0
    }),
    status: 'ToDo'
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // onTodoClick: id => {
    //   dispatch(toggleTodo(id))
    //}
  }
}

const CurrentTodos = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default CurrentTodos