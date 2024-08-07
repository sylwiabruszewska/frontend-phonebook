import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { ButtonIcon } from 'components';
import { openModal } from 'redux/modal/modalSlice';
import { setContactDetails } from 'redux/contacts/contactsSlice';
import {
  StyledItem,
  StyledBox,
  StyledIcon,
  StyledBoxItem,
  StyledName,
  StyledNumber,
  StyledIconEdit,
  StyledIconDelete,
} from './Contact.styled';

export const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const contact = {
    id,
    name,
    number,
  };

  const handleContactEdit = () => {
    const modalData = {
      title: 'Edit contact',
      showConfirmButton: false,
      component: 'ContactDetails',
    };

    dispatch(setContactDetails(contact));
    dispatch(openModal(modalData));
  };

  const handleContactDelete = () => {
    const modalData = {
      title: 'Delete contact',
      content: `Are you sure you want to delete ${contact.name} from your contact list?`,
      showConfirmButton: true,
      confirmButtonText: 'Delete',
      confirmButtonAction: 'handleContactDelete',
    };

    dispatch(setContactDetails(contact));
    dispatch(openModal(modalData));
  };

  return (
    <StyledItem>
      <StyledBoxItem>
        <StyledIcon />

        <StyledBox>
          <StyledName>{name}</StyledName>
          <StyledNumber href={`tel:${number}`}>+{number}</StyledNumber>
        </StyledBox>
      </StyledBoxItem>
      <div>
        <ButtonIcon
          type="button"
          handler={() => handleContactEdit()}
          aria-label="edit contact"
        >
          <StyledIconEdit />
        </ButtonIcon>
        <ButtonIcon
          type="button"
          handler={() => handleContactDelete()}
          aria-label="delete contact"
        >
          <StyledIconDelete />
        </ButtonIcon>
      </div>
    </StyledItem>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
