import { Helmet } from "react-helmet";

import { StyledWrapper, StyledImg } from "./AuthPages.styled";
import photo from "@assets/auth.webp";
import { Container } from "@components/Container/Container";
import { AuthForm } from "@components/AuthForm/AuthForm";

const LoginPage = () => {
  return (
    <>
      <Helmet>
        <title>Phonebook App - Login</title>
      </Helmet>

      <StyledWrapper>
        <Container>
          <AuthForm />
        </Container>

        <StyledImg src={photo} role="presentation" aria-hidden="true" />
      </StyledWrapper>
    </>
  );
};

export default LoginPage;
