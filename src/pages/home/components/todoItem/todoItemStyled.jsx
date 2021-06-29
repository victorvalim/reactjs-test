/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Item = styled.div`
cursor:pointer;
background-color: ${((props) => (props.id % 2 === 0 ? '#ffffff' : '#808080'))}
`;
