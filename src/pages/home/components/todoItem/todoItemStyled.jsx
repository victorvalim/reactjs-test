/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Item = styled.div`
cursor:pointer;
background-color: ${((props) => (props.id % 2 === 0 ? '#ffffff' : '#808080'))};

`;
export const DoneContainer = styled.div`
span {
  color:${((props) => (props.done ? 'green' : 'red'))};
}
`;

export const ButtonContainer = styled.div`
button {
  display:${((props) => (props.done ? 'none' : 'inline'))};
}
`;
