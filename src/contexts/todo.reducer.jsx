/* eslint-disable no-unused-vars */
export default function reducer(state, action) {
  const addTodo = (todo) => {
    const todoItem = { id: state.length + 1, description: todo, done: false };
    return [...state, todoItem];
  };

  const updateTodo = (todo) => state;

  const deleteTodo = (todo) => state;

  switch (action.type) {
    case 'add':
      return addTodo(action.payload);
    case 'update':
      return updateTodo(action.payload);
    case 'remove':
      return deleteTodo(action.payload);
    default:
      return null;
  }
}
