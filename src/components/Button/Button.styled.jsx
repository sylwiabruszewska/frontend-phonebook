import styled, { css } from 'styled-components';

// BUTTON STYLES
const baseButtonStyles = css`
  padding: 5px 20px;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  transition: background-color 0.3s ease;
`;

export const StyledButton = styled.button`
  ${baseButtonStyles}
  height: 40px;
  width: fit-content;

  background-color: #a06cd5;
  border: 1px solid #dddddd;
  color: #fff;

  &:hover {
    background-color: #fb8e5d;
  }
`;
