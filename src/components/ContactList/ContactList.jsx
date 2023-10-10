import PropTypes from 'prop-types';
import css from './ContactList.module.css';

export const ContactList = ({ contacts, onClick }) => {
  return (
    <div className={css.contacts}>
      <h2>Contacts</h2>

      {contacts.length > 0 ? (
        <ul className={css.contacts__list}>
          {contacts.map(({ id, name, number }) => (
            <li className={css.contacts__item} key={id}>
              <p className={css.contacts__name}>{name}</p>
              <p className={css.contacts__number}> {number}</p>
              <button
                onClick={() => onClick(id)}
                className={css.contacts__delete}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
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
  deleteContact: PropTypes.func,
};
