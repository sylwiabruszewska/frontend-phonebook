import { useSelector } from "react-redux";
import { useEffect } from "react";

import { StyledBox } from "./ContactList.styled";
import { Contact } from "@components/Contact/Contact";
import {
  selectContacts,
  selectFilter,
  selectCurrentPage,
} from "@redux/contacts/selectors";
import { fetchContacts } from "@redux/contacts/operations";
import { useAppDispatch } from "@hooks/useAppDispatch";

export const ContactList = () => {
  const dispatch = useAppDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const currentPage = useSelector(selectCurrentPage);

  useEffect(() => {
    dispatch(fetchContacts({ page: currentPage, query: filter }));
  }, [dispatch, currentPage, filter]);

  return (
    <StyledBox>
      <ul>
        {contacts &&
          contacts.length > 0 &&
          contacts.map(({ _id, name, phone }) => (
            <Contact key={_id} _id={_id} name={name} phone={phone} />
          ))}
      </ul>
    </StyledBox>
  );
};
