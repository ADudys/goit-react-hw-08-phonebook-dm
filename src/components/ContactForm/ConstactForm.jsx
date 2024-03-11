import React from 'react';
import css from './ContactForm.module.css';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { addContact } from 'store/contacts/operations';
import { nanoid } from '@reduxjs/toolkit';
import { selectContacts } from 'store/contacts/selectors';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const contact = {
      id: nanoid(),
      name: form.name.value,
      phone: form.phone.value,
    };
    const loweredName = form.name.value.toLowerCase().trim();

    if (
      contacts.some(
        contact => contact.name.toLowerCase().trim() === loweredName
      )
    ) {
      return alert(`${contact.name} is already in Your contacts!`);
    }
    if (contacts.some(contact => contact.phone === form.phone.value)) {
      return alert(`${contact.phone} is already in Your contacts!`);
    } else {
      dispatch(addContact(contact));
    }
    form.reset();
  }

  return (
    <section>
      <h1 className={css.form__title}>Phonebook</h1>
      <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.form__label}>Name</label>
        <input
          className={css.form__input}
          type="text"
          name="name"
          placeholder="Enter name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label className={css.form__label}>Number</label>
        <input
          type="tel"
          name="phone"
          placeholder="Enter phone number"
          className={css.form__input}
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />

        <button className={css.form__btn} type="submit">
          Add contact
        </button>
      </form>
    </section>
  );
};

ContactForm.propTypes = {
  number: PropTypes.string,
  name: PropTypes.string,
  onSubmit: PropTypes.func,
};

export default ContactForm;
