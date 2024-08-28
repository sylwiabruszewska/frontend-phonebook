import Notiflix from "notiflix";
import { useState } from "react";
import { useLocation } from "react-router-dom";

import { Button } from "@components/Button/Button";
import { Input } from "@components/Input/Input";
import { openModal } from "@redux/modal/modalSlice";
import { useAppDispatch } from "@hooks/useAppDispatch";
import { logIn, register } from "@redux/auth/operations";

import {
  StyledForm,
  StyledFormTitle,
  StyledIcon,
  StyledLink,
  StyledCheckboxLabel,
} from "./AuthForm.styled";

export const AuthForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAgreed, setIsAgreed] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const location = useLocation().pathname;
  const dispatch = useAppDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (location === "/register") {
      if (!isAgreed) {
        Notiflix.Notify.warning(
          "Please agree to the Terms and Privacy Policy."
        );
        return;
      }

      dispatch(register({ name, email, password }))
        .unwrap()
        .then(() => {
          setRegistrationSuccess(true);
        })
        .catch((error) => {
          Notiflix.Notify.failure(error || "Login failed");
        });
    }

    if (location === "/login") {
      dispatch(logIn({ email, password }))
        .unwrap()
        .catch((error) => {
          Notiflix.Notify.failure(error || "Login failed");
        });
    }
  };

  const openModalOnClick = () => {
    dispatch(openModal("info"));
  };

  return (
    <>
      {registrationSuccess ? (
        <div>
          Registration successful! Please check your email to confirm your
          registration.
        </div>
      ) : (
        <div>
          <StyledForm onSubmit={handleSubmit}>
            <StyledIcon />
            <StyledFormTitle>
              {location === "/login" ? "Sign in" : "Sign up"}
            </StyledFormTitle>

            {location === "/register" ? (
              <Input
                type="text"
                name="name"
                value={name}
                placeholder="Name"
                title="Name may contain only letters, apostrophe, dash and spaces."
                pattern="^[A-Za-z\s'\-]+$"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setName(e.target.value)
                }
                label="Name"
              />
            ) : null}

            <Input
              type="email"
              name="email"
              value={email}
              placeholder="Email"
              pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
              title="The email must be a valid email address in the following format: characters@characters.domain."
              autoComplete="username"
              onChange={(e) => setEmail(e.target.value)}
              label="Email"
            />

            <Input
              type="password"
              name="password"
              value={password}
              placeholder="Password"
              title="The password must be at least 8 characters long."
              pattern=".{8,}"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
              label="Password"
            />

            {location === "/register" ? (
              <StyledCheckboxLabel htmlFor="terms-checkbox">
                <input
                  type="checkbox"
                  checked={isAgreed}
                  id="terms-checkbox"
                  onChange={() => setIsAgreed(!isAgreed)}
                />
                <div>
                  Do you accept our
                  <span
                    aria-label="Learn more about our Terms and Privacy Policy"
                    onClick={(e) => {
                      e.preventDefault();
                      openModalOnClick();
                    }}
                  >
                    Terms and Privacy Policy?
                  </span>
                </div>
              </StyledCheckboxLabel>
            ) : null}

            {location === "/register" ? (
              <>
                <Button type="submit">Sign Up and Stay Connected!</Button>
                <p>
                  <span>Are you already in? </span>
                  <StyledLink to="/login">Sign in</StyledLink>
                </p>
              </>
            ) : (
              <>
                <Button type="submit">Let's Get Contacted!</Button>
                <p>
                  <span>New here? </span>
                  <StyledLink to="/register" aria-label="register">
                    Sign up
                  </StyledLink>
                </p>
              </>
            )}
          </StyledForm>
        </div>
      )}
    </>
  );
};
