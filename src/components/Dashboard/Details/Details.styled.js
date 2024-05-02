import styled from "styled-components";
import { SvgBtn } from "../../../styles/GlobalStyles";

export const DetailsWrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  @media screen and (min-width: 768px) {
    gap: 1rem;
  }

  @media screen and (min-width: 1440px) {
    gap: 1.25rem;
  }
`;

export const StatisticsText = styled.p`
  display: none;

  @media screen and (min-width: 1440px) {
    display: block;

    font-size: 0.875rem;
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
    right: 1rem;
  }

  @media screen and (min-width: 1440px) {
    right: 0;
  }
`;

export const Button = styled(SvgBtn)`
  width: 1rem;
  height: 1rem;

  @media screen and (min-width: 768px) {
    width: 1.25rem;
    height: 1.25rem;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  background-color: var(--color-bg-item);
  border-radius: 0.75rem;

  @media screen and (min-width: 375px) {
    width: 18.4375rem;
    height: 13.1875rem;
  }

  @media screen and (min-width: 768px) {
    width: 20.0625rem;
    height: 15.75rem;
  }

  @media screen and (min-width: 1440px) {
    width: 100%;
    height: 100%;
  }
`;
