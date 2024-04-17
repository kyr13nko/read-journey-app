import styled from "styled-components";
import { Button } from "../../../styles/GlobalStyles";

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  width: 8.5625rem;

  & img {
    height: 13rem;
    border-radius: 0.5rem;

    cursor: pointer;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.125rem;

  & h4 {
    font-weight: 700;
    font-size: 0.875rem;
    line-height: 129%;
    letter-spacing: -0.02em;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  & h3 {
    font-size: 0.625rem;
    line-height: 120%;
    letter-spacing: -0.02em;
    color: var(--color-text-dark);
  }
`;

export const ModalCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;

  @media screen and (min-width: 768px) {
    gap: 2rem;
  }
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & img {
    width: 140px;
    height: 213px;

    border-radius: 0.5rem;

    @media screen and (min-width: 768px) {
      width: 153px;
      height: 233px;
    }
  }

  & h4 {
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 100%;
    letter-spacing: -0.02em;
    text-align: center;

    margin-top: 1rem;

    @media screen and (min-width: 768px) {
      font-size: 1.25rem;
    }
  }

  & h3 {
    font-size: 0.75rem;
    line-height: 117%;
    letter-spacing: -0.02em;
    text-align: center;

    color: var(--color-text-dark);

    margin-top: 0.125rem;

    @media screen and (min-width: 768px) {
      line-height: 129%;
      font-size: 0.875rem;
    }
  }

  & p {
    font-size: 0.625rem;
    line-height: 120%;
    letter-spacing: -0.02em;
    text-align: center;

    margin-top: 0.25rem;
  }
`;

export const AddToLibraryBtn = styled(Button)`
  padding: 0.75rem 1.5rem;

  @media screen and (min-width: 768px) {
    padding: 0.875rem 1.75rem;
  }
`;
