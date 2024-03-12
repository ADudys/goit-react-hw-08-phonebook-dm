import styled from 'styled-components';

const Input = styled.input`
  min-width: 200px;
  width: 95%;
  height: 30px;
  margin-bottom: 10px;
  padding: 0 15px;
  border-radius: 18px;
  outline: none;
  border: none;
  color: gb(131, 167, 149);

  &::placeholder {
    color: rgb(131, 167, 149);
  }
`;

export default Input;
