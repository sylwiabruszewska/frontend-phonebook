import { useSelector } from "react-redux";

import { UserMenu } from "@components/UserMenu/UserMenu";
import { selectIsLoggedIn } from "@redux/auth/selectors";
import {
  StyledLink,
  StyledLogo,
  StyledNav,
  StyledBox,
} from "./Navigation.styled";

export const Navigation = () => {
  const userIsLogged = useSelector(selectIsLoggedIn);

  return (
    <StyledNav>
      <StyledLogo to="/">Phonebook</StyledLogo>

      {userIsLogged ? (
        <UserMenu />
      ) : (
        <StyledBox>
          <StyledLink to="/register">Sign up</StyledLink>

          <StyledLink to="/login">Sign in</StyledLink>
        </StyledBox>
      )}
    </StyledNav>
  );
};
