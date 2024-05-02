import styled from "styled-components";
import { SvgBtn } from "../../../../styles/GlobalStyles";
import { Wrapper } from "../Details.styled";

export const DairyWrapper = styled(Wrapper)`
  /* display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem; */

  padding: 1rem;

  @media screen and (min-width: 768px) {
    /* gap: 1rem; */
  }

  @media screen and (min-width: 1440px) {
    /* gap: 1.25rem; */

    padding: 1.25rem;
  }
`;

export const DeleteBtn = styled(SvgBtn)`
  width: 0.875rem;
  height: 0.875rem;

  transition: var(--transition);

  &:hover {
    transform: rotate(10deg) scale(1.05);
  }
`;
