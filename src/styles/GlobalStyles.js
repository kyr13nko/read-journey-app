import "modern-normalize";

import { createGlobalStyle } from "styled-components";

import GilroyMedium from "../assets/fonts/Gilroy-Medium.ttf";
import GilroyBold from "../assets/fonts/Gilroy-Bold.ttf";

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "Gilroy", sans-serif;
    font-style: normal;
    font-weight: 500;
    /* src: url(${GilroyMedium}); */
    src: url("../assets/fonts/Gilroy-Medium.ttf") format("truetype");
  }

  @font-face {
    font-family: "Gilroy", sans-serif;
    font-style: normal;
    font-weight: 700;
    /* src: url(${GilroyBold}); */
    src: url("../assets/fonts/Gilroy-Bold.ttf") format("truetype");
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
    /* font-family: "Gilroy", sans-serif; */
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

  ul,
  ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
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
