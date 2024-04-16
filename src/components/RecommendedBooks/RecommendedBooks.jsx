import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useMediaQuery } from "react-responsive";

import { getRecommendedBooks } from "../../store/books/booksOperations";
import { selectCurrentPage, selectRecommendedBooks } from "../../store/books/booksSelectors";

import RecommendedCard from "./RecommendedCard/RecommendedCard";

import { BookList, Wrapper } from "./RecommendedBooks.styled";
import Pagination from "./Pagination/Pagination";

const RecommendedBooks = () => {
  const dispatch = useDispatch();
  const recommendedBooks = useSelector(selectRecommendedBooks);
  const currentPage = useSelector(selectCurrentPage);

  const mobile = useMediaQuery({ maxWidth: 767 });
  const tablet = useMediaQuery({ maxWidth: 1439 });

  const limit = mobile ? 2 : tablet ? 8 : 10;

  useEffect(() => {
    dispatch(getRecommendedBooks({ limit, page: currentPage }));
  }, [currentPage, dispatch, limit]);
  return (
    <Wrapper>
      <h2>Recommended</h2>
      <BookList>
        {recommendedBooks.map((book) => (
          <RecommendedCard key={book._id} book={book} />
        ))}
      </BookList>
      <Pagination />
    </Wrapper>
  );
};

export default RecommendedBooks;
