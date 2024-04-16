import styled from "styled-components";

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  width: 8.5625rem;

  & img {
    height: 13rem;
    border-radius: 0.5rem;

    cursor: pointer;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.125rem;

  & h4 {
    font-weight: 700;
    font-size: 0.875rem;
    line-height: 129%;
    letter-spacing: -0.02em;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  & h3 {
    font-size: 0.625rem;
    line-height: 120%;
    letter-spacing: -0.02em;
    color: var(--color-text-dark);
  }
`;
