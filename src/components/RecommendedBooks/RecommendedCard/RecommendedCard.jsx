import { useState } from "react";
import Modal from "../../Modal/Modal";
import { Card, Content } from "./RecommendedCard.styled";

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
          <div>
            <img src={imageUrl} alt={`${author} - ${title}`} />
            <div>
              <h4>{title}</h4>
              <h3>{author}</h3>
              <p>{totalPages} pages</p>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default RecommendedCard;
