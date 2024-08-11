import styled from 'styled-components';

export const StyledPagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const StyledPaginationButton = styled.button`
  color: var(--gray);
  background-color: var(--white-color);
  font-size: 16px;
  border: 1px solid var(--light-gray);
  border-radius: 8px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  transition: background-color 0.3s ease;
  height: 2rem;
  width: 2rem;

  &:hover,
  &.current-page {
    background-color: var(--primary-color);
    color: var(--white-color);
    border: 0;
  }

  &:disabled {
    background-color: var(--light-gray);
    color: var(--gray);
    cursor: not-allowed;
  }
`;
