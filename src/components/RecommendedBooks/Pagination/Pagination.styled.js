import styled from "styled-components";
import { SvgBtn } from "../../../styles/GlobalStyles";

export const Chevron = styled(SvgBtn)`
  width: 2.5rem;
  height: 2.5rem;

  border: 1px solid var(--color-border-hover);
  border-radius: 50%;

  & svg {
    width: 1rem;
    height: 1rem;
    stroke: ${({ disabled }) => (disabled ? `var(--color-border-hover)` : `var(--color-text)`)};

    @media screen and (min-width: 768px) {
      width: 1.25rem;
      height: 1.25rem;
    }
  }
`;
