import { useEffect } from "react";

import UserNav from "../UserNav/UserNav";

import sprite from "../../../assets/images/sprite.svg";

import { CloseBtn, Wrapper } from "./MobileMenu.styled";

const MobileMenu = ({ onClose }) => {
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <Wrapper>
      <CloseBtn type="button" onClick={onClose}>
        <svg>
          <use href={`${sprite}#close`} />
        </svg>
      </CloseBtn>

      <UserNav type="burger-menu" onClose={onClose} />
    </Wrapper>
  );
};

export default MobileMenu;
