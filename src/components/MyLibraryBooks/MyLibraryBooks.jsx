import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getOwnBooks } from "../../store/books/booksOperations";
import { selectOwnBooks } from "../../store/books/booksSelectors";
import NoResults from "../NoResults/NoResults";
import MyLibraryCard from "./MyLibraryCard/MyLibraryCard";
import { BookList, BookWrapper } from "../../styles/GlobalStyles";

const MyLibraryBooks = () => {
  const dispatch = useDispatch();
  const ownBooks = useSelector(selectOwnBooks);

  useEffect(() => {
    dispatch(getOwnBooks());
  }, [dispatch]);

  return (
    <BookWrapper>
      <h2>My Library</h2>
      {ownBooks.length ? (
        <BookList>
          {ownBooks.map((book) => (
            <MyLibraryCard key={book._id} book={book} />
          ))}
        </BookList>
      ) : (
        <NoResults text="library" />
      )}
    </BookWrapper>
  );
};

export default MyLibraryBooks;
