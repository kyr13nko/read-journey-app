import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../../store/auth/authOperations";

import UserNav from "../UserNav/UserNav";

import sprite from "../../../assets/images/sprite.svg";

import { CloseBtn, MobileContainer, Overlay } from "./MobileMenu.styled";
import { LogoutBurgerButton } from "../Header.styled";

const MobileMenu = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "visible";
    };
  }, [isOpen]);

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <>
      <Overlay $isOpen={isOpen} onClick={handleBackdropClick} />
      <MobileContainer $isOpen={isOpen}>
        <CloseBtn type="button" onClick={onClose}>
          <svg>
            <use href={`${sprite}#close`} />
          </svg>
        </CloseBtn>

        <UserNav type="burger-menu" onClose={onClose} />

        <LogoutBurgerButton type="button" onClick={handleLogout}>
          Log Out
        </LogoutBurgerButton>
      </MobileContainer>
    </>
  );
};

export default MobileMenu;
