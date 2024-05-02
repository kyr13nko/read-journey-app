import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;

  height: 85%;

  margin: 4.0625rem auto;

  @media screen and (min-width: 768px) {
    gap: 1.25rem;
  }

  @media screen and (min-width: 1440px) {
    margin: auto;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 6.25rem;
  height: 6.25rem;

  background-color: var(--color-bg-item);
  border-radius: 50%;

  & img {
    width: 3.125rem;
    height: 3.125rem;
  }

  @media screen and (min-width: 1440px) {
    width: 8.125rem;
    height: 8.125rem;

    & img {
      width: 4.375rem;
      height: 4.375rem;
    }
  }
`;

export const Text = styled.p`
  font-size: 0.875rem;
  line-height: 129%;
  letter-spacing: -0.02em;
  text-align: center;

  color: var(--color-text);

  & span {
    color: var(--color-text-dark);
  }
`;
