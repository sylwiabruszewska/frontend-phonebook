import styled from "styled-components";

export const ErrorMessage = styled.div`
  color: var(--error);
  display: none;
`;

export const StyledInput = styled.input`
  display: block;
  padding: 5px 10px;
  outline: 1px solid var(--light-gray);
  border: 0;
  margin: 0.6rem 0;
  width: 300px;
  background-color: var(--white-color);
  border-radius: 4px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
  color: var(--gray);
  font-weight: 600;
  transition: background-color 0.3s ease;
  height: 40px;

  &:focus {
    outline: 2px solid var(--primary-color);
  }
  &:not(:focus):not(:placeholder-shown):invalid {
    outline: 2px solid var(--error);
  }
  &:not(:focus):not(:placeholder-shown):valid {
    outline: 2px solid var(--valid);
  }

  &:not(:focus):not(:placeholder-shown):invalid + ${ErrorMessage} {
    display: block;
    max-width: 300px;
  }
`;

export const StyledLabel = styled.label`
  display: none;
`;
