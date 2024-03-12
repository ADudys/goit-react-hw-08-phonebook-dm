import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const changeActive = isActive => {
  switch (isActive) {
    case 'active':
      return 'color: darkgreen';
    case 'inactive':
      return 'color: darkcyan';
    default:
      return 'color: darkcyan';
  }
};

export const Link = styled(NavLink)`
  display: inline-block;
  font-size: 24px;
  font-weight: 600;
  text-decoration: none;
  transition-property: color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: darkgreen;
  }
  &:not(:hover, :focus) {
    ${({ isActive }) => changeActive(isActive)}
  }
  nav &:hover,
  nav &:focus {
    color: darkgreen;
  }
`;
export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 12px;
`;
