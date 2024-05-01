import { useEffect, useState } from "react";

import {
  Circle,
  CircleSvg,
  CircleWrapper,
  Content,
  ContentBlock,
  ContentWrapper,
  PercentageCircle,
  StatisticsWrapper,
} from "./Statistics.styled";
import { useSelector } from "react-redux";
import { selectReadBook } from "../../../../store/books/booksSelectors";

const Statistics = () => {
  const readBook = useSelector(selectReadBook);
  console.log("Statistics ---> readBook:", readBook);

  const [fillPercentage, setFillPercentage] = useState(0);

  function calculateProgress(bookData) {
    // Обчислює загальну кількість прочитаних сторінок за допомогою reduce
    const totalReadPages = bookData.progress.reduce((acc, progressEntry) => {
      return acc + (progressEntry.finishPage - progressEntry.startPage + 1);
    }, 0);

    // Обчислює відсоток прочитаних сторінок
    const totalPages = bookData.totalPages;
    const progressPercentage = (totalReadPages / totalPages) * 100;

    // Повертає результат
    return {
      totalReadPages: totalReadPages,
      progressPercentage: progressPercentage.toFixed(2),
    };
  }

  const { totalReadPages, progressPercentage } = calculateProgress(readBook);

  useEffect(() => {
    setFillPercentage(progressPercentage);
  }, [progressPercentage]);

  const radius = 65;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = ((100 - fillPercentage) / 100) * circumference;

  return (
    <StatisticsWrapper>
      <CircleWrapper>
        <CircleSvg viewBox="0 0 150 150">
          <Circle cx="75" cy="75" r={radius} />
          <PercentageCircle
            cx="75"
            cy="75"
            r={radius}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
          />
          <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle">
            100%
          </text>
        </CircleSvg>
      </CircleWrapper>
      <ContentWrapper>
        <ContentBlock />
        <Content>
          <p>{progressPercentage} %</p>
          <span>{totalReadPages} pages read</span>
        </Content>
      </ContentWrapper>
    </StatisticsWrapper>
  );
};

export default Statistics;
