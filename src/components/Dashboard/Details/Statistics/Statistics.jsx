// import { useEffect, useState } from "react";

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

  // const readPages = readBook?.progress[readBook.progress?.length - 1].finishPage;

  // const maxFinishPage = readBook?.progress.reduce((max, progressEntry) => {
  //   return progressEntry.finishPage > max ? progressEntry.finishPage : max;
  // }, 0);

  // const totalPages = readBook?.totalPages;

  const calculateProgress = (readBook) => {
    let uniquePagesRead = new Set();

    if (readBook) {
      readBook.progress.forEach((progressEntry) => {
        for (let i = progressEntry.startPage; i <= progressEntry.finishPage; i++) {
          uniquePagesRead.add(i);
        }
      });
    }

    const totalPages = readBook?.totalPages;
    const totalUniquePages = totalPages; // Якщо унікальні сторінки йдуть по порядку від 1 до N

    const progressPercentage = Math.round((uniquePagesRead.size / totalUniquePages) * 100);

    if (uniquePagesRead.size >= totalUniquePages) {
      return { percentage: 100, pagesRead: uniquePagesRead.size };
    } else {
      return { percentage: progressPercentage, pagesRead: uniquePagesRead.size };
    }
  };

  const { percentage, pagesRead } = calculateProgress(readBook);

  // useEffect(() => {}, []);

  const radius = 65;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = ((100 - percentage) / 100) * circumference;

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
          <p>{percentage} %</p>
          <span>{pagesRead} pages read</span>
        </Content>
      </ContentWrapper>
    </StatisticsWrapper>
  );
};

export default Statistics;
