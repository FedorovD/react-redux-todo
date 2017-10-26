export const addTodo = (name, category, details) => {
  return {
    type: 'ADD_TODO',
    _id: Math.random().toString(16).slice(2),
    name,
    category,
    status: 'todo',
    details
  }
}