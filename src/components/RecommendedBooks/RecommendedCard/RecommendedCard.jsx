import { useState } from "react";
import Modal from "../../Modal/Modal";
import { AddToLibraryBtn, Card, Content, ModalCard, ModalContent } from "./RecommendedCard.styled";

const RecommendedCard = ({ book }) => {
  const { title, author, imageUrl, totalPages } = book;

  const [isOpenModal, setIsOpenModal] = useState(false);

  const toggleModal = () => {
    setIsOpenModal((prev) => !prev);
  };

  return (
    <>
      <Card>
        <img src={imageUrl} alt={`${author} - ${title}`} onClick={toggleModal} />
        <Content>
          <h4>{title}</h4>
          <h3>{author}</h3>
        </Content>
      </Card>
      {isOpenModal && (
        <Modal width={500} onClose={toggleModal}>
          <ModalCard>
            <ModalContent>
              <img src={imageUrl} alt={`${author} - ${title}`} />
              <h4>{title}</h4>
              <h3>{author}</h3>
              <p>{totalPages} pages</p>
            </ModalContent>
            <AddToLibraryBtn type="button">Add to library</AddToLibraryBtn>
          </ModalCard>
        </Modal>
      )}
    </>
  );
};

export default RecommendedCard;
