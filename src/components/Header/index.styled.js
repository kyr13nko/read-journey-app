import styled from "styled-components";
import { Button, Container, SvgBtn } from "../../styles/GlobalStyles";

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

export const LogoutButton = styled(Button)`
  padding: 12px 28px;

  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const LogoutBurgerButton = styled(Button)`
  padding: 10px 20px;
`;

export const BurgerBtn = styled(SvgBtn)`
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  background-color: var(--color-overlay);
`;
