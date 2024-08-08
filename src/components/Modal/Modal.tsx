import { useSelector } from "react-redux";

import { Button } from "@components/Button/Button";
import { ButtonIcon } from "@components/ButtonIcon/ButtonIcon.js";

import { useModal } from "@hooks/useModal";
import { selectModalType } from "@redux/modal/selectors";
import { selectContactDetails } from "@redux/contacts/selectors.js";
import {
  StyledOverlay,
  StyledIconClose,
  StyledBoxForButton,
  StyledModalTitle,
  StyledModalBox,
  StyledModalContent,
  StyledModalContainer,
} from "./Modal.styled.js";
import { ContactDetails } from "@components/ContactDetails/ContactDetails.js";
import { useAppDispatch } from "@hooks/useAppDispatch.js";
import { deleteContact } from "@redux/contacts/operations.js";

export const Modal = () => {
  const { handleCloseModal, modalRef } = useModal();
  const modalType = useSelector(selectModalType);
  const contact = useSelector(selectContactDetails);
  const dispatch = useAppDispatch();

  const handleCloseButton = () => {
    handleCloseModal();
  };

  const handleContactDelete = (contactId: string) => {
    dispatch(deleteContact(contactId));
    handleCloseModal();
  };

  const renderContent = () => {
    switch (modalType) {
      case "info":
        return <p>Terms of Service and Privacy Policy</p>;
      case "edit":
        return (
          <>
            <StyledModalTitle>Edit contact</StyledModalTitle>
            <ContactDetails />
          </>
        );
      case "delete":
        return (
          <>
            <StyledModalTitle>Delete contact</StyledModalTitle>

            {contact && (
              <>
                <StyledModalContent>
                  `Are you sure you want to delete ${contact.name} from your
                  contact list?`
                </StyledModalContent>
                <Button
                  type="button"
                  onClick={() => handleContactDelete(contact.id)}
                >
                  Delete
                </Button>
              </>
            )}
          </>
        );
      default:
        return null;
    }
  };

  return (
    <StyledOverlay>
      <StyledModalContainer
        ref={modalRef}
        role="dialog"
        aria-labelledby="modal-title"
        aria-describedby="modal-content"
      >
        <StyledBoxForButton>
          <ButtonIcon onClick={handleCloseButton} ariaLabel="close modal">
            <StyledIconClose />
          </ButtonIcon>
        </StyledBoxForButton>
        <StyledModalBox>{renderContent()}</StyledModalBox>
      </StyledModalContainer>
    </StyledOverlay>
  );
};
