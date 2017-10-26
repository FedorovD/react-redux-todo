import { connect } from 'react-redux'
import  Details  from '../components/details'

const mapStateToProps = (state, props ) => {
  const _id = props.match.params.id;
  const todo = state.todos.find(todo => todo._id === _id);
  console.log(todo)
  return {
    _id: todo._id,
    name: todo.name,
    type: todo.type,
    status: todo.status,
    details: todo.details
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // onTodoClick: id => {
    //   dispatch(toggleTodo(id))
    //}
  }
}

const showDetails = connect(
  mapStateToProps,
  mapDispatchToProps
)(Details)

export default showDetails