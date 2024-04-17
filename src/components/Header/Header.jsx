import { useState } from "react";

import Logotype from "./Logotype/Logotype";
import UserNav from "./UserNav/UserNav";
import UserBar from "./UserBar/UserBar";

import sprite from "../../assets/images/sprite.svg";

import { Container } from "../../styles/GlobalStyles";
import { BurgerBtn, UserData, Wrapper } from "./Header.styled";
import MobileMenu from "./MobileMenu/MobileMenu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header>
      <Container>
        <Wrapper>
          <Logotype />
          <UserNav styleType="nav-menu" />
          <UserData>
            <UserBar />
            <BurgerBtn type="button" onClick={handleMenuOpen}>
              <svg>
                <use href={`${sprite}#burger`} />
              </svg>
            </BurgerBtn>
          </UserData>
        </Wrapper>
        <MobileMenu isOpen={isMenuOpen} onClose={handleMenuOpen} />
      </Container>
    </header>
  );
};

export default Header;
