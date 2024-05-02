import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;

  & img {
    width: 3.125rem;
    height: 3.125rem;
  }

  @media screen and (min-width: 768px) {
    gap: 0.875rem;

    & img {
      width: 4.375rem;
      height: 4.375rem;
    }
  }
`;

export const Title = styled.p`
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 100%;
  letter-spacing: -0.02em;
  text-align: center;

  margin-top: 0.625rem;

  @media screen and (min-width: 768px) {
    font-size: 1.25rem;

    margin-top: 1.125rem;
  }
`;

export const Text = styled.p`
  font-size: 0.875rem;
  line-height: 129%;
  letter-spacing: -0.02em;
  text-align: center;
  color: var(--color-text-dark);

  width: 15.125rem;

  & span {
    color: var(--color-text);
  }
`;
