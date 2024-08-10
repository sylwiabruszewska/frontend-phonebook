import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import { Container } from "@components/Container/Container";
import { ContactForm } from "@components/ContactForm/ContactForm";
import { ContactList } from "@components/ContactList/ContactList";
import { FilterInput } from "@components/FilterInput/FilterInput";
import { Pagination } from "@components/Pagination/Pagination";

import photo from "@assets/contacts.webp";
import {
  StyledHeading,
  StyledText,
  StyledBook,
  StyledDivider,
  StyledWrapper,
  StyledBox,
  StyledIconSearch,
  StyledImg,
  StyledButtonUp,
  StyledLabel,
  StyledContactsWrapper,
} from "./Contacts.styled";
import { selectTotalPages } from "@redux/contacts/selectors";
import { useSelector } from "react-redux";

const ContactsPage = () => {
  const [showButton, setShowButton] = useState(false);
  const totalPages = useSelector(selectTotalPages);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Helmet>
        <title>Phonebook App - Your contact list</title>
      </Helmet>

      <Container>
        <StyledBook>
          <StyledWrapper>
            <StyledHeading>Your Contacts</StyledHeading>

            <StyledContactsWrapper>
              <StyledBox>
                <label htmlFor="filter-input">
                  <StyledLabel>Search contacts:</StyledLabel>
                </label>
                <StyledIconSearch />
                <FilterInput />
              </StyledBox>

              <ContactList />

              {totalPages > 1 && <Pagination />}
            </StyledContactsWrapper>
          </StyledWrapper>
          <StyledDivider />
          <StyledWrapper>
            <StyledImg
              src={photo}
              alt=""
              role="presentation"
              aria-hidden="true"
            />
            <StyledText>Add a new contact here:</StyledText>
            <ContactForm />
          </StyledWrapper>
        </StyledBook>
      </Container>

      {showButton && <StyledButtonUp onClick={scrollToTop} />}
    </>
  );
};

export default ContactsPage;
