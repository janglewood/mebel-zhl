import { theme } from "theme";
import styled, { css } from "styled-components";

export const stylesMap = {
  // "heading-1": css`
  //   font-family: Comfortaa;
  //   font-weight: 700;
  //   font-size: ${UI_TEXT_SIZES[9].fontSize};
  //   line-height: ${UI_TEXT_SIZES[9].lineHeight};
  // `,
  // "heading-2": css`
  //   font-family: Comfortaa;
  //   font-weight: 700;
  //   font-size: ${UI_TEXT_SIZES[7].fontSize};
  //   line-height: ${UI_TEXT_SIZES[7].lineHeight};
  // `,
  "nav-link": css`
    font-family: Comfortaa;
    font-weight: inherit;
    font-size: 18px;
    line-height: 20px;
    color: ${theme.palette.fonts.nav};
  `,
};

export const Text = styled.span`
  ${({ style }) => ({ ...style })};
  ${({ type }) => stylesMap[type]};
  /* font-weight: ${({ fontWeight }) => fontWeight};
  text-transform: ${({ capitalize }) => (capitalize ? "capitalize" : "none")};
  color: ${({ color, theme }) => (color ? theme.palette.fonts[color] : "")}; */
`;
