import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { ContactItemContent } from 'components/ContactItemContent/ContactItemContent';
import { selectFilteredContacts } from 'store/filter/selectors';
import { Loader } from 'components/Loader/Loader';
import { Filter } from 'components/Filter/Filter';
import { selectIsLoading } from 'store/contacts/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);

  return (
    <div className={css.contacts}>
      <h2>Contacts</h2>
      {!!isLoading && <Loader />}
      <ul className={css.contacts__list}>
        {contacts.length > 0 ? (
          contacts.map(contact => (
            <li className={css.contacts__item} key={contact.id}>
              <ContactItemContent contact={contact} />
            </li>
          ))
        ) : (
          <p> No contacts added to the list</p>
        )}
      </ul>
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
