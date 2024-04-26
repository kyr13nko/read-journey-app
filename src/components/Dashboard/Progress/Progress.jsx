import { ReadingWrapper, Title } from "../Dashboard.styled";

import starPng from "../../../assets/images/star.png";
import { ImageWrapper, Text } from "./Progress.styled";

const Progress = () => {
  return (
    <ReadingWrapper>
      <Title>Progress</Title>
      <Text>
        Here you will see when and how much you read. To record, click on the red button above.
      </Text>
      <ImageWrapper>
        <img src={`${starPng}`} alt="Success star" />
      </ImageWrapper>
    </ReadingWrapper>
  );
};

export default Progress;
