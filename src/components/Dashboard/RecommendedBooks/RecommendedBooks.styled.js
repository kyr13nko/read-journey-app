import styled from "styled-components";
import { ContentWrapper } from "../Dashboard.styled";

export const BlockWrapper = styled(ContentWrapper)`
  display: flex;
  flex-direction: column;
  gap: 0.875rem;

  @media screen and (min-width: 768px) {
    width: 19.5625rem;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem;

  @media screen and (min-width: 768px) {
    margin-top: 0.375rem;
  }
`;

export const Card = styled.li`
  width: 4.4375rem;

  & img {
    height: 6.6875rem;
    border-radius: 0.5rem;
  }

  & h4 {
    font-weight: 700;
    font-size: 0.625rem;
    line-height: 120%;
    letter-spacing: -0.02em;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    margin-top: 0.5rem;
    margin-bottom: 0.125rem;
  }

  & h3 {
    font-size: 0.625rem;
    line-height: 120%;
    letter-spacing: -0.02em;
    color: var(--color-text-dark);
  }
`;
