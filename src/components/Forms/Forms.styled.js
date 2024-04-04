import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  font-size: 0.75rem;
  line-height: 117%;
  letter-spacing: -0.02em;
  text-decoration: underline;
  text-decoration-skip-ink: none;

  color: var(--color-text-dark);

  @media screen and (min-width: 768px) {
    font-size: 0.875rem;
    line-height: 129%;
  }
`;
