import Notiflix from "notiflix";
import { useState } from "react";
import { RiEdit2Fill } from "react-icons/ri";
import { FaTrashAlt } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

import { ButtonIcon } from "@components/ButtonIcon/ButtonIcon";
import { openModal } from "@redux/modal/modalSlice";
import { setContactDetails } from "@redux/contacts/contactsSlice";
import {
  StyledItem,
  StyledBox,
  StyledIcon,
  StyledBoxItem,
  StyledIconMenu,
} from "./Contact.styled";
import { ContactProps } from "@typings/components";
import { useAppDispatch } from "@hooks/useAppDispatch";
import { updateFavoriteStatus } from "@redux/contacts/operations";

export const Contact: React.FC<ContactProps> = ({
  id,
  name,
  phone,
  favorite,
}) => {
  const dispatch = useAppDispatch();
  const [isFavorite, setIsFavorite] = useState(favorite);

  const contact = {
    id,
    name,
    phone,
    favorite: isFavorite,
  };

  const handleContactEdit = () => {
    dispatch(setContactDetails(contact));
    dispatch(openModal("edit"));
  };

  const handleContactDelete = () => {
    dispatch(setContactDetails(contact));
    dispatch(openModal("delete"));
  };

  const handleFavoriteStatus = () => {
    const newFavoriteStatus = !isFavorite;
    setIsFavorite(newFavoriteStatus);

    dispatch(
      updateFavoriteStatus({
        contactId: id,
        favorite: newFavoriteStatus,
      })
    )
      .unwrap()
      .then(() => {
        if (newFavoriteStatus) {
          Notiflix.Notify.success(`Contact ${name} added to your favorites!`);
        }
      })
      .catch(() => {
        Notiflix.Notify.failure("Something went wrong, try again.");
      });
  };

  return (
    <StyledItem>
      <StyledBoxItem>
        <StyledIcon />

        <StyledBox>
          <span>{name}</span>
          <a href={`tel:${phone}`}>{phone}</a>
        </StyledBox>
      </StyledBoxItem>

      <div>
        <ButtonIcon
          onClick={() => handleContactEdit()}
          ariaLabel="edit contact"
        >
          <StyledIconMenu>
            <RiEdit2Fill />
          </StyledIconMenu>
        </ButtonIcon>

        <ButtonIcon
          onClick={() => handleContactDelete()}
          ariaLabel="delete contact"
        >
          <StyledIconMenu>
            <FaTrashAlt />
          </StyledIconMenu>
        </ButtonIcon>

        <ButtonIcon
          onClick={() => handleFavoriteStatus()}
          ariaLabel="add contact to favorites"
        >
          <StyledIconMenu>
            {favorite ? <FaHeart /> : <FaRegHeart />}
          </StyledIconMenu>
        </ButtonIcon>
      </div>
    </StyledItem>
  );
};
