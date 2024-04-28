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
