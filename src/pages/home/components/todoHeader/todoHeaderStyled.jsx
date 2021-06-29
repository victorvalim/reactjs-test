import styled from 'styled-components';

export const Label = styled.label`
position:relative;
padding-top:20px;
margin-bottom:5px;
input:valid + span, input:focus + span {
  top:10px;
  font-size:12px;
  color: #222;
  border-color: black;
  background: white;
}
input:valid, input:focus{
  transition-delay:0.1s;
  border-color: #222;
}
`;

export const Input = styled.input`

font-size:14px;
-webkit-appearance:none;
-ms-appearance:none;
-moz-apprearance:none;
appearance: none;
background: none;
padding:12px;
border-radius:3px;
width: 250px;
outline:none;
border: 2px solid #ddd ;
transition: border-color 0.4s ease;
`;

export const Span = styled.span`
padding-right: 2px;
padding-left: 2px;
position:absolute;
color:white;
font-size:1rem;
left:12px;
top:calc(50% + 10px);
color:#999;
transform:translateY(-50%);
transition: top 0.4s ease , font-size 0.4s ease , color 0.4s ease ;
`;
