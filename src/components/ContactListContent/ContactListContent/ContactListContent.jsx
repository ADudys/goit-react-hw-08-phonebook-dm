import { Filter } from 'components/Filter/Filter';
import css from './ContactListContent.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'store/contactSlice';

export const ContactListContent = (contacts) => {
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <div>
      <Filter />
      <ul className={css.contacts__list}>
        {contacts.contacts.map(({ id, name, number }) => (
          <li className={css.contacts__item} key={id}>
            <p className={css.contacts__name}>{name}</p>
            <p className={css.contacts__number}>{number}</p>
            <button
              onClick={() => onClick(id)}
              className={css.contacts__delete}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
