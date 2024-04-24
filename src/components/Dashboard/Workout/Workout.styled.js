import styled from "styled-components";
import { ContentWrapper } from "../Dashboard.styled";

export const BlockWrapper = styled(ContentWrapper)`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  @media screen and (min-width: 768px) {
    width: 313px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  @media screen and (min-width: 768px) {
    width: 253px;

    margin-top: 1.25rem;
  }
`;

export const Item = styled.li`
  display: flex;
  gap: 0.75rem;
`;

export const Number = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  background-color: var(--color-text);
  color: var(--color-bg-el);
  border-radius: 50%;
`;

export const Text = styled.p`
  font-size: 0.875rem;
  line-height: 129%;
  letter-spacing: -0.02em;

  & span {
    color: var(--color-text-dark);
  }
`;
