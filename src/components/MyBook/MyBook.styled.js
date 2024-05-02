import styled from "styled-components";

export const Book = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 9.125rem;

  margin: 0 auto;
  margin-top: 2.5rem;

  @media screen and (min-width: 768px) {
    width: 19.8125rem;

    margin-top: 2rem;
  }

  @media screen and (min-width: 1440px) {
    width: 31.25rem;
    margin-top: 2.75rem;
  }

  & img {
    width: 8.5625rem;
    height: 13rem;

    border-radius: 0.5rem;

    @media screen and (min-width: 768px) {
      width: 10.5625rem;
      height: 16rem;
    }
  }

  & h4 {
    font-weight: 700;
    font-size: 0.875rem;
    line-height: 129%;
    letter-spacing: -0.02em;
    text-align: center;

    margin-top: 0.625rem;

    @media screen and (min-width: 768px) {
      font-size: 1.25rem;
      line-height: 100%;

      margin-top: 1.5625rem;
    }
  }

  & h3 {
    font-size: 0.625rem;
    line-height: 120%;
    letter-spacing: -0.02em;
    text-align: center;

    color: var(--color-text-dark);

    margin-top: 0.3125rem;

    @media screen and (min-width: 768px) {
      font-size: 0.875rem;
      line-height: 129%;
    }
  }
`;

export const SvgWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.25rem;

  & svg {
    width: 2.5rem;
    height: 2.5rem;

    @media screen and (min-width: 768px) {
      width: 3.125rem;
      height: 3.125rem;
    }
  }

  @media screen and (min-width: 768px) {
    margin: 0 auto;
    margin-top: 1rem;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 1.5625rem;
    margin-bottom: 1.25rem;
  }
`;
