import { Link } from "react-router-dom";

import sprite from "../../../assets/images/sprite.svg";
import { Item, List, Number, Text, BlockWrapper } from "./Workout.styled";
import { LinkWrapper, StyledLink, Title } from "../Dashboard.styled";

const Workout = () => {
  return (
    <BlockWrapper>
      <Title>Start your workout</Title>
      <List>
        <Item>
          <Number>1</Number>
          <Text>
            Create a personal library:
            <span> add the books you intend to read to it.</span>
          </Text>
        </Item>
        <Item>
          <Number>2</Number>
          <Text>
            Create your first workout:
            <span> define a goal, choose a period, start training.</span>
          </Text>
        </Item>
      </List>
      <LinkWrapper>
        <StyledLink to="/library">My library</StyledLink>
        <Link to="/library">
          <svg width={24} height={24}>
            <use href={`${sprite}#log-in`} />
          </svg>
        </Link>
      </LinkWrapper>
    </BlockWrapper>
  );
};

export default Workout;
