import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  background-color: var(--color-bg-el);
  border-radius: 1.875rem;

  padding: 1.25rem;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 2rem;

    padding: 2rem;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: column;
    gap: 1.25rem;

    min-width: 22.0625rem;
    max-width: 22.0625rem;

    padding: 2.5rem 1.25rem 1.25rem;
  }
`;

export const ContentWrapper = styled.div`
  background-color: var(--color-bg-item);
  border-radius: 0.75rem;

  padding: 1.25rem;
`;

export const Title = styled.h3`
  font-weight: 700;
  font-size: 18px;
  line-height: 100%;
  letter-spacing: -0.02em;

  @media screen and (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const StyledLink = styled(Link)`
  font-size: 0.875rem;
  line-height: 129%;
  letter-spacing: -0.02em;
  text-decoration: underline;
  text-decoration-skip-ink: none;

  color: var(--color-text-dark);
`;

export const ReadingWrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 0.875rem;

  margin-top: 1.25rem;

  @media screen and (min-width: 768px) {
    flex-grow: 1;

    margin-top: 0;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 1.25rem;
  }
`;
