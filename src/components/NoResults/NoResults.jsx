import booksPng from "../../assets/images/books.png";

import { Text, ImageWrapper, Wrapper } from "./NoResults.styled";

const NoResults = ({ text }) => {
  return (
    <Wrapper>
      <ImageWrapper>
        <img src={`${booksPng}`} alt="Books" />
      </ImageWrapper>
      {text === "recommended" && (
        <Text>
          No <span>books</span> found! Please, try again!
        </Text>
      )}
      {text === "library" && (
        <Text>
          To start training, add <span>some of your books</span> or from the recommended ones
        </Text>
      )}
    </Wrapper>
  );
};

export default NoResults;
