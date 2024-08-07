import styled from 'styled-components';

export const StyledFilterInput = styled.input`
  display: block;
  padding: 5px;
  outline: 1px solid #dddddd;
  border: 0;
  margin: 0 10px;
  width: 300px;
  height: 40px;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
  color: #666666;
  font-weight: 600;
  transition: background-color 0.3s ease;

  @media (min-width: 1200px) {
    width: 500px;
  }

  &:focus {
    outline: 2px solid #a06cd5;
  }
`;
