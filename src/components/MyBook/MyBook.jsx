import { useSelector } from "react-redux";

import { selectReadBook } from "../../store/books/booksSelectors";

import sprite from "../../assets/images/sprite.svg";
import imageUrlPlaceholder from "../../assets/images/imageUrl.png";

import { Book, SvgWrapper } from "./MyBook.styled";
import { BookWrapper } from "../../styles/GlobalStyles";

const MyBook = () => {
  const readBook = useSelector(selectReadBook);
  console.log("MyBook ---> readBook:", readBook);
  const { author, title, imageUrl, progress } = readBook;

  return (
    <BookWrapper>
      <h2>My reading</h2>
      <Book>
        <img src={imageUrl ? imageUrl : imageUrlPlaceholder} alt={`${author} - ${title}`} />
        <h4>{title}</h4>
        <h3>{author}</h3>
      </Book>
      <SvgWrapper>
        <svg>
          {progress.status === "active" ? (
            <use href={`${sprite}#record-stop`} />
          ) : (
            <use href={`${sprite}#record`} />
          )}
        </svg>
      </SvgWrapper>
    </BookWrapper>
  );
};

export default MyBook;
