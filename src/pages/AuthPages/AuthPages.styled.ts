import styled from 'styled-components';

export const StyledImg = styled.img`
  width: 80%;
  height: auto;
  object-fit: contain;

  @media (min-width: 768px) {
    width: 400px;
  }

  @media (min-width: 1200px) {
    width: 500px;
  }
`;

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  width: 100%;

  @media (min-width: 1200px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 50px;
  }
`;
