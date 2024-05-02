import styled from "styled-components";
import { Wrapper } from "../Details.styled";

export const StatisticsWrapper = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;

  padding: 1.25rem;

  @media screen and (min-width: 768px) {
    gap: 1rem;

    padding: 1.75rem;
  }

  @media screen and (min-width: 1440px) {
    gap: 1.25rem;

    padding: 1.25rem;
  }
`;

export const CircleWrapper = styled.div`
  width: 7.25rem;
  height: 7.25rem;

  @media screen and (min-width: 768px) {
    width: 8.625rem;
    height: 8.625rem;
  }

  @media screen and (min-width: 1440px) {
    width: 11.8125rem;
    height: 11.8125rem;
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
  stroke-width: 0.9375rem;
`;

export const PercentageCircle = styled.circle`
  fill: transparent;
  stroke: var(--color-green);
  stroke-width: 0.9375rem;
  stroke-linecap: round;
  transform: rotate(-90deg);
  transform-origin: 4.6875rem 4.6875rem;
`;

export const ContentWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

export const ContentBlock = styled.div`
  width: 0.875rem;
  height: 0.875rem;

  background-color: var(--color-green);
  border-radius: 0.25rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  @media screen and (min-width: 768px) {
    gap: 0.5rem;
  }

  p {
    font-size: 0.875rem;
    line-height: 129%;
    letter-spacing: -0.02em;

    @media screen and (min-width: 768px) {
      font-size: 1.25rem;
      line-height: 100%;
    }
  }

  span {
    font-size: 0.625rem;
    line-height: 120%;
    letter-spacing: -0.02em;
    text-align: center;
    color: var(--color-text-dark);

    @media screen and (min-width: 768px) {
      font-size: 0.75rem;
      line-height: 117%;
    }
  }
`;
