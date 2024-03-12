import { deleteContact } from 'store/contacts/operations';
import css from './ContactItemContent.module.css';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import Button from 'style/Button';

export const ContactItemContent = ({ contact }) => {
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <div className={css.contacts__wrapper}>
      <p className={css.contacts__name}>{contact.name}</p>
      <p className={css.contacts__number}>{contact.number}</p>
      <Button type="button" onClick={onClick} className={css.contacts__delete}>
        Delete
      </Button>
    </div>
  );
};

ContactItemContent.propTypes = {
  contact: PropTypes.object,
};
