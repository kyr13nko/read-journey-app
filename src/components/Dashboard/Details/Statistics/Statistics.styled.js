import styled from "styled-components";
import { Wrapper } from "../Details.styled";

export const StatisticsWrapper = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  padding: 20px;

  @media screen and (min-width: 768px) {
    gap: 16px;

    padding: 28px;
  }

  @media screen and (min-width: 1440px) {
    gap: 20px;

    padding: 20px;
  }
`;

export const CircleWrapper = styled.div`
  width: 116px;
  height: 116px;

  @media screen and (min-width: 768px) {
    width: 138px;
    height: 138px;
  }

  @media screen and (min-width: 1440px) {
    width: 189px;
    height: 189px;
  }
`;

export const CircleSvg = styled.svg`
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 111%;
  letter-spacing: -0.02em;
  fill: var(--color-text);

  @media screen and (min-width: 768px) {
    font-size: 1.25rem;
    line-height: 100%;
  }
`;

export const Circle = styled.circle`
  fill: transparent;
  stroke: var(--color-bg-el);
  stroke-width: 15px;
`;

export const PercentageCircle = styled.circle`
  fill: transparent;
  stroke: var(--color-green);
  stroke-width: 15px;
  stroke-linecap: round;
  transform: rotate(-90deg);
  transform-origin: 75px 75px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

export const ContentBlock = styled.div`
  width: 14px;
  height: 14px;

  background-color: var(--color-green);
  border-radius: 4px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  @media screen and (min-width: 768px) {
    gap: 8px;
  }

  p {
    font-size: 14px;
    line-height: 129%;
    letter-spacing: -0.02em;

    @media screen and (min-width: 768px) {
      font-size: 20px;
      line-height: 100%;
    }
  }

  span {
    font-size: 10px;
    line-height: 120%;
    letter-spacing: -0.02em;
    text-align: center;
    color: var(--color-text-dark);

    @media screen and (min-width: 768px) {
      font-size: 12px;
      line-height: 117%;
    }
  }
`;
