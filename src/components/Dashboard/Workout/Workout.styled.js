import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  background-color: var(--color-bg-item);
  border-radius: 0.75rem;

  padding: 1.25rem;
`;

export const Title = styled.h3`
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 100%;
  letter-spacing: -0.02em;

  @media screen and (min-width: 768px) {
    margin-bottom: 1.25rem;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
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
