import { RiEdit2Fill } from "react-icons/ri";
import { FaTrashAlt } from "react-icons/fa";

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

export const Contact: React.FC<ContactProps> = ({ id, name, phone }) => {
  const dispatch = useAppDispatch();

  const contact = {
    id,
    name,
    phone,
  };

  const handleContactEdit = () => {
    dispatch(setContactDetails(contact));
    dispatch(openModal("edit"));
  };

  const handleContactDelete = () => {
    dispatch(setContactDetails(contact));
    dispatch(openModal("delete"));
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
      </div>
    </StyledItem>
  );
};
