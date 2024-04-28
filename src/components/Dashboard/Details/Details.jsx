import { useState } from "react";

import Dairy from "./Dairy/Dairy";
import Statistics from "./Statistics/Statistics";

import sprite from "../../../assets/images/sprite.svg";

import { ReadingWrapper, Title } from "../Dashboard.styled";
import { BtnWrapper, Button } from "./Details.styled";

const Details = () => {
  const [detailsPage, setDetailsPage] = useState("dairy");

  const handleClickDairyBtn = () => {
    setDetailsPage("dairy");
  };
  const handleClickStatisticsBtn = () => {
    setDetailsPage("statistics");
  };

  return (
    <ReadingWrapper>
      <Title>{detailsPage === "dairy" ? "Dairy" : "Statistics"}</Title>
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
      {detailsPage === "dairy" ? <Dairy /> : <Statistics />}
    </ReadingWrapper>
  );
};

export default Details;
