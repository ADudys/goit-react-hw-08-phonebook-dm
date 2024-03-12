import React from 'react';
import css from './ContactForm.module.css';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { nanoid } from '@reduxjs/toolkit';
import { selectContacts } from 'store/contacts/selectors';
import { addContact } from 'store/contacts/operations';
import Button from 'style/Button';
import Input from 'style/Input';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const contact = {
      id: nanoid(),
      name: form.name.value,
      number: form.number.value,
    };
    const loweredName = form.name.value.toLowerCase().trim();

    if (
      contacts.some(
        contact => contact.name.toLowerCase().trim() === loweredName
      )
    ) {
      return alert(`${contact.name} is already in Your contacts!`);
    }
    if (contacts.some(contact => contact.number === form.number.value)) {
      return alert(`${contact.number} is already in Your contacts!`);
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
        <Input
          className={css.form__input}
          type="text"
          name="name"
          placeholder="Enter name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label className={css.form__label}>Number</label>
        <Input
          type="tel"
          name="number"
          placeholder="Enter phone number"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />

        <Button className={css.form__btn} type="submit">
          Add contact
        </Button>
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
