import { connect } from 'react-redux'
import  Details  from '../components/details'
import { saveTodo } from '../actions'
// import { push } from 'react-router-redux'


const mapStateToProps = (state, props) => {
  const _id = props.match.params.id;
  const todo = state.todos.find(todo => todo._id === _id);
  return {
    _id: todo._id,
    name: todo.name,
    type: todo.type,
    category: todo.category,
    status: todo.status,
    details: todo.details
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveTodo: (_id, name, category, status, details) => {
      dispatch(saveTodo(_id, name, category, status, details))
      // dispatch(push('/'))
    }
  }
}

const showDetails = connect(
  mapStateToProps,
  mapDispatchToProps
)(Details)

export default showDetails