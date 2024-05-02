import { useState } from "react";

import Dairy from "./Dairy/Dairy";
import Statistics from "./Statistics/Statistics";

import sprite from "../../../assets/images/sprite.svg";

import { Title } from "../Dashboard.styled";
import { BtnWrapper, Button, DetailsWrapper, StatisticsText } from "./Details.styled";

const Details = () => {
  const [detailsPage, setDetailsPage] = useState("dairy");

  const handleClickDairyBtn = () => {
    setDetailsPage("dairy");
  };
  const handleClickStatisticsBtn = () => {
    setDetailsPage("statistics");
  };

  return (
    <DetailsWrapper>
      <Title>{detailsPage === "dairy" ? "Dairy" : "Statistics"}</Title>

      {detailsPage === "statistics" ? (
        <StatisticsText>
          Each page, each chapter is a new round of knowledge, a new step towards understanding. By
          rewriting statistics, we create our own reading history.
        </StatisticsText>
      ) : null}

      {detailsPage === "dairy" ? <Dairy /> : <Statistics />}

      <BtnWrapper>
        <Button onClick={handleClickDairyBtn}>
          <svg>
            {detailsPage === "dairy" ? (
              <use href={`${sprite}#hourglass-active`} />
            ) : (
              <use href={`${sprite}#hourglass-pass`} />
            )}
          </svg>
        </Button>
        <Button onClick={handleClickStatisticsBtn}>
          <svg>
            {detailsPage === "dairy" ? (
              <use href={`${sprite}#chart`} />
            ) : (
              <use href={`${sprite}#chart-active`} />
            )}
          </svg>
        </Button>
      </BtnWrapper>
    </DetailsWrapper>
  );
};

export default Details;
