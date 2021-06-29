/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { DoneContainer, Item } from './todoItemStyled';
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
        <DoneContainer done={done}>
          Feito?
          <span>{done === true ? 'Sim' : 'Não'}</span>
        </DoneContainer>
      </div>
      <div>
        <button onClick={(e) => doneHandler(e, id, description)} type="button">Ok</button>
      </div>
    </div>
  );
}
