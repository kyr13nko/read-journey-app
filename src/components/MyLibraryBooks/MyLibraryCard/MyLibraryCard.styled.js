import styled from "styled-components";
import { SvgBtn } from "../../../styles/GlobalStyles";

export const BookCardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DeleteBtn = styled(SvgBtn)`
  width: 1.75rem;
  height: 1.75rem;

  transition: var(--transition);

  &:hover {
    transform: rotate(10deg) scale(1.05);
  }
`;
