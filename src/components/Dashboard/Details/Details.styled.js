import styled from "styled-components";
import { SvgBtn } from "../../../styles/GlobalStyles";

export const BtnWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  display: flex;
  gap: 0.5rem;

  @media screen and (min-width: 768px) {
    right: 16px;
  }

  @media screen and (min-width: 1440px) {
    right: 0;
  }
`;

export const Button = styled(SvgBtn)`
  width: 16px;
  height: 16px;

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

export const Wrapper = styled.div`
  width: 295px;
  height: 211px;

  background-color: var(--color-bg-item);
  border-radius: 0.75rem;

  @media screen and (min-width: 768px) {
    width: 321px;
    height: 252px;
  }

  @media screen and (min-width: 1440px) {
    width: 100%;
    height: 100%;
  }
`;
