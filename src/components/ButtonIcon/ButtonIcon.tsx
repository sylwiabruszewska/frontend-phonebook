import { ButtonIconProps } from "@typings/components";
import { StyledIconButton } from "./ButtonIcon.styled";

export const ButtonIcon: React.FC<ButtonIconProps> = (props) => {
  const { onClick, children, ariaLabel } = props;

  return (
    <StyledIconButton type="button" onClick={onClick} aria-label={ariaLabel}>
      {children}
    </StyledIconButton>
  );
};
