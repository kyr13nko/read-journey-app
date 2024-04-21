import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useMediaQuery } from "react-responsive";

import { getOwnBooks, getRecommendedBooks } from "../../store/books/booksOperations";
import { selectCurrentPage, selectRecommendedBooks } from "../../store/books/booksSelectors";
import { getLimit } from "../../helpers/getLimit";

import RecommendedCard from "./RecommendedCard/RecommendedCard";
import Pagination from "./Pagination/Pagination";
import NoResults from "../NoResults/NoResults";

import { BookList, BookWrapper } from "../../styles/GlobalStyles";

const RecommendedBooks = () => {
  const dispatch = useDispatch();
  const recommendedBooks = useSelector(selectRecommendedBooks);
  const currentPage = useSelector(selectCurrentPage);

  const mobile = useMediaQuery({ maxWidth: 767 });
  const tablet = useMediaQuery({ maxWidth: 1439 });

  const limit = getLimit(mobile, tablet);

  useEffect(() => {
    dispatch(getRecommendedBooks({ limit, page: currentPage }));
    dispatch(getOwnBooks());
  }, [currentPage, dispatch, limit]);

  return (
    <BookWrapper>
      <h2>Recommended</h2>
      {recommendedBooks.length ? (
        <BookList>
          {recommendedBooks.map((book) => (
            <RecommendedCard key={book._id} book={book} />
          ))}
        </BookList>
      ) : (
        <NoResults text="recommended" />
      )}
      <Pagination />
    </BookWrapper>
  );
};

export default RecommendedBooks;
