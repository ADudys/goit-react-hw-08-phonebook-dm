import React, { useEffect } from 'react';
import { ContactList } from './ContactList/ContactList';
import css from './App.module.css';
import ContactForm from './ContactForm/ConstactForm';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'store/selectors';
import { fetchContacts } from 'store/operations';

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

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
