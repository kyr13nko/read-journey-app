import "modern-normalize";

import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Gilroy';
    src: local('Gilroy Medium'), local('Gilroy-Medium'),
        url('Gilroy-Medium.woff2') format('woff2'),
        url('Gilroy-Medium.woff') format('woff'),
        url('Gilroy-Medium.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Gilroy';
    src: local('Gilroy Bold'), local('Gilroy-Bold'),
        url('Gilroy-Bold.woff2') format('woff2'),
        url('Gilroy-Bold.woff') format('woff'),
        url('Gilroy-Bold.ttf') format('truetype');
    font-weight: 700;
    font-style: normal;
  }

  * {
    box-sizing: border-box;
  }

  :root {
    --color-bg: #141414;
    --color-bg-el: #1f1f1f;

    --color-text: #f9f9f9;
    --color-text-dark: #686868;

    --color-1: #262626;
    --color-2: rgba(227, 227, 227, 0.3);

    --color-green: #30b94d;
    --color-blue: #4f92f7;

    --transition: all 400ms ease;
  }

  body {
    font-family: "Gilroy";
    font-weight: 500;
    font-optical-sizing: auto;
    margin: 0;

    -webkit-font-smoothing: antialiased;

    background-color: var(--color-bg);
    color: var(--color-text);

    min-height: 100vh;
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
    padding: 0 20px;
    margin: 0 auto;
  }

  @media screen and (min-width: 375px) {
    max-width: 375px;
  }

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 0 32px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1280px;
  }
`;
