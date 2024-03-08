import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { ContactListContent } from 'components/ContactListContent/ContactListContent/ContactListContent';
import { selectFilteredContacts, selectIsLoading } from 'store/selectors';
import { Loader } from 'components/Loader/Loader';

export const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);

  return (
    <div className={css.contacts}>
      <h2>Contacts</h2>
      {!!isLoading && <Loader />}
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
