import Logotype from "./Logotype/Logotype";
import MobileMenu from "./MobileMenu/MobileMenu";

import { Container } from "../../styles/GlobalStyles";

const Header = () => {
  return (
    <header>
      <Container>
        <Logotype />
        <MobileMenu />
      </Container>
    </header>
  );
};

export default Header;
