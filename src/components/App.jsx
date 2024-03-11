import React, { useEffect } from 'react';
import { ContactList } from './ContactList/ContactList';
import css from './App.module.css';
import ContactForm from './ContactForm/ConstactForm';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'store/contacts/operations';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

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
