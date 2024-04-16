import styled from "styled-components";
import { SvgBtn } from "../../../styles/GlobalStyles";

export const Wrapper = styled.div`
  position: absolute;
  top: 2.5rem;
  right: 1.25rem;

  display: flex;
  gap: 0.5rem;

  @media screen and (min-width: 768px) {
    right: 2.5rem;
  }
`;

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
