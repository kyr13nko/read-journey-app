import styled from "styled-components";
import { Button } from "../../../styles/GlobalStyles";

export const LogoutNavButton = styled(Button)`
  padding: 0.75rem 1.75rem;

  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const LogoutBurgerButton = styled(Button)`
  position: absolute;
  bottom: 2.5rem;

  padding: 0.625rem 1.25rem;
`;
