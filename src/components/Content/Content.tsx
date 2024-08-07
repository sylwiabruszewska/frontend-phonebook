import { ContentProps } from "@typings/components";
import { StyledContent } from "./Content.styled";

export const Content: React.FC<ContentProps> = ({ children }) => {
  return <StyledContent>{children}</StyledContent>;
};
