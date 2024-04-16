import { Card, Content } from "./RecommendedCard.styled";

const RecommendedCard = ({ book }) => {
  const { title, author, imageUrl, totalPages } = book;

  return (
    <Card>
      <img src={imageUrl} alt={`${author} - ${title}`} />
      <Content>
        <h4>{title}</h4>
        <h3>{author}</h3>
        {/* <p>{totalPages}</p> */}
      </Content>
    </Card>
  );
};

export default RecommendedCard;
