import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import MyLibraryCard from "./MyLibraryCard/MyLibraryCard";
import NoResults from "../NoResults/NoResults";
import SelectBooks from "./SelectBooks/SelectBooks";

import { getOwnBooks } from "../../store/books/booksOperations";
import { selectOwnBooks } from "../../store/books/booksSelectors";

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
      <SelectBooks />
    </BookWrapper>
  );
};

export default MyLibraryBooks;
