import styled from "styled-components";
import { SvgBtn } from "../../styles/GlobalStyles";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 14;
  background-color: var(--color-overlay);
`;

export const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 18.75rem;
  max-height: calc(100% - 1.25rem);

  background-color: var(--color-bg-el);

  border: 1px solid var(--color-border-modal);
  border-radius: 0.75rem;

  padding: 2.5rem;

  @media screen and (min-width: 375px) {
    width: 20.9375rem;
  }

  @media screen and (min-width: 768px) {
    width: ${({ width }) => `${width}px`};

    padding: 3.125rem;
  }
`;

export const CloseBtn = styled(SvgBtn)`
  position: absolute;
  top: 1rem;
  right: 1rem;

  width: 1.375rem;
  height: 1.375rem;

  cursor: pointer;

  & svg {
    border-radius: 50%;
    stroke: var(--color-text);

    transition: var(--transition);
  }

  &:hover svg {
    stroke: var(--color-text-dark);
  }
`;
