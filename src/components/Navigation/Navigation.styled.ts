import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";

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

  a {
    color: var(--gray);
  }
`;

export const StyledLogo = styled(Link)`
  text-transform: lowercase;
  font-size: 2rem;
`;

export const StyledBox = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
  }
`;

export const StyledLink = styled(NavLink)`
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  font-size: 1.2rem;

  &.active,
  &:hover {
    color: var(--secondary-color);
  }
`;
