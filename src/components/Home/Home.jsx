import Logotype from "../Header/Logotype/Logotype";

import { HeroContent, HeroImage, Title } from "./Home.styled";

const Home = ({ children }) => {
  return (
    <>
      <HeroContent>
        <Logotype />
        <Title>
          Expand your mind, reading <span>a book</span>
        </Title>
        {children}
      </HeroContent>
      <HeroImage />
    </>
  );
};

export default Home;
