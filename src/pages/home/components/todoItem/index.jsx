/* eslint-disable react/prop-types */
import React from 'react';
import { Item } from './todoItemStyled';

export default function Todo({ id, description, done }) {
  return (
    <div>
      <div>
        <Item>
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
        <button type="button">Ok</button>
      </div>
    </div>
  );
}
