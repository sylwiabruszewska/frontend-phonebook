import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import photo from "@assets/404.webp";
import { Button } from "@components/Button/Button";
import {
  StyledImg,
  StyledHeading,
  StyledText,
  StyledWrapper,
} from "./NotFound.styled";

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Phonebook App - Page not found</title>
      </Helmet>

      <StyledWrapper>
        <div>
          <StyledHeading>404 - Whoops! Page not found.</StyledHeading>
          <StyledText>
            Sorry, the page you are looking for does not exist.
          </StyledText>

          <Link to="/">
            <Button type="button">Go Home</Button>
          </Link>
        </div>
        <StyledImg src={photo} alt="" role="presentation" aria-hidden="true" />
      </StyledWrapper>
    </>
  );
};

export default NotFound;
