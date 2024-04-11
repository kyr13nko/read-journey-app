import styled from "styled-components";
import { SvgBtn } from "../../../styles/GlobalStyles";

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  z-index: 11;

  width: 100%;
  height: 100%;

  background-color: var(--color-bg-item);

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const CloseBtn = styled(SvgBtn)``;
