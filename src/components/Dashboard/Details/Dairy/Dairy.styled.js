import styled from "styled-components";
import { SvgBtn } from "../../../../styles/GlobalStyles";
import { Wrapper } from "../Details.styled";

export const DairyWrapper = styled(Wrapper)`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.125rem;

  padding: 16px 16px 16px 23px;

  @media screen and (min-width: 768px) {
    gap: 1rem;
  }

  @media screen and (min-width: 1440px) {
    gap: 1.375rem;

    padding: 20px;
  }
`;

export const List = styled.ul`
  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 1.25rem;

    width: 2px;
    height: calc(100% - 2.5rem);

    background-color: var(--color-bg-el);
  }
`;

export const DateContent = styled.li`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding-left: 1.25rem;

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
  /* top: 2px; */
  left: -7px;

  width: 16px;
  height: 16px;

  background-color: var(--color-bg);
  border: 4px solid var(--color-text);
  border-radius: 4px;

  @media screen and (min-width: 768px) {
    /* top: 2px; */
    left: -9px;

    width: 20px;
    height: 20px;

    border-width: 5px;
  }
`;

export const DateText = styled.p`
  font-weight: 700;
  font-size: 12px;
  line-height: 133%;
  letter-spacing: 0.02em;
  color: var(--color-text);

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 112%;
  }
`;

export const TotalPages = styled.p`
  font-size: 12px;
  line-height: 133%;
  letter-spacing: -0.02em;
  color: var(--color-text-dark);

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 129%;
    letter-spacing: -0.02em;
  }
`;

export const ReadList = styled.ul`
  /* overflow: hidden auto; */
`;

export const ReadItem = styled.li``;

export const ReadSvg = styled.svg`
  width: 60px;
  height: 25px;
`;

export const DeleteBtn = styled(SvgBtn)`
  width: 0.875rem;
  height: 0.875rem;

  transition: var(--transition);

  &:hover {
    transform: rotate(10deg) scale(1.05);
  }
`;
