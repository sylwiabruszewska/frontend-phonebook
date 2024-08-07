import { useSelector } from 'react-redux';

import { Contact } from 'components';
import { selectContacts, selectFilter } from 'redux/contacts/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const filteredContacts = contacts.filter(contact => {
    if (!filter) {
      return true;
    }
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });

  filteredContacts.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => (
        <Contact key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
};
