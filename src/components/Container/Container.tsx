import { ContainerProps } from "@typings/components";
import { StyledContainer } from "./Container.styled";

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};
