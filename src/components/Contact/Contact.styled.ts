import styled from "styled-components";
import { LuUserSquare2 } from "react-icons/lu";

export const StyledItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 10px;
  border-radius: 10px;
  color: var(--gray-dark);

  &:hover {
    background-color: var(--background-color);
  }
`;

export const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  span {
    font-weight: 500;
    text-transform: capitalize;
    font-size: 1.2rem;
  }

  a {
    text-decoration: none;
    color: var(--gray);
    display: block;
  }
`;

export const StyledIcon = styled(LuUserSquare2)`
  color: var(--primary-color);
  font-size: 40px;
`;

export const StyledIconMenu = styled.div`
  color: var(--gray);
  font-size: 20px;

  &:hover {
    color: var(--secondary-color);
  }
`;

export const StyledBoxItem = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`;
