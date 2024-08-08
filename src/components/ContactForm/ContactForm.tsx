import Notiflix from "notiflix";
import { useSelector } from "react-redux";

import { StyledForm, StyledIconAddContact } from "./ContactForm.styled";
import { Button } from "@components/Button/Button";
import { Input } from "@components/Input/Input";
import { addContact } from "redux/contacts/operations";
import { selectContacts } from "redux/contacts/selectors";
import { useAppDispatch } from "@hooks/useAppDispatch";

export const ContactForm = () => {
  const dispatch = useAppDispatch();
  const contacts = useSelector(selectContacts);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const phone = (form.elements.namedItem("phone") as HTMLInputElement).value;

    const isContactExists = contacts.some(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (!isContactExists) {
      dispatch(addContact({ name, phone }))
        .unwrap()
        .then(() =>
          Notiflix.Notify.success(`Contact ${name} added successfully`)
        )
        .catch((error) => {
          Notiflix.Notify.warning(error);
        });

      form.reset();
    } else {
      Notiflix.Notify.warning(`${name} is already in contacts`);
    }
  };

  return (
    <StyledForm onSubmit={onSubmit}>
      <Input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces."
        placeholder="Name"
        label="Name"
      />

      <Input
        type="tel"
        name="phone"
        pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
        title="Phone number must be digits."
        placeholder="Phone number"
        label="Phone number"
      />

      <Button type="submit" aria-label="add contact">
        Add contact <StyledIconAddContact />
      </Button>
    </StyledForm>
  );
};
