import { deleteContact } from 'store/operations';
import css from './ContactItemContent.module.css';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';

export const ContactItemContent = ({ contact }) => {
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <div>
      <p className={css.contacts__name}>{contact.name}</p>
      <p className={css.contacts__number}>{contact.phone}</p>
      <button type="button" onClick={onClick} className={css.contacts__delete}>
        Delete
      </button>
    </div>
  );
};

ContactItemContent.propTypes = {
  contact: PropTypes.object,
};
