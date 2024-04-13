import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getRecommendedBooks } from "../../store/books/booksOperations";

import { Wrapper } from "./RecommendedBooks.styled";
import { selectRecommendedBooks } from "../../store/books/booksSelectors";

const RecommendedBooks = () => {
  const dispatch = useDispatch();
  const recommendedBooks = useSelector(selectRecommendedBooks);
  useEffect(() => {
    dispatch(getRecommendedBooks({ limit: 10, page: 1 }));
  }, [dispatch]);
  return (
    <Wrapper>
      <h2>Recommended</h2>
      <ul>
        {recommendedBooks.map((book) => (
          <li key={book._id}>
            <b>{book.author}</b>
            <p>{book.title}</p>
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};

export default RecommendedBooks;
