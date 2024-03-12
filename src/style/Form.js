import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 320px;

  gap: 12px;

  @media screen and (min-width: 520px) {
    & {
      align-items: flex-start;
    }
  }
`;

export default Form;
