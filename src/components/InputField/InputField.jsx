import PropTypes from 'prop-types';

import { StyledLabel } from './InputField.styled';

export const InputField = ({ label, children: input }) => {
  return (
    <StyledLabel>
      {label}
      {input}
    </StyledLabel>
  );
};

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
