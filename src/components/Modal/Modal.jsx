import { useEffect } from "react";
import { createPortal } from "react-dom";

import sprite from "../../assets/images/sprite.svg";

import { CloseBtn, Overlay, Wrapper } from "./Modal.styled";

const modalRoot = document.getElementById("modal-root");

const Modal = ({ children, onClose, width }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "visible";
    };
  }, [onClose]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };
  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <Wrapper width={width}>
        <CloseBtn onClick={onClose}>
          <svg>
            <use href={`${sprite}#close`} />
          </svg>
        </CloseBtn>
        {children}
      </Wrapper>
    </Overlay>,
    modalRoot
  );
};

export default Modal;
