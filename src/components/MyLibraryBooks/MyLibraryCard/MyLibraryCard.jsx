import { useState } from "react";
import { useDispatch } from "react-redux";

import { delBookById } from "../../../store/books/booksOperations";

import Modal from "../../Modal/Modal";

import sprite from "../../../assets/images/sprite.svg";
import imageUrlPlaceholder from "../../../assets/images/imageUrl.png";

import {
  BookCard,
  BookCardContent,
  ModalBookBtn,
  ModalBookCard,
  ModalBookContent,
} from "../../../styles/GlobalStyles";
import { BookCardWrapper, DeleteBtn } from "./MyLibraryCard.styled";
import { Link } from "react-router-dom";

const MyLibraryCard = ({ book }) => {
  const dispatch = useDispatch();
  const { _id, title, author, imageUrl, totalPages } = book;

  const [isOpenModal, setIsOpenModal] = useState(false);

  const toggleModal = () => {
    setIsOpenModal((prev) => !prev);
  };

  return (
    <>
      <BookCard>
        <img
          src={imageUrl ? imageUrl : imageUrlPlaceholder}
          alt={`${author} - ${title}`}
          onClick={toggleModal}
        />
        <BookCardWrapper>
          <BookCardContent width={75}>
            <h4>{title}</h4>
            <h3>{author}</h3>
          </BookCardContent>
          <DeleteBtn onClick={() => dispatch(delBookById(_id))}>
            <svg>
              <use href={`${sprite}#delete`}></use>
            </svg>
          </DeleteBtn>
        </BookCardWrapper>
      </BookCard>

      {isOpenModal && (
        <Modal width={500} onClose={toggleModal}>
          <ModalBookCard>
            <ModalBookContent>
              <img src={imageUrl ? imageUrl : imageUrlPlaceholder} alt={`${author} - ${title}`} />
              <h4>{title}</h4>
              <h3>{author}</h3>
              <p>{totalPages} pages</p>
            </ModalBookContent>
            <Link to="/reading">
              <ModalBookBtn type="button">Start reading</ModalBookBtn>
            </Link>
          </ModalBookCard>
        </Modal>
      )}
    </>
  );
};

export default MyLibraryCard;
