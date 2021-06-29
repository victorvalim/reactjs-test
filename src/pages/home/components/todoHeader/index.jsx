import React, { useState, useContext } from 'react';
import { TodoContext } from '../../../../contexts/todo.context';
import { Input, Label, Span } from './todoHeaderStyled';

export default function TodoHeader() {
  const todoContext = useContext(TodoContext);
  const [todo, setTodo] = useState(() => '');

  const handleAddTodo = (e) => {
    e.preventDefault();
    todoContext.dispatch({ type: 'add', payload: todo });
  };

  return (
    <div>
      <p>Lista de Atividades</p>
      <div>
        <Label>
          <Input required type="text" onChange={(e) => { setTodo(e.target.value); }} />
          <Span>Senha</Span>
        </Label>
        {/* <input type="text" onChange={(e) =>
            { setTodo(e.target.value); }} placeholder="digite para filtrar" /> */}
        <button type="button" onClick={(e) => handleAddTodo(e)}>Adicionar</button>
      </div>
    </div>
  );
}
