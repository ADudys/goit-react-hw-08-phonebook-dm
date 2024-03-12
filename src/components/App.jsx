import React, { lazy, useEffect } from 'react';
import css from './App.module.css';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks';
import { refreshUser } from 'store/auth/operations';
import { Loader } from './Loader/Loader';
import { Route, Routes } from 'react-router';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { Layout } from './Layout/Layout';

const HomePage = lazy(() => import('../pages/Home/Home'));
const RegisterPage = lazy(() => import('../pages/Register/Register'));
const LoginPage = lazy(() => import('../pages/Login/Login'));
const PhonebookPage = lazy(() => import('../pages/Phonebook/Phonebook'));

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/phonebook"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute
              redirectTo="/phonebook"
              component={<LoginPage />}
            />
          }
        />
        <Route
          path="/phonebook"
          element={
            <PrivateRoute redirectTo="/login" component={<PhonebookPage />} />
          }
        />
      </Route>
    </Routes>
  );
};
export default App;
