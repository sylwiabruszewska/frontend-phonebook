import { useState } from "react";
import Notiflix from "notiflix";
import { useSelector } from "react-redux";

import { StyledForm, StyledIconAddContact } from "./ContactForm.styled";
import { Button } from "@components/Button/Button";
import { Input } from "@components/Input/Input";
import { addContact } from "@redux/contacts/operations";
import { selectContacts } from "@redux/contacts/selectors";
import { useAppDispatch } from "@hooks/useAppDispatch";

export const ContactForm = () => {
  const dispatch = useAppDispatch();
  const contacts = useSelector(selectContacts);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isContactExists = contacts.some(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (!isContactExists) {
      dispatch(addContact({ name, phone }))
        .unwrap()
        .then(() =>
          Notiflix.Notify.success(`Contact ${name} added successfully`)
        )
        .then(() => {
          setName("");
          setPhone("");
        })
        .catch((error) => {
          Notiflix.Notify.warning(error);
        });
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
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <Input
        type="tel"
        name="phone"
        pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
        title="Phone number must be digits."
        placeholder="Phone number"
        label="Phone number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <Button type="submit" aria-label="add contact">
        Add contact <StyledIconAddContact />
      </Button>
    </StyledForm>
  );
};
