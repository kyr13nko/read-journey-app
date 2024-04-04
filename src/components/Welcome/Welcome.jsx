import Logotype from "../Header/Logotype/Logotype";

import { HeroContent, HeroImage, Title, WelcomeSection } from "./Welcome.styled";
import { Container } from "../../styles/GlobalStyles";

const Welcome = ({ children }) => {
  return (
    <main>
      <Container>
        <WelcomeSection>
          <HeroContent>
            <Logotype />
            <Title>
              Expand your mind, reading <span>a book</span>
            </Title>
            <div>{children}</div>
          </HeroContent>
          <HeroImage />
        </WelcomeSection>
      </Container>
    </main>
  );
};

export default Welcome;
