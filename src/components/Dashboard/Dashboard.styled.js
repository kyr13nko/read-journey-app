import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  background-color: var(--color-bg-el);
  border-radius: 1.875rem;

  padding: 1.25rem;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 2rem;

    padding: 2rem;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: column;
    gap: 1.25rem;

    padding: 2.5rem 1.25rem;
  }
`;
