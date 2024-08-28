import { InputProps } from "@typings/components";
import { StyledInput, StyledLabel, ErrorMessage } from "./Input.styled";

export const Input: React.FC<InputProps> = (props) => {
  const {
    type,
    name,
    pattern,
    title,
    placeholder,
    onChange,
    value = "",
    label,
    autoComplete,
  } = props;

  const id = `${name}-input`;

  return (
    <>
      <StyledLabel htmlFor="">{label}</StyledLabel>
      <StyledInput
        id={id}
        type={type}
        name={name}
        title={title}
        placeholder={placeholder}
        pattern={pattern}
        onChange={onChange}
        value={value}
        maxLength={40}
        autoComplete={autoComplete}
      />
      <ErrorMessage>{title}</ErrorMessage>
    </>
  );
};
