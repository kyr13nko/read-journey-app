import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavList = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 2rem;
  }

  @media screen and (min-width: 1440px) {
    gap: 2.5rem;
  }
`;

const StyledLink = styled(NavLink)`
  position: relative;

  font-size: 0.875rem;
  line-height: 129%;
  letter-spacing: -0.02em;

  color: var(--color-text-dark);

  transition: var(--transition);

  &:hover {
    color: var(--color-text);
  }

  &.active {
    color: var(--color-text);

    &::after {
      content: "";
      position: absolute;
      bottom: -0.5rem;
      left: -0.125rem;
      width: calc(100% + 0.25rem);
      height: 0.1875rem;
      background-color: var(--color-blue);
      border-radius: 0.5rem;

      @media screen and (min-width: 768px) {
        bottom: -0.625rem;
      }
    }
  }

  @media screen and (min-width: 768px) {
    font-size: 1rem;
    line-height: 112%;
  }
`;

export const NavMenuLink = styled(StyledLink)`
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const NavBurgerLink = styled(StyledLink)`
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
