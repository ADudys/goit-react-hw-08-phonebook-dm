import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { ContactItemContent } from 'components/ContactItemContent/ContactItemContent';
import { selectFilteredContacts, selectIsLoading } from 'store/selectors';
import { Loader } from 'components/Loader/Loader';
import { Filter } from 'components/Filter/Filter';

export const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);

  return (
    <div className={css.contacts}>
      <h2>Contacts</h2>

      {!!isLoading && <Loader />}

      {contacts.length > 0 ? (
        contacts.map(contact => (
          <div>
            <Filter />
            <ul>
              <li key={contact.id}>
                <ContactItemContent contact={contact} />
              </li>
            </ul>
          </div>
        ))
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
