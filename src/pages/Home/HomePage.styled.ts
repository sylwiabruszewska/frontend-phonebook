import styled from "styled-components";

export const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 10px;
  width: 100%;

  @media (min-width: 1200px) {
    flex-direction: row-reverse;
    justify-content: space-between;
    gap: 1rem;
    width: 80%;
  }

  div {
    display: flex;
    align-items: center;
    flex-direction: column;

    @media (min-width: 1200px) {
      padding: 0px 20px;
      width: 60%;
    }
  }

  h1 {
    font-family: "Galada", sans-serif;
    color: #fb8e5d;
    margin: 2rem 0;
    font-size: 3rem;
    text-align: center;
  }
`;

export const StyledImg = styled.img`
  width: 264px;
  height: 264px;

  @media (min-width: 768px) {
    width: 400px;
    height: 400px;
  }

  @media (min-width: 1200px) {
    width: 500px;
    height: 500px;
  }
`;

export const StyledList = styled.ul`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (min-width: 1200px) {
    flex-direction: row;
    gap: 20px;
    margin-bottom: 4rem;
  }
`;

export const StyledListItem = styled.li`
  flex: 0 0 1;
  margin-bottom: 1.2rem;
  text-align: center;

  span {
    font-size: 2rem;
    text-align: center;
    color: #a06cd5;
    margin-bottom: 0.6rem;
  }

  h2 {
    margin-bottom: 1rem;
    font-size: 1rem;
  }
`;

export const StyledParagraph = styled.p`
  margin: 1.2rem 0;

  a {
    font-weight: 500;
    color: #513072;

    &:hover {
      color: #a06cd5;
    }
  }
`;
