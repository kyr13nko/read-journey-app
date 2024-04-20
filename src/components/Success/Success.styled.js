import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  & img {
    width: 50px;
    height: 50px;
  }

  @media screen and (min-width: 768px) {
    gap: 14px;

    & img {
      width: 70px;
      height: 70px;
    }
  }
`;

export const Title = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 100%;
  letter-spacing: -0.02em;
  text-align: center;

  margin-top: 10px;

  @media screen and (min-width: 768px) {
    font-size: 20px;

    margin-top: 18px;
  }
`;

export const Text = styled.p`
  font-size: 14px;
  line-height: 129%;
  letter-spacing: -0.02em;
  text-align: center;
  color: var(--color-text-dark);

  width: 242px;

  & span {
    color: var(--color-text);
  }
`;
