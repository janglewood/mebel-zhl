import { createGlobalStyle, DefaultTheme } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html,
  body {
      padding: 0;
      margin: 0;
  }

  a {
      color: inherit;
      text-decoration: none;
  }

  * {
      box-sizing: border-box;
  }

  ul {
    padding: 0;
  }
`;

export const theme: DefaultTheme = {
  palette: {
    fonts: {
      primary: "#55596D",
      navLink: "#55596D",
      navLinkActive: "#757CA5",
      white: "#ffffff",
      black: "#000000",
      error: "#d64021",
    },
    colors: {
      white: "#FFFFFF",
      violet: "#5454ba",
    },
    borders: {
      primary: "#9c9c9c",
      error: "#d64021",
    },
    backgrounds: {
      main: "#FFFFFF",
      homepage:
        "linear-gradient(359.6deg, rgba(166, 233, 200, 0.46) 25.06%, rgba(255, 255, 255, 0) 133.85%)",
      buttons: {
        primary: "#5454ba",
        disabled: "#9d9da5",
        secondary: "transparent",
        green: "#BBFFDE",
      },
    },
    shadows: {
      itemCard: `0px 4px 8px #757ca580`,
    },
    gradients: {
      mainButtonGradient:
        "linear-gradient(98.73deg, #BBFFDE 3.6%, #A6E9C8 121.17%)",
    },
  },
};
