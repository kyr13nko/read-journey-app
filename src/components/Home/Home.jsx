import Logotype from "../Header/Logotype/Logotype";

import { HeroContent, HeroImage, Title, HomeSection } from "./Home.styled";

const Home = ({ children }) => {
  return (
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
  );
};

export default Home;
