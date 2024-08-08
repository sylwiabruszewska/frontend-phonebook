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
import { closeModal } from "@redux/modal/modalSlice";
import { useAppDispatch } from "@hooks/useAppDispatch";

export const ContactDetails = () => {
  const dispatch = useAppDispatch();
  const contacts = useSelector(selectContacts);
  const contactDetails = useSelector(selectContactDetails);

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;

    const isContactExists = contacts.some(
      (contact) =>
        contact.name.toLowerCase() === name.toLowerCase() &&
        contact._id !== contactDetails?._id
    );

    if (!isContactExists && contactDetails) {
      try {
        await dispatch(
          editContact({
            contactId: contactDetails._id,
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
        defaultValue={contactDetails?.name}
        label="Name"
      ></Input>

      <Input
        type="tel"
        name="phone"
        pattern="\+?\d{1,4}[\-.\s]?\(?\d{1,3}\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
        title="Phone
        number must be digits."
        placeholder="Phone number"
        defaultValue={contactDetails?.phone}
        label="Phone number"
      ></Input>

      <Button type="submit">Save</Button>
    </StyledForm>
  );
};
