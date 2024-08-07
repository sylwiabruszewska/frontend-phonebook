import styled from 'styled-components';

export const StyledContent = styled.div`
  color: #313131;
  width: 100%;
  height: 90vh;
  padding: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;

  @media screen and (min-height: 101vh) {
    align-items: flex-start;
  }
  height: auto;
  padding: 50px 20px;
`;
