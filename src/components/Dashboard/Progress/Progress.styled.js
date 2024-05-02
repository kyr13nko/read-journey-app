import styled from "styled-components";

export const Text = styled.p`
  font-size: 0.875rem;
  line-height: 129%;
  letter-spacing: -0.02em;
  color: var(--color-text-dark);
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 5rem;
  height: 5rem;

  background-color: var(--color-bg-item);
  border-radius: 50%;

  margin: 0 auto;

  margin-top: 0.375rem;
  margin-bottom: 1.25rem;

  & img {
    width: 2rem;
    height: 2rem;
  }

  @media screen and (min-width: 768px) {
    width: 6.25rem;
    height: 6.25rem;

    margin-top: 2.25rem;

    margin-bottom: 3.25rem;

    & img {
      width: 3.125rem;
      height: 3.125rem;
    }
  }

  @media screen and (min-width: 1440px) {
    margin-top: 2.875rem;
  }
`;
