import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BiSolidLockAlt } from 'react-icons/bi';

import icon from 'images/check.png';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const StyledFormTitle = styled.h3`
  font-size: 1.2rem;
  color: #a06cd5;
  font-weight: 500;
`;

export const StyledIcon = styled(BiSolidLockAlt)`
  font-size: 2rem;
  color: #a06cd5;
`;

export const StyledLink = styled(Link)`
  font-weight: 500;
  color: #513072;
  margin-left: 0.2rem;

  &:hover {
    color: #a06cd5;
  }
`;

export const StyledCheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  margin-top: 10px;

  input[type='checkbox'] {
    appearance: none;
    width: 20px;
    height: 20px;
    border: 2px solid #a06cd5;
    border-radius: 4px;
    margin-right: 10px;
    cursor: pointer;
  }

  input[type='checkbox']:checked {
    background-color: #a06cd5;
    background-image: url(${icon});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 80%;
  }
`;
