import React from 'react';
import css from './ContactForm.module.css';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux-slices/contactSlice';
import { getContacts } from 'redux-slices/selectors';

const ContactForm = ({ onSubmit }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const contact = {
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
          name="number"
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
