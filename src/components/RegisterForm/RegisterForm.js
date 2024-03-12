import { register } from 'store/auth/operations';
import { useDispatch } from 'react-redux';
import Form from 'style/Form';
import LabelContainer from 'style/LabelContainer';
import Input from 'style/Input';
import Button from 'style/Button';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <LabelContainer>
        <label>Username</label>
        <Input type="text" name="name" placeholder="Enter username" required />
      </LabelContainer>
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
          pattern=".{7,}"
          title="Your password must contain at least 7 characters."
          required
        />
      </LabelContainer>
      <Button type="submit">Register</Button>
    </Form>
  );
};
