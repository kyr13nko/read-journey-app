import { NavList, NavMenuLink, NavBurgerLink } from "./UserNav.styled";

const UserNav = ({ styleType, onClose }) => {
  return (
    <NavList>
      {styleType === "nav-menu" && (
        <>
          <NavMenuLink to="/recommended">Home</NavMenuLink>
          <NavMenuLink to="/library">My library</NavMenuLink>
        </>
      )}
      {styleType === "burger-menu" && (
        <>
          <NavBurgerLink to="/recommended" onClick={onClose}>
            Home
          </NavBurgerLink>
          <NavBurgerLink to="/library" onClick={onClose}>
            My library
          </NavBurgerLink>
        </>
      )}
    </NavList>
  );
};

export default UserNav;
