import styled from "styled-components";

import { AiFillCloseCircle } from "react-icons/ai";

export const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export const StyledModalContainer = styled.div`
  background-color: #fff;
  padding: 30px;
  border-radius: 10px;
  color: #313131;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;

  min-width: 300px;
  width: fit-content;
  max-width: 60%;
  max-height: 90%;
  position: relative;
  overflow-y: auto;
`;

export const StyledBoxForButton = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const StyledIconClose = styled(AiFillCloseCircle)`
  color: gray;
  font-size: 30px;

  &:hover {
    color: #fb8e5d;
    cursor: pointer;
  }
`;

export const StyledModalBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledModalTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 1.2rem;
`;

export const StyledModalContent = styled.p`
  margin-bottom: 1.2rem;
`;
