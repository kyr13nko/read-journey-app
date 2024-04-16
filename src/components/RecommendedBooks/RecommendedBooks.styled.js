import styled from "styled-components";

export const Wrapper = styled.div`
  flex-grow: 1;

  position: relative;

  background-color: var(--color-bg-el);
  border-radius: 1.875rem;

  padding: 2.5rem 1.25rem;

  @media screen and (min-width: 768px) {
    padding: 2.5rem;
  }

  @media screen and (min-width: 1440px) {
    padding: 2.5rem 2.5rem 1.75rem;
  }
`;

export const BookList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1.6875rem 1.25rem;

  margin-top: 2.125rem;

  @media screen and (min-width: 768px) {
    gap: 1.6875rem 1.5625rem;

    margin-top: 1.75rem;
  }

  @media screen and (min-width: 1440px) {
    gap: 1.6875rem 1.25rem;
  }
`;
