import booksPng from "../../assets/images/books.png";
import likePng from "../../assets/images/like.png";

import { Text, Title, Wrapper } from "./Success.styled";

const Success = ({ text }) => {
  return (
    <Wrapper>
      {text === "add-book" && (
        <>
          <img src={`${likePng}`} alt="Books" />
          <Title>Good job</Title>
          <Text>
            Your book is now in <span>the library!</span> The joy knows no bounds and now you can
            start your training
          </Text>
        </>
      )}
      {text === "read-book" && (
        <>
          <img src={`${booksPng}`} alt="Books" />
          <Title>The book is read</Title>
          <Text>
            It was an <span>exciting journey</span>, where each page revealed new horizons, and the
            characters became inseparable friends.
          </Text>
        </>
      )}
    </Wrapper>
  );
};

export default Success;
