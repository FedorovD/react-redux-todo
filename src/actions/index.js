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

export const saveTodo = (_id, name, category, status, details) => {
  return {
    type: 'SAVE_TODO',
    _id,
    name: name.value,
    category: category.value,
    status: status.value,
    details: details.value
  }
}