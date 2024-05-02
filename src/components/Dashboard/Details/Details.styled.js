import styled from "styled-components";
import { SvgBtn } from "../../../styles/GlobalStyles";

export const DetailsWrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 768px) {
    gap: 16px;
  }

  @media screen and (min-width: 1440px) {
    gap: 20px;
  }
`;

export const StatisticsText = styled.p`
  display: none;

  @media screen and (min-width: 1440px) {
    display: block;

    font-size: 14px;
    line-height: 129%;
    letter-spacing: -0.02em;
    color: var(--color-text-dark);
  }
`;

export const BtnWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  display: flex;
  gap: 0.5rem;

  @media screen and (min-width: 768px) {
    right: 16px;
  }

  @media screen and (min-width: 1440px) {
    right: 0;
  }
`;

export const Button = styled(SvgBtn)`
  width: 16px;
  height: 16px;

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  background-color: var(--color-bg-item);
  border-radius: 0.75rem;

  @media screen and (min-width: 375px) {
    width: 295px;
    height: 211px;
  }

  @media screen and (min-width: 768px) {
    width: 321px;
    height: 252px;
  }

  @media screen and (min-width: 1440px) {
    width: 100%;
    height: 100%;
  }
`;
