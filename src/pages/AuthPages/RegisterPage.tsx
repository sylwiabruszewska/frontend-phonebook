import { Helmet } from "react-helmet";

import { StyledWrapper, StyledImg } from "./AuthPages.styled";
import photo from "@assets/auth.webp";
import { Container } from "@components/Container/Container";
import { AuthForm } from "@components/AuthForm/AuthForm";

const RegisterPage = () => {
  return (
    <>
      <Helmet>
        <title>Phonebook App - Register</title>
      </Helmet>

      <StyledWrapper>
        <Container>
          <AuthForm />
        </Container>

        <StyledImg src={photo} alt="" role="presentation" aria-hidden="true" />
      </StyledWrapper>
    </>
  );
};

export default RegisterPage;
