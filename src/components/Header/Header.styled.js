import styled from "styled-components";
import { Container, SvgBtn } from "../../styles/GlobalStyles";

export const StyledHeader = styled.header``;

export const StyledContainer = styled(Container)``;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: var(--color-bg-el);
  border-radius: 0.9375rem;

  padding: 0.75rem 1.25rem;

  @media screen and (min-width: 768px) {
    padding: 1rem;
  }
`;

export const UserData = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;
`;

export const BurgerBtn = styled(SvgBtn)`
  width: 1.75rem;
  height: 1.75rem;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
