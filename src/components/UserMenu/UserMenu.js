import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { logOut } from 'store/auth/operations';
import Button from 'style/Button';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div>
      <p> Hello, {user.name}</p>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Log out
      </Button>
    </div>
  );
};
