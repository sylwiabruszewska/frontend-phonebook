import styled from "styled-components";

export const StyledContainer = styled.div`
  color: var(--gray-dark);
  background-color: var(--white-color);
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 90%;

  @media (min-width: 768px) {
    min-width: 80%;
  }

  @media (min-width: 1200px) {
    min-width: 450px;
  }
`;
