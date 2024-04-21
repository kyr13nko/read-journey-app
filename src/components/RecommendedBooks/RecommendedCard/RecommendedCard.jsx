import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { toast } from "react-toastify";

import { addBookById } from "../../../store/books/booksOperations";
import { selectOwnBooks } from "../../../store/books/booksSelectors";

import Modal from "../../Modal/Modal";

import {
  BookCard,
  BookCardContent,
  ModalBookBtn,
  ModalBookCard,
  ModalBookContent,
} from "../../../styles/GlobalStyles";

const RecommendedCard = ({ book }) => {
  const dispatch = useDispatch();
  const ownBooks = useSelector(selectOwnBooks);

  const { _id, title, author, imageUrl, totalPages } = book;

  const [isOpenModal, setIsOpenModal] = useState(false);

  const toggleModal = () => {
    setIsOpenModal((prev) => !prev);
  };

  const handleAddBtnClick = () => {
    const bookExists = ownBooks.find((book) => book.title === title);

    if (!bookExists) {
      dispatch(addBookById(_id));
      toggleModal();
    } else {
      toast.warning(`Such book is already in the library!`);
    }
  };

  return (
    <>
      <BookCard>
        <img src={imageUrl} alt={`${author} - ${title}`} onClick={toggleModal} />
        <BookCardContent>
          <h4>{title}</h4>
          <h3>{author}</h3>
        </BookCardContent>
      </BookCard>

      {isOpenModal && (
        <Modal width={500} onClose={toggleModal}>
          <ModalBookCard>
            <ModalBookContent>
              <img src={imageUrl} alt={`${author} - ${title}`} />
              <h4>{title}</h4>
              <h3>{author}</h3>
              <p>{totalPages} pages</p>
            </ModalBookContent>
            <ModalBookBtn type="button" onClick={handleAddBtnClick}>
              Add to library
            </ModalBookBtn>
          </ModalBookCard>
        </Modal>
      )}
    </>
  );
};

export default RecommendedCard;
