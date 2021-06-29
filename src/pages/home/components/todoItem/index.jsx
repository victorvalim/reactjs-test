/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { Item } from './todoItemStyled';
import { TodoContext } from '../../../../contexts/todo.context';

export default function Todo({ id, description, done }) {
  const todoContext = useContext(TodoContext);
  function doneHandler(e) {
    e.preventDefault();
    todoContext.dispatch({ type: 'done', payloadID: id, payloadDescription: description });
  }
  return (
    <div>
      <div>
        <Item id={id}>
          {id}
          {' '}
          -
          {' '}
          {description}
        </Item>
        <div>
          Feito?
          {done === true ? 'Sim' : 'Não'}
        </div>
      </div>
      <div>
        <button onClick={(e) => doneHandler(e, id, description)} type="button">Ok</button>
      </div>
    </div>
  );
}
