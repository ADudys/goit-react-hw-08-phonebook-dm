import styled from 'styled-components';

const Button = styled.button`
  height: 32px;
  padding: 0 15px;
  border-radius: 15px;
  border-color: white;
  background-color: darkcyan;
  color: white;
  transition-property: background-color, color;
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: darkgreen;
  }
`;
export default Button;
