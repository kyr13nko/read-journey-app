import { Link } from "react-router-dom";
import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.25rem;
  flex-grow: 1;

  height: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media screen and (min-width: 768px) {
    gap: 0.875rem;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const Label = styled.span`
  position: absolute;
  top: 1rem;
  left: 1rem;

  font-size: 0.75rem;
  line-height: 133%;
  letter-spacing: -0.02em;

  color: var(--color-text-dark);

  @media screen and (min-width: 768px) {
    top: 1.125rem;
    left: 1.125rem;

    font-size: 0.875rem;
    line-height: 129%;
  }
`;

export const Input = styled.input`
  width: 100%;

  font-size: 0.75rem;
  line-height: 133%;
  letter-spacing: -0.02em;
  color: var(--color-text);

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  background-color: var(--color-bg-item);

  outline: none;
  border: 1px solid transparent;

  border-radius: 0.75rem;

  padding: 0.875rem;

  transition: var(--transition);

  &:hover,
  &:focus {
    border: 1px solid var(--color-border-hover);
  }

  &[id="name"] {
    padding-left: 3.625rem;
  }

  &[id="email"] {
    padding-left: 2.875rem;
  }

  &[id="password"] {
    padding-left: 4.875rem;
    padding-right: 4.875rem;
  }

  &::placeholder {
    font-size: 0.75rem;
    line-height: 133%;
    letter-spacing: -0.02em;
    color: var(--color-text);
  }

  @media screen and (min-width: 768px) {
    font-size: 0.875rem;
    line-height: 129%;

    padding: 1rem 0.875rem;

    &[id="name"] {
      padding-left: 4.25rem;
    }

    &[id="email"] {
      padding-left: 3.5rem;
    }

    &[id="password"] {
      padding-left: 5.625rem;
      padding-right: 5.625rem;
    }

    &::placeholder {
      font-size: 12px;
      line-height: 133%;
    }
  }
`;

export const PassSvg = styled.svg`
  position: absolute;
  top: 0.9375rem;
  right: 3.125rem;

  width: 1.125rem;
  height: 1.125rem;

  @media screen and (min-width: 768px) {
    top: 1rem;
    right: 3.5rem;

    width: 1.25rem;
    height: 1.25rem;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.875rem;

  @media screen and (min-width: 768px) {
    gap: 1.25rem;
  }
`;

export const Button = styled.button`
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 129%;
  letter-spacing: 0.02em;

  color: var(--color-bg-el);
  background-color: var(--color-text);

  border: 1px solid transparent;
  border-radius: 1.875rem;

  padding: 0.75rem 1.75rem;

  transition: var(--transition);

  &:hover {
    color: var(--color-text);
    background-color: transparent;

    border: 1px solid var(--color-border-hover);
  }

  @media screen and (min-width: 768px) {
    font-size: 1.25rem;
    line-height: 100%;

    padding: 1rem 3.375rem;
  }
`;

export const StyledLink = styled(Link)`
  font-size: 0.75rem;
  line-height: 117%;
  letter-spacing: -0.02em;
  text-decoration: underline;
  text-decoration-skip-ink: none;

  color: var(--color-text-dark);

  transition: var(--transition);

  &:hover {
    color: var(--color-text);
  }

  @media screen and (min-width: 768px) {
    font-size: 0.875rem;
    line-height: 129%;
  }
`;
