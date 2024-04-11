import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const Avatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 700;
  font-size: 1rem;
  line-height: 100%;
  letter-spacing: -0.02em;

  width: 2.1875rem;
  height: 2.1875rem;

  color: var(--color-text);
  background-color: var(--color-bg-item);
  border: 1px solid var(--color-border-hover);
  border-radius: 50%;

  @media screen and (min-width: 768px) {
    width: 2.5rem;
    height: 2.5rem;
  }
`;

export const Name = styled.p`
  display: none;

  color: var(--color-text);

  @media screen and (min-width: 1440px) {
    display: block;

    font-weight: 700;
    font-size: 1rem;
    line-height: 112%;
    letter-spacing: -0.02em;
  }
`;
