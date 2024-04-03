import sprite from "../../../assets/images/sprite.svg";
import { StyledLink } from "./Logotype.styled";

const Logotype = () => {
  return (
    <StyledLink to="/">
      <svg>
        <use href={`${sprite}#logotype`} />
      </svg>
      <p>Read Journey</p>
    </StyledLink>
  );
};

export default Logotype;
