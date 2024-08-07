import { useSelector, useDispatch } from 'react-redux';

import { StyledForm, StyledIconAddContact } from './ContactForm.styled';
import { Button, Input, InputField } from 'components';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';
import Notiflix from 'notiflix';

Notiflix.Notify.init({
  width: '300px',
  position: 'center-top',
  success: {
    background: '#a06cd5',
  },
  warning: {
    background: '#fb8e5d',
  },
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const onSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    const isContactExists = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (!isContactExists) {
      dispatch(addContact({ name, number }));
      Notiflix.Notify.success(`Contact ${name} added successfully`);
      form.reset();
    } else {
      Notiflix.Notify.warning(`${name} is already in contacts`);
    }
  };

  return (
    <StyledForm onSubmit={onSubmit}>
      <InputField label="Name">
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          placeholder="Name"
          required
        />
      </InputField>

      <InputField label="Number">
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with+"
          placeholder="Number"
          required
        />
      </InputField>

      <Button type="submit" aria-label="add contact">
        Add contact <StyledIconAddContact />
      </Button>
    </StyledForm>
  );
};
