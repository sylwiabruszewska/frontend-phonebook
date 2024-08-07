import styled from 'styled-components';

import { LuUserSquare2 } from 'react-icons/lu';
import { RiEdit2Fill } from 'react-icons/ri';
import { FaTrashAlt } from 'react-icons/fa';

export const StyledIcon = styled(LuUserSquare2)`
  color: #a06cd5;
  font-size: 40px;
`;

export const StyledIconDelete = styled(FaTrashAlt)`
  color: gray;
  font-size: 20px;

  &:hover {
    color: #fb8e5d;
    cursor: pointer;
  }
`;

export const StyledIconEdit = styled(RiEdit2Fill)`
  color: gray;
  font-size: 20px;

  &:hover {
    color: #fb8e5d;
    cursor: pointer;
  }
`;

export const StyledItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 10px;
  background-color: #fff;
  border-radius: 10px;
  color: #313131;

  &:hover {
    background-color: #f4f4f2;
  }
`;

export const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const StyledBoxItem = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`;

export const StyledName = styled.p`
  font-weight: 500;
  text-transform: capitalize;
  font-size: 1.2rem;
`;

export const StyledNumber = styled.a`
  text-decoration: none;
  color: gray;
  display: block;
`;
