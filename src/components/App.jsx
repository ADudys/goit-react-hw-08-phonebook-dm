import React from 'react';
import { ContactList } from './ContactList/ContactList';

import css from './App.module.css';
import ContactForm from './ContactForm/ConstactForm';

const App = () => {
  return (
    <section className={css.content}>
      <div className={css.content__container}>
        <ContactForm />
        <ContactList></ContactList>
      </div>
    </section>
  );
};
export default App;
