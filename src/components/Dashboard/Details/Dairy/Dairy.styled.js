import styled, { css } from "styled-components";
import { SvgBtn } from "../../../../styles/GlobalStyles";
import { Wrapper } from "../Details.styled";

export const DairyWrapper = styled(Wrapper)`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.125rem;

  height: 13.1875rem;

  padding: 1rem;

  @media screen and (min-width: 768px) {
    gap: 1rem;

    height: 15.75rem;
  }

  @media screen and (min-width: 1440px) {
    gap: 1.375rem;

    padding: 1.25rem;

    height: 100%;
    max-height: 23.3125rem;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0.3125rem;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--color-bg-el);
    border-radius: 0.5rem;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: var(--color-green);
  }

  @media screen and (min-width: 1440px) {
    gap: 2.5rem;
  }

  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 1.25rem;
    left: 1.4375rem;

    width: 0.125rem;
    height: calc(100% - 2.5rem);

    background-color: var(--color-bg-el);

    @media screen and (min-width: 768px) {
      left: 1.5625rem;
    }

    @media screen and (min-width: 1440px) {
      left: 1.8125rem;
    }
  }
`;

export const DateContent = styled.li`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 0 0.5rem 0 1.875rem;

  @media screen and (min-width: 1440px) {
    gap: 1.75rem;
  }

  & div {
    display: flex;
    justify-content: space-between;
  }
`;

export const Marker = styled.div`
  position: absolute;
  left: 0;

  width: 1rem;
  height: 1rem;

  background-color: var(--color-bg);
  border: 4px solid var(--color-text-dark);
  border-radius: 0.25rem;

  ${(props) =>
    props.isLastDate &&
    css`
      border-color: var(--color-text);
    `}

  @media screen and (min-width: 768px) {
    /* left: -0.5625rem; */

    width: 1.25rem;
    height: 1.25rem;

    border-width: 0.3125rem;
  }
`;

export const DateText = styled.p`
  font-weight: 700;
  font-size: 0.75rem;
  line-height: 133%;
  letter-spacing: 0.02em;
  color: var(--color-text-dark);

  ${(props) =>
    props.isLastDate &&
    css`
      color: var(--color-text);
    `}

  @media screen and (min-width: 768px) {
    font-size: 1rem;
    line-height: 112%;
  }
`;

export const TotalPages = styled.p`
  font-size: 0.75rem;
  line-height: 133%;
  letter-spacing: -0.02em;
  color: var(--color-text-dark);

  @media screen and (min-width: 768px) {
    font-size: 0.875rem;
    line-height: 129%;
    letter-spacing: -0.02em;
  }
`;

export const ReadList = styled.ul``;

export const ReadItem = styled.li``;

export const ReadSvg = styled.svg`
  width: 3.75rem;
  height: 1.5625rem;
`;

export const DeleteBtn = styled(SvgBtn)`
  width: 0.875rem;
  height: 0.875rem;

  transition: var(--transition);

  &:hover {
    transform: rotate(10deg) scale(1.05);
  }
`;
