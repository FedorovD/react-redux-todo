export const addTodo = name => {
  return {
    type: 'ADD_TODO',
    _id: Math.random().toString(16).slice(2),
    name
  }
}