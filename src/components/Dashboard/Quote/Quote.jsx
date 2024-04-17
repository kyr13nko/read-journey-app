import booksPng from "../../../assets/images/books.png";

import { Text, Wrap } from "./Quote.styled";

const Quote = () => {
  return (
    <Wrap>
      <img src={`${booksPng}`} alt="quote books" />
      <Text>
        &quot;Books are <span>windows</span> to the world, and reading is a journey into the
        unknown.&quot;
      </Text>
    </Wrap>
  );
};

export default Quote;
