import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  color: gray;
  font-size: 1.3rem;
  text-transform: uppercase;
  letter-spacing: 0.2rem;

  &.active,
  &:hover {
    color: #fb8e5d;
  }
`;

export const StyledLogo = styled(Link)`
  font-size: 2rem;
  color: gray;
  text-transform: lowercase;
  margin-right: 20px;
`;

export const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

export const StyledBox = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
  }
`;
