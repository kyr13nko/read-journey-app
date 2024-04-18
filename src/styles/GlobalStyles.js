import "modern-normalize";

import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "Gilroy";
    src: local("Gilroy Medium"), local("Gilroy-Medium"), url("Gilroy-Medium.woff2") format("woff2"),
      url("Gilroy-Medium.woff") format("woff"), url("Gilroy-Medium.ttf") format("truetype");
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: "Gilroy";
    src: local("Gilroy Bold"), local("Gilroy-Bold"), url("Gilroy-Bold.woff2") format("woff2"),
      url("Gilroy-Bold.woff") format("woff"), url("Gilroy-Bold.ttf") format("truetype");
    font-weight: 700;
    font-style: normal;
  }

  :root {
    --color-bg: #141414;
    --color-bg-el: #1f1f1f;
    --color-bg-item: #262626;
    --color-overlay: rgba(20, 20, 20, 0.6);


    --color-text: #f9f9f9;
    --color-text-dark: #686868;
    --color-text-50: rgba(227, 227, 227, 0.5);
    --color-border-hover: rgba(249, 249, 249, 0.2);
    --color-border-modal: rgba(104, 104, 104, 0.2);
    

    --color-2: rgba(227, 227, 227, 0.3);

    --color-green: #30b94d;
    --color-red: #e90516;
    --color-blue: #4f92f7;

    --transition: all 400ms ease;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, "Gilroy", sans-serif;
    font-weight: 500;
    font-optical-sizing: auto;
    margin: 0;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    background-color: var(--color-bg);
    color: var(--color-text);

    min-height: 100vh;

    &::-webkit-scrollbar {
      width: 0.25rem;
    }
    
    &::-webkit-scrollbar-track {
      background: var(--color-overlay);
      border-radius: 0.5rem;
    }
    
    &::-webkit-scrollbar-thumb {
      background: var(--color-text-dark); 
      border-radius: 0.5rem;
    }
    
    &::-webkit-scrollbar-thumb:hover {
      background: var(--color-green); 
    }  
  }

  code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }

  #root {
    @media screen and (min-width: 320px) {
      padding: 1.25rem 0;
    }

    @media screen and (min-width: 768px) {
      padding: 2rem 0;
    }
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul, ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }

  img {
    display: block;
    width: 100%;
  }

  button {
    background-color: transparent;
    cursor: pointer;
  }
`;

export const Container = styled.div`
  @media screen and (min-width: 320px) {
    max-width: 100%;
    padding: 0 1.25rem;
    margin: 0 auto;
  }

  @media screen and (min-width: 375px) {
    max-width: 23.4375rem;
  }

  @media screen and (min-width: 768px) {
    max-width: 48rem;
    padding: 0 2rem;
  }

  @media screen and (min-width: 1440px) {
    max-width: 80rem;
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;

  padding: 0.625rem 0 1.25rem;

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 1rem;

    padding: 1rem 0 2rem;
  }
`;

export const Button = styled.button`
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 129%;
  letter-spacing: 0.02em;
  color: var(--color-text);

  border: 1px solid var(--color-border-hover);
  border-radius: 1.875rem;

  transition: var(--transition);

  &:hover {
    color: var(--color-bg-el);
    background-color: var(--color-text);

    border: 1px solid transparent;
  }

  @media screen and (min-width: 768px) {
    font-size: 1rem;
    line-height: 112%;
  }
`;

export const SvgBtn = styled.button`
  line-height: 0;
  border: none;

  margin: 0;
  padding: 0;

  & svg {
    width: 100%;
    height: 100%;
  }
`;

export const BookWrapper = styled.div`
  flex-grow: 1;

  position: relative;

  background-color: var(--color-bg-el);
  border-radius: 1.875rem;

  padding: 2.5rem 1.25rem;

  @media screen and (min-width: 768px) {
    padding: 2.5rem;
  }

  @media screen and (min-width: 1440px) {
    padding: 2.5rem 2.5rem 1.75rem;
  }
`;

export const BookList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1.6875rem 1.25rem;

  margin-top: 2.125rem;

  @media screen and (min-width: 768px) {
    gap: 1.6875rem 1.5625rem;

    margin-top: 1.75rem;
  }

  @media screen and (min-width: 1440px) {
    gap: 1.6875rem 1.25rem;
  }
`;
