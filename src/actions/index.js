export const addTodo = (name, category, details, order) => {
  return {
    type: 'ADD_TODO',
    _id: Math.random().toString(16).slice(2),
    name,
    category,
    status: 'todo',
    details,
    order
  }
}

export const saveTodo = (_id, name, category, status, details, order) => {
  return {
    type: 'SAVE_TODO',
    _id,
    name: name.value,
    category: category.value,
    status: status.value,
    details: details.value,
    order: order.value
  }
}

export const deleteTodo = (_id) => {
  return {
    type: 'DELETE_TODO',
    _id
  }
}

export const moveTodo = (_id, status) => {
  return {
    type: 'MOVE_TODO',
    _id,
    status
  }
}