import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { BsStars } from "react-icons/bs";
import { FaCloud, FaBook } from "react-icons/fa";

import {
  StyledHome,
  StyledList,
  StyledListItem,
  StyledParagraph,
  StyledImg,
} from "./HomePage.styled";
import { Button } from "@components/Button/Button";
import photo from "@assets/homepage.webp";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Phonebook App</title>
      </Helmet>
      <StyledHome>
        <StyledImg
          src={photo}
          alt="A woman and a man standing and talking with a telephone book in the background."
          role="presentation"
          aria-hidden="true"
        />
        <div>
          <h1>Phonebook App</h1>

          <StyledList>
            <StyledListItem>
              <span>
                <FaBook />
              </span>
              <h2>Keep your contacts close</h2>
              <p>
                No more worries about losing important phone numbers. Stay
                connected with ease.
              </p>
            </StyledListItem>

            <StyledListItem>
              <span>
                <BsStars />
              </span>
              <h2>Simplified Contact Management</h2>
              <p>
                Our user-friendly interface makes it simple to add and manage
                your contacts with just a few clicks.
              </p>
            </StyledListItem>

            <StyledListItem>
              <span>
                <FaCloud />
              </span>
              <h2>Access Your Contacts Anywhere</h2>
              <p>
                Create your account and securely store all your contacts in one
                place.
              </p>
            </StyledListItem>
          </StyledList>

          <Link to="/register">
            <Button type="button" aria-label="register">
              Get Started Now
            </Button>
          </Link>

          <StyledParagraph>
            <span>Already a member? </span>
            <Link to="/login" aria-label="login">
              Sign in
            </Link>
          </StyledParagraph>
        </div>
      </StyledHome>
    </>
  );
};

export default Home;
