import Notiflix from "notiflix";
import { useSelector } from "react-redux";

import { StyledForm } from "./ContactDetails.styled";
import { Button } from "@components/Button/Button";
import { Input } from "@components/Input/Input";
import { editContact } from "@redux/contacts/operations";
import {
  selectContactDetails,
  selectContacts,
} from "@redux/contacts/selectors";
import { useAppDispatch } from "@hooks/useAppDispatch";
import { useEffect, useState } from "react";
import { useModal } from "@hooks/useModal";

export const ContactDetails = () => {
  const dispatch = useAppDispatch();
  const contacts = useSelector(selectContacts);
  const contactDetails = useSelector(selectContactDetails);
  const { handleCloseModal } = useModal();

  const [name, setName] = useState(contactDetails?.name || "");
  const [phone, setPhone] = useState(contactDetails?.phone || "");

  useEffect(() => {
    if (contactDetails) {
      setName(contactDetails.name);
      setPhone(contactDetails.phone);
    }
  }, [contactDetails]);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const phone = (form.elements.namedItem("phone") as HTMLInputElement).value;

    const isContactExists = contacts.some(
      (contact) =>
        contact.name.toLowerCase() === name.toLowerCase() &&
        contact._id !== contactDetails?.id
    );

    if (!isContactExists && contactDetails) {
      try {
        await dispatch(
          editContact({
            contactId: contactDetails.id,
            updatedData: { name, phone },
          })
        ).unwrap();
        Notiflix.Notify.success(`Contact ${name} edited successfully`);
        handleCloseModal();
      } catch (error) {
        Notiflix.Notify.failure(`Failed to update contact: ${error}`);
      }
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
      ></Input>

      <Input
        type="tel"
        name="phone"
        pattern="\+?\d{1,4}[\-.\s]?\(?\d{1,3}\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
        title="Phone
        number must be digits."
        placeholder="Phone number"
        label="Phone number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      ></Input>

      <Button type="submit">Save</Button>
    </StyledForm>
  );
};
