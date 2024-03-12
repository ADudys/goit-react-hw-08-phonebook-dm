import { useDispatch } from 'react-redux';
import { logIn } from 'store/auth/operations';
import Button from 'style/Button';
import Form from 'style/Form';
import Input from 'style/Input';
import LabelContainer from 'style/LabelContainer';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <LabelContainer>
        <label>Email</label>
        <Input type="email" name="email" placeholder="Enter email" required />
      </LabelContainer>
      <LabelContainer>
        <label>Password</label>
        <Input
          type="password"
          name="password"
          placeholder="Enter password"
          required
        />
      </LabelContainer>
      <Button type="submit">Log In</Button>
    </Form>
  );
};
