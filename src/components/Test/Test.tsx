import { Button } from "@components/Button/Button";
import { useAppDispatch } from "@hooks/useAppDispatch";
import { logIn } from "@redux/auth/operations";

import { StyledBox } from "./Test.styled";

export const TestButton = () => {
  const dispatch = useAppDispatch();
  const email = import.meta.env.VITE_TEST_EMAIL;
  const password = import.meta.env.VITE_TEST_PASSWORD;

  const handleBtnClick = () => {
    dispatch(logIn({ email, password }));
  };

  return (
    <StyledBox>
      <Button type="submit" onClick={() => handleBtnClick()}>
        Sign in with test account
      </Button>
    </StyledBox>
  );
};
