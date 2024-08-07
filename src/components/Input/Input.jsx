import PropTypes from 'prop-types';
import { StyledInput, ErrorMessage } from './Input.styled';

export const Input = props => {
  const {
    type,
    name,
    pattern,
    title,
    placeholder,
    required,
    onChange = null,
    defaultValue = null,
    autocomplete = null,
  } = props;

  return (
    <>
      <StyledInput
        type={type}
        name={name}
        title={title}
        placeholder={placeholder}
        required={required}
        pattern={pattern}
        onChange={onChange}
        defaultValue={defaultValue}
        autoComplete={autocomplete}
      />
      <ErrorMessage>{title}</ErrorMessage>
    </>
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  pattern: PropTypes.string,
  title: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
  onChange: PropTypes.func,
  defaultValue: PropTypes.string,
  autocomplete: PropTypes.string,
};
