import React, { useState } from 'react';
import css from './ContactForm.module.css';
import PropTypes from 'prop-types';

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  function handleChange(e) {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const contact = { name: name, number: number };

    onSubmit(contact);
    setName('');
    setNumber('');
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
          value={name}
          placeholder="Enter name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={handleChange}
          required
        />
        <label className={css.form__label}>Number</label>
        <input
          type="tel"
          value={number}
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          className={css.form__input}
          onChange={handleChange}
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
/*
  handleSubmit = event => {
    event.preventDefault();

    const name = event.target.name.value;
    const number = event.target.number.value;
    const { addContact } = this.props;

    addContact({ id: nanoid(), name, number });
    event.target.reset();
  };

  render() {
    return (
      <section>
        <h1 className={css.form__title}>Phonebook</h1>
        <form className={css.form} onSubmit={this.handleSubmit}>
          <label className={css.form__label}>Name</label>
          <input
            className={css.form__input}
            type="text"
            name="name"
            placeholder='Enter name'
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <label className={css.form__label}>Number</label>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            className={css.from__number}
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />

          <button className={css.form__btn} type="submit">
            Add contact
          </button>
        </form>
      </section>
    );
  }
}
ContactForm.propTypes = {
  number: PropTypes.string,
  name: PropTypes.string,
  addContact: PropTypes.func.isRequired,
} */
