import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { selectRecommendedBooks } from "../../../store/books/booksSelectors";
import { getRecommendedBooks } from "../../../store/books/booksOperations";

import NoResults from "../../NoResults/NoResults";

import sprite from "../../../assets/images/sprite.svg";
import { BlockWrapper, Card, List } from "./RecommendedBooks.styled";
import { LinkWrapper, StyledLink, Title } from "../Dashboard.styled";

const RecommendedBooks = () => {
  const dispatch = useDispatch();
  const recommendedBooks = useSelector(selectRecommendedBooks);

  useEffect(() => {
    dispatch(getRecommendedBooks({ limit: 3 }));
  }, [dispatch]);
  return (
    <BlockWrapper>
      <Title>Recommended Books</Title>
      {recommendedBooks.length ? (
        <List>
          {recommendedBooks.map(({ _id, imageUrl, author, title }) => (
            <Card key={_id}>
              <img src={imageUrl} alt={`${author} - ${title}`} />

              <h4>{title}</h4>
              <h3>{author}</h3>
            </Card>
          ))}
        </List>
      ) : (
        <NoResults text="recommended" />
      )}
      <LinkWrapper>
        <StyledLink to="/recommended">Home</StyledLink>
        <Link to="/recommended">
          <svg width={24} height={24}>
            <use href={`${sprite}#log-in`}></use>
          </svg>
        </Link>
      </LinkWrapper>
    </BlockWrapper>
  );
};

export default RecommendedBooks;
