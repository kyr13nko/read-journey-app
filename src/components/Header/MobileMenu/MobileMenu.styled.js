import styled from "styled-components";
import { Container, SvgBtn } from "../../../styles/GlobalStyles";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: ${({ $isOpen }) => ($isOpen ? "0" : "-100%")};
  z-index: 12;

  width: 100%;
  height: 100%;
  /* height: 100vh; */

  background-color: var(--color-overlay);

  transition: var(--transition);
`;

export const MobileContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.25rem;

  position: fixed;
  top: 0;
  right: ${({ $isOpen }) => ($isOpen ? "0" : "-100%")};
  z-index: 13;

  min-width: 12.5rem;
  width: 60%;
  height: 100%;
  /* height: 100vh; */

  background-color: var(--color-bg-item);

  transition: right 0.3s ease;

  padding: 2.5rem 3.375rem 5rem 3.375rem;
`;

export const CloseBtn = styled(SvgBtn)`
  position: absolute;
  top: 2.125rem;
  right: 2.5rem;
`;
