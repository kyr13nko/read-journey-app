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

  width: 100px;
  height: 100px;

  background-color: var(--color-bg-item);
  border-radius: 50%;

  & img {
    width: 50px;
    height: 50px;
  }

  @media screen and (min-width: 1440px) {
    width: 130px;
    height: 130px;

    & img {
      width: 70px;
      height: 70px;
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
