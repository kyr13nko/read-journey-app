import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  0% , 25% { transform: rotate(0deg) }
  50% , 75% { transform: rotate(180deg) }
  100% { transform: rotate(360deg) }
`;

export const StyledLoader = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 6rem;
  height: 6rem;

  &::before,
  &::after {
    content: "";
    display: block;
    border: 3rem solid transparent;
    border-top-color: var(--color-text-dark);
    position: absolute;
    left: 0;
    top: 0;
    animation: ${rotate} 2s infinite ease-in;
  }

  &::before {
    border-color: transparent transparent transparent var(--color-blue);
    animation-delay: 0.5s;
  }
`;
