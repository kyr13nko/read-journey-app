import { Link } from "react-router-dom";
import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  flex-grow: 1;

  height: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media screen and (min-width: 768px) {
    gap: 14px;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const Label = styled.span`
  position: absolute;
  top: 16px;
  left: 16px;

  width: 18px;
  height: 18px;

  font-size: 12px;
  line-height: 133%;
  letter-spacing: -0.02em;

  color: var(--color-text-dark);

  @media screen and (min-width: 768px) {
    top: 18px;
    left: 18px;

    width: 20px;
    height: 20px;

    font-size: 14px;
    line-height: 129%;
  }
`;

export const Input = styled.input`
  width: 100%;

  font-size: 12px;
  line-height: 133%;
  letter-spacing: -0.02em;
  color: var(--color-text);

  background-color: var(--color-bg-item);

  outline: none;
  border: 1px solid transparent;

  border-radius: 12px;

  padding: 14px;

  transition: var(--transition);

  &:hover,
  &:focus {
    border: 1px solid var(--color-border-hover);
  }

  &[id="name"] {
    padding-left: 58px;
  }

  &[id="email"] {
    padding-left: 46px;
  }

  &[id="password"] {
    padding-left: 78px;
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 129%;

    padding: 16px 14px;

    &[id="name"] {
      padding-left: 68px;
    }

    &[id="email"] {
      padding-left: 56px;
    }

    &[id="password"] {
      padding-left: 90px;
    }
  }
`;

export const PassSvg = styled.svg`
  position: absolute;
  top: 15px;
  right: 16px;

  width: 18px;
  height: 18px;

  @media screen and (min-width: 768px) {
    top: 16px;
    right: 18px;

    width: 20px;
    height: 20px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;

  @media screen and (min-width: 768px) {
    gap: 20px;
  }
`;

export const Button = styled.button`
  font-weight: 700;
  font-size: 14px;
  line-height: 129%;
  letter-spacing: 0.02em;

  color: var(--color-bg-el);
  background-color: var(--color-text);

  border: 1px solid transparent;
  border-radius: 30px;

  padding: 12px 28px;

  transition: var(--transition);

  &:hover {
    color: var(--color-text);
    background-color: transparent;

    border: 1px solid var(--color-border-hover);
  }

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 100%;

    padding: 16px 54px;
  }
`;

export const StyledLink = styled(Link)`
  font-size: 0.75rem;
  line-height: 117%;
  letter-spacing: -0.02em;
  text-decoration: underline;
  text-decoration-skip-ink: none;

  color: var(--color-text-dark);

  @media screen and (min-width: 768px) {
    font-size: 0.875rem;
    line-height: 129%;
  }
`;
