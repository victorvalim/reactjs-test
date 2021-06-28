/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, {
  createContext, useMemo, useReducer, useCallback,
} from 'react';
import repository from '../data/repository';
import TodoReducer from './todo.reducer';

export const TodoContext = createContext();

export default function TodoProvider(props) {
  const data = useMemo(() => repository(), []);

  const list = useCallback(() => {
    const items = data.getItemParse('todos');
    if (!items) return [];
    return items;
  }, [data]);

  const [todos, dispatch] = useReducer(TodoReducer, list());
  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      {props.children}
    </TodoContext.Provider>
  );
}
