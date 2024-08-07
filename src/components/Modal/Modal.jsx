import { useSelector } from 'react-redux';

import { ContactDetails, ButtonIcon, Button } from 'components';
import { useModal } from 'hooks';
import { selectModalContent } from 'redux/modal/selectors.js';
import {
  StyledOverlay,
  StyledIconClose,
  StyledBoxForButton,
  StyledModalTitle,
  StyledModalBox,
  StyledModalContent,
  StyledModalContainer,
} from './Modal.styled.js';

///////// for modal - to check
import { useDispatch } from 'react-redux';
import {
  selectContacts,
  selectContactDetailsMemoized,
} from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/operations';
import Notiflix from 'notiflix';
////////

export const Modal = () => {
  const { handleCloseModal } = useModal();

  //////// for modal - to check
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const contactDetails = useSelector(selectContactDetailsMemoized);
  const contactId = contactDetails?.id;
  ////////

  const modalData = useSelector(selectModalContent);

  const handleConfirm = () => {
    switch (modalData.confirmButtonAction) {
      case 'handleContactDelete':
        return handleContactDelete();
      default:
        return null;
    }
  };

  const handleContactDelete = () => {
    const contactToDelete = contacts.find(contact => contact.id === contactId);

    if (contactToDelete) {
      dispatch(deleteContact(contactId));
      handleCloseModal();
      Notiflix.Notify.success(`${contactToDelete.name} has been removed`);
    }
  };

  const handleOverlayClick = event => {
    if (event.target === event.currentTarget) {
      handleCloseModal();
    }
  };

  const handleCloseButton = () => {
    handleCloseModal();
  };

  const renderComponent = () => {
    switch (modalData.component) {
      case 'ContactDetails':
        return <ContactDetails />;
      default:
        return null;
    }
  };

  return (
    <StyledOverlay onClick={handleOverlayClick}>
      <StyledModalContainer
        role="dialog"
        aria-labelledby="modal-title"
        aria-describedby="modal-content"
      >
        <StyledBoxForButton>
          <ButtonIcon
            type="button"
            handler={handleCloseButton}
            aria-label="close modal"
          >
            <StyledIconClose />
          </ButtonIcon>
        </StyledBoxForButton>
        <StyledModalBox>
          <StyledModalTitle id="modal-title">
            {modalData.title}
          </StyledModalTitle>
          <StyledModalContent id="modal-content">
            {modalData.content}
          </StyledModalContent>
          {modalData.component && renderComponent()}
          {modalData.showConfirmButton && (
            <Button
              type="button"
              handler={handleConfirm}
              aria-label="confirm action"
            >
              {modalData.confirmButtonText}
            </Button>
          )}
        </StyledModalBox>
      </StyledModalContainer>
    </StyledOverlay>
  );
};
