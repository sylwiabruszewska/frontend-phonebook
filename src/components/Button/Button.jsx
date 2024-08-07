import PropTypes from 'prop-types';

import { StyledButton } from './Button.styled';

export const Button = props => {
  const { type = 'button', handler = null, children } = props;

  return (
    <StyledButton type={type} onClick={handler}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string.isRequired,
  handler: PropTypes.func,
};
