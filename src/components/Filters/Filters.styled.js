import styled from "styled-components";

export const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  width: 100%;

  @media screen and (min-width: 768px) {
    max-width: 295px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 313px;
  }
`;

export const Title = styled.p`
  font-size: 0.625rem;
  line-height: 120%;
  letter-spacing: -0.02em;

  @media screen and (min-width: 768px) {
    font-size: 0.875rem;
    line-height: 129%;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  gap: 1.25rem;
  /* flex-grow: 1; */

  /* height: 100%; */
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
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

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  color: var(--color-text);

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

  &[id="title"] {
    padding-left: 77px;
  }

  &[id="author"] {
    padding-left: 85px;
  }

  &::placeholder {
    font-size: 0.75rem;
    line-height: 133%;
    letter-spacing: -0.02em;
    color: var(--color-text);
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 129%;

    padding: 1rem 0.875rem;

    &[id="title"] {
      padding-left: 86px;
    }

    &[id="author"] {
      padding-left: 5.9375rem;
    }

    &::placeholder {
      font-size: 12px;
      line-height: 133%;
    }
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  align-self: self-start;

  font-weight: 700;
  font-size: 0.875rem;
  line-height: 129%;
  letter-spacing: 0.02em;

  color: var(--color-text);
  background-color: transparent;

  border: 1px solid var(--color-border-hover);
  border-radius: 1.875rem;

  padding: 0.625rem 1.25rem;

  transition: var(--transition);

  &:hover {
    color: var(--color-bg-el);
    background-color: var(--color-text);

    border: 1px solid transparent;
  }

  @media screen and (min-width: 768px) {
    font-size: 1rem;
    line-height: 112%;
    letter-spacing: 0.02em;

    padding: 0.75rem 1.75rem;
  }
`;
