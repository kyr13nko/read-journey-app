import { useDispatch, useSelector } from "react-redux";

import { selectCurrentPage, selectTotalPages } from "../../../store/books/booksSelectors";
import { nextPage, prevPage } from "../../../store/books/booksSlice";

import sprite from "../../../assets/images/sprite.svg";
import { Chevron, Wrapper } from "./Pagination.styled";

const Pagination = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector(selectCurrentPage);
  const totalPages = useSelector(selectTotalPages);

  return (
    <Wrapper>
      <Chevron disabled={currentPage === 1} onClick={() => dispatch(prevPage())}>
        <svg>
          <use href={`${sprite}#chevron-right`}></use>
        </svg>
      </Chevron>
      <Chevron disabled={currentPage === totalPages} onClick={() => dispatch(nextPage())}>
        <svg>
          <use href={`${sprite}#chevron-left`}></use>
        </svg>
      </Chevron>
    </Wrapper>
  );
};

export default Pagination;
