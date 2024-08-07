import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 5px 20px;
  font-size: 16px;
  border: 0;
  border-radius: 8px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  transition: background-color 0.3s ease;
  height: 40px;
  width: fit-content;

  background-color: var(--primary-color);
  color: var(--white-color);

  &:hover {
    background-color: var(--secondary-color);
  }
`;
