import { useDispatch, useSelector } from "react-redux";

import { selectReadBook } from "../../../../store/books/booksSelectors";
import { getReadBookDelete } from "../../../../store/books/booksOperations";

import sprite from "../../../../assets/images/sprite.svg";
import { DairyWrapper, DeleteBtn } from "./Dairy.styled";

const Dairy = () => {
  const dispatch = useDispatch();
  const readBook = useSelector(selectReadBook);
  console.log("Dairy ---> readBook:", readBook._id);

  const handleDelBtnClick = (id) => {
    dispatch(getReadBookDelete({ bookId: readBook._id, readingId: id }));
  };
  return (
    <DairyWrapper>
      <ul>
        {readBook?.progress.map((item) => (
          <li key={item._id}>
            <p>{item.finishPage - item.startPage} pages</p>
            <DeleteBtn type="button" onClick={() => handleDelBtnClick(item._id)}>
              <svg>
                <use href={`${sprite}#trash`} />
              </svg>
            </DeleteBtn>
          </li>
        ))}
      </ul>
    </DairyWrapper>
  );
};

export default Dairy;
