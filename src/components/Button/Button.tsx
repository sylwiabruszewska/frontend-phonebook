import { ButtonProps } from "@typings/components";
import { StyledButton } from "./Button.styled";

export const Button: React.FC<ButtonProps> = ({
  type = "button",
  onClick,
  children,
}) => {
  return (
    <StyledButton type={type} onClick={onClick}>
      {children}
    </StyledButton>
  );
};
