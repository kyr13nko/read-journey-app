import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  & p {
    display: none;

    @media screen and (min-width: 768px) {
      display: block;
      font-weight: 700;
      font-size: 1.125rem;
      line-height: 100%;
      letter-spacing: 0.02em;
      text-transform: uppercase;
    }
  }

  & svg {
    width: 2.625rem;
    height: 1.0625rem;
  }
`;
