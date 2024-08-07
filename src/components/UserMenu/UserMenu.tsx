import { useSelector } from "react-redux";
import { FiLogOut } from "react-icons/fi";

import { StyledBox, StyledNameSpan } from "./UserMenu.styled";
import { Button } from "@components/Button/Button";
import { selectUser } from "@redux/auth/selectors";
import { logOut } from "@redux/auth/operations";
import { useAppDispatch } from "@hooks/useAppDispatch";

export const UserMenu = () => {
  const dispatch = useAppDispatch();
  const user = useSelector(selectUser);

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <StyledBox>
      {user && (
        <span>
          Nice to see you, <StyledNameSpan>{user.name}</StyledNameSpan>
        </span>
      )}

      <Button type="button" onClick={handleLogOut}>
        Logout <FiLogOut />
      </Button>
    </StyledBox>
  );
};
