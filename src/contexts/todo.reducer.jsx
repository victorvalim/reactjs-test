/* eslint-disable object-shorthand */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
export default function reducer(state, action) {
  function randomNumber() {
    const id = new Date().getTime();
    return (Number(id) + 1);
  }
  const addTodo = (todo) => {
    const todoItem = { id: randomNumber(), description: todo, done: false };
    return [...state, todoItem];
  };

  const updateTodo = (todo) => state;

  const deleteTodo = (id) => {
    const newState = state.filter((item) => (item.id !== id));
    return [...newState];
  };

  const doneTodo = (id, description) => {
    const todoItem = { id, description, done: true };
    const oldItem = { id, description, done: false };
    const newState = state.map((item) => (item.id === oldItem.id ? todoItem : item));
    return [...newState];
  };

  switch (action.type) {
    case 'add':
      return addTodo(action.payload);
    case 'update':
      return updateTodo(action.payload);
    case 'remove':
      return deleteTodo(action.payload);
    case 'done':
      return doneTodo(action.payloadID, action.payloadDescription);
    case 'delete':
      return deleteTodo(action.payloadID);
    default:
      return null;
  }
}
