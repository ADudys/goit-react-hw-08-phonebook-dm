import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { ContactListContent } from 'components/ContactListContent/ContactListContent/ContactListContent';
import { getContacts, getFilter } from 'redux-slices/selectors';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const contactsFilter = useSelector(getFilter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(contactsFilter.toLowerCase())
  );


  return (
    <div className={css.contacts}>
      <h2>Contacts</h2>
      {contacts.length > 0 ? (
        <ContactListContent contacts={filteredContacts} />
      ) : (
        <p> No contacts added to the list</p>
      )}
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
