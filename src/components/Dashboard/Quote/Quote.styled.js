import styled from "styled-components";
import { ContentWrapper } from "../Dashboard.styled";

export const BlockWrapper = styled(ContentWrapper)`
  display: none;

  & img {
    width: 2.5rem;
    height: 2.5rem;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    align-items: center;
    gap: 0.875rem;

    padding: 0.875rem 1.25rem;
  }
`;

export const Text = styled.p`
  font-size: 0.875rem;
  line-height: 129%;
  letter-spacing: -0.02em;

  color: var(--color-text-dark);

  & span {
    color: var(--color-text);
  }
`;
