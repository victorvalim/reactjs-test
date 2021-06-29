/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import {
  ButtonContainer, DeleteButton, DoneContainer, Item,
} from './todoItemStyled';
import { TodoContext } from '../../../../contexts/todo.context';

export default function Todo({ id, description, done }) {
  const todoContext = useContext(TodoContext);
  function doneHandler(e) {
    e.preventDefault();
    todoContext.dispatch({ type: 'done', payloadID: id, payloadDescription: description });
  }

  function deleteHandler(e) {
    e.preventDefault();
    todoContext.dispatch({ type: 'delete', payloadID: id });
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
      <ButtonContainer done={done}>
        <button onClick={(e) => doneHandler(e, id, description)} type="button">Ok</button>
      </ButtonContainer>
      <DeleteButton onClick={(e) => deleteHandler(e, id)} type="button">Delete</DeleteButton>
    </div>
  );
}
