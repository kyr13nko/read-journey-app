import { useState } from "react";

import Modal from "../../Modal/Modal";

import {
  BookCard,
  BookCardContent,
  ModalBookBtn,
  ModalBookCard,
  ModalBookContent,
} from "../../../styles/GlobalStyles";

const RecommendedCard = ({ book }) => {
  const { title, author, imageUrl, totalPages } = book;

  const [isOpenModal, setIsOpenModal] = useState(false);

  const toggleModal = () => {
    setIsOpenModal((prev) => !prev);
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
            <ModalBookBtn type="button">Add to library</ModalBookBtn>
          </ModalBookCard>
        </Modal>
      )}
    </>
  );
};

export default RecommendedCard;
