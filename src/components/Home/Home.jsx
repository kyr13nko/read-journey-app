import Logotype from "../Header/Logotype/Logotype";

import { HeroContent, HeroImage, Title, HomeSection } from "./Home.styled";
import { Container } from "../../styles/GlobalStyles";

const Home = ({ children }) => {
  return (
    <main>
      <Container>
        <HomeSection>
          <HeroContent>
            <Logotype />
            <Title>
              Expand your mind, reading <span>a book</span>
            </Title>
            {children}
          </HeroContent>
          <HeroImage />
        </HomeSection>
      </Container>
    </main>
  );
};

export default Home;
