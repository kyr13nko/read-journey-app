import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: var(--color-bg-el);
  border-radius: 1.875rem;

  padding: 1.25rem;

  @media screen and (min-width: 768px) {
    padding: 2rem;
  }

  @media screen and (min-width: 1440px) {
    padding: 2.5rem 1.25rem;
  }
`;
