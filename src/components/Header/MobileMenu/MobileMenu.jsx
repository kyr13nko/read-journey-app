import { useEffect } from "react";

import UserNav from "../UserNav/UserNav";
import LogoutBtn from "../LogoutBtn/LogoutBtn";

import sprite from "../../../assets/images/sprite.svg";

import { CloseBtn, MobileContainer, Overlay } from "./MobileMenu.styled";

const MobileMenu = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "visible";
    };
  }, [isOpen]);

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

        <UserNav styleType="burger-menu" onClose={onClose} />

        <LogoutBtn styleType="burger-btn">Log Out</LogoutBtn>
      </MobileContainer>
    </>
  );
};

export default MobileMenu;
