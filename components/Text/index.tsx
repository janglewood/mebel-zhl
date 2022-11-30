import styled, {
  css,
  DefaultTheme,
  FlattenInterpolation,
  ThemeProps,
} from "styled-components";
import { theme } from "styles/theme";
import { FieldErrors } from "../../types";

type TextTypes = "h1" | "text" | "nav-link" | "button-text" | "error";

interface IText {
  type: TextTypes;
  style?: React.CSSProperties;
  children: string | FieldErrors | React.ReactNode;
  color?: keyof typeof theme.palette.fonts;
}

export const stylesMap: Record<
  TextTypes,
  FlattenInterpolation<ThemeProps<DefaultTheme>>
> = {
  "nav-link": css`
    font-family: Comfortaa;
    font-weight: inherit;
    font-size: 18px;
    line-height: 20px;
    color: ${({ theme }) => theme.palette.fonts.navLink};
  `,
  text: css`
    font-family: Comfortaa;
    font-weight: inherit;
    font-size: 18px;
    line-height: 20px;
    color: ${({ theme }) => theme.palette.fonts.primary};
  `,
  h1: css`
    font-family: Comfortaa;
    font-weight: inherit;
    font-size: 36px;
    font-weight: 700;
    color: ${({ theme }) => theme.palette.fonts.primary};
  `,
  "button-text": css`
    font-family: Comfortaa;
    font-weight: 700;
    font-size: 18px;
    color: ${({ theme }) => theme.palette.fonts.white};
    text-decoration: none;
  `,
  error: css`
    font-family: Comfortaa;
    font-weight: 400;
    font-size: 14px;
    color: ${({ theme }) => theme.palette.fonts.error};
  `,
};

export const Text = styled.span<IText>`
  ${({ style }) => ({ ...style })};
  ${({ type }) => stylesMap[type]};
  color: ${({ color, theme }) => (color ? theme.palette.fonts[color] : "")};
`;
