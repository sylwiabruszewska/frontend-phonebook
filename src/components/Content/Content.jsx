import PropTypes from 'prop-types';
import { StyledContent } from './Content.styled';

export const Content = ({ children }) => {
  return <StyledContent>{children}</StyledContent>;
};

Content.propTypes = {
  children: PropTypes.node,
};
