import styled from "styled-components";
import { BiSearchAlt } from "react-icons/bi";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

export const StyledHeading = styled.h1`
  color: gray;
  font-size: 2rem;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  font-weight: 500;
  /* margin: 1rem 0 2.6rem; */
`;

export const StyledText = styled.p`
  color: #a06cd5;
  font-weight: 500;
  font-size: 1.2rem;
`;

export const StyledBook = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 20px;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  @media (min-width: 1200px) {
    gap: 50px;
  }
`;

export const StyledDivider = styled.div`
  background-color: #f4f4f2;
  width: 2px;
`;

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const StyledImg = styled.img`
  width: auto;
  height: 200px;
  object-fit: contain;
  border-radius: 50%;
  background-color: #f4f4f2;
  margin-bottom: 1rem;
`;

export const StyledIconSearch = styled(BiSearchAlt)`
  font-size: 1.5rem;
  color: gray;
`;

export const StyledBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

export const StyledButtonUp = styled(BsFillArrowUpCircleFill)`
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 999;
  font-size: 2.5rem;
  color: #a06cd5;
  transition: transform 0.3s ease-in;

  &:hover {
    color: #fb8e5d;
    transform: translateY(-10px);
    cursor: pointer;
  }
`;

export const StyledLabel = styled.span`
  display: none;
`;

export const StyledContactsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;
