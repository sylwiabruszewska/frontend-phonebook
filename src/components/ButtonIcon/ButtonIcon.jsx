import PropTypes from 'prop-types';

import { StyledButton } from './ButtonIcon.styled';

export const ButtonIcon = props => {
  const { type = 'button', handler = null, children, ariaLabel } = props;

  return (
    <StyledButton type={type} onClick={handler} aria-label={ariaLabel}>
      {children}
    </StyledButton>
  );
};

ButtonIcon.propTypes = {
  type: PropTypes.string.isRequired,
  handler: PropTypes.func,
  children: PropTypes.node,
  ariaLabel: PropTypes.string,
};
