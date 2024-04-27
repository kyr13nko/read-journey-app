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

  width: 80px;
  height: 80px;

  background-color: var(--color-bg-item);
  border-radius: 50%;

  margin: 0 auto;

  margin-top: 0.375rem;
  margin-bottom: 1.25rem;

  & img {
    width: 32px;
    height: 32px;
  }

  @media screen and (min-width: 768px) {
    width: 100px;
    height: 100px;

    margin-top: 2.25rem;

    margin-bottom: 3.25rem;

    & img {
      width: 50px;
      height: 50px;
    }
  }

  @media screen and (min-width: 1440px) {
    margin-top: 2.875rem;
  }
`;
