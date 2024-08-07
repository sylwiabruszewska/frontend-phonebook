import { useSelector, useDispatch } from 'react-redux';

import { StyledForm } from './ContactDetails.styled';
import { Button, InputField, Input } from 'components';
import { editContact } from 'redux/contacts/operations';
import { selectContactDetails, selectContacts } from 'redux/contacts/selectors';
import { closeModal } from 'redux/modal/modalSlice';
import Notiflix from 'notiflix';

Notiflix.Notify.init({
  width: '300px',
  position: 'center-top',
  timeout: 5000,
  success: {
    background: '#a06cd5',
  },
  warning: {
    background: '#fb8e5d',
  },
});

export const ContactDetails = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const contactDetails = useSelector(selectContactDetails);

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  const onSubmit = async event => {
    event.preventDefault();
    const form = event.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    const isContactExists = contacts.some(
      contact =>
        contact.name.toLowerCase() === name.toLowerCase() &&
        contact.id !== contactDetails.id
    );

    if (!isContactExists) {
      dispatch(
        editContact({
          contactId: contactDetails.id,
          contactName: name,
          contactNumber: number,
        })
      );

      Notiflix.Notify.success(`Contact ${name} edited successfully`);
      handleCloseModal();
    } else {
      Notiflix.Notify.warning(`${name} is already in contacts`);
    }
  };

  return (
    <StyledForm onSubmit={onSubmit}>
      <InputField label={'Name'}>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          placeholder="Name"
          defaultValue={contactDetails.name}
          required
        ></Input>
      </InputField>
      <InputField label="Number">
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}[\-.\s]?\(?\d{1,3}\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
          title="Phone
        number must be digits and can contain spaces, dashes, parentheses and
        can start with+"
          placeholder="Number"
          defaultValue={contactDetails.number}
          required
        ></Input>
      </InputField>

      <Button type="submit">Save</Button>
    </StyledForm>
  );
};
