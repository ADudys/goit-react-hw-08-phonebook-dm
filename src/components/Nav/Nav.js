import { useLocation } from 'react-router-dom';
import { useAuth } from 'hooks';
import { Link, Nav } from './Nav.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  const location = useLocation();

  return (
    <Nav>
      <Link
        isActive={location.pathname === '/' ? 'active' : 'inactive'}
        to="/"
        end
      >
        Home
      </Link>
      {isLoggedIn && (
        <Link
          isActive={
            location.pathname.startsWith('/phonebook') ? 'active' : 'inactive'
          }
          to="/phonebook"
        >
          Phonebook
        </Link>
      )}
    </Nav>
  );
};
