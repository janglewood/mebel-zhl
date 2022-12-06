import styled, {
  css,
  DefaultTheme,
  FlattenInterpolation,
  ThemeProps,
} from "styled-components";
import { theme } from "styles/theme";
import { FieldErrors } from "../../types";

type TextTypes =
  | "h1"
  | "h2"
  | "text"
  | "nav-link"
  | "button-text"
  | "error"
  | "description-text";

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
    font-weight: inherit;
    font-size: 18px;
    line-height: 20px;
    color: ${({ theme }) => theme.palette.fonts.navLink};
  `,
  text: css`
    font-weight: inherit;
    font-size: 18px;
    line-height: 20px;
  `,
  h1: css`
    font-weight: inherit;
    font-size: 36px;
    font-weight: 700;
  `,
  h2: css`
    font-weight: inherit;
    font-size: 24px;
    line-height: 26px;
    font-weight: 400;
  `,
  "button-text": css`
    font-weight: 700;
    font-size: 18px;
    color: ${({ theme }) => theme.palette.fonts.white};
    text-decoration: none;
  `,
  "description-text": css`
    font-family: Nunito;
    font-weight: 300;
    font-size: 18px;
    line-height: 32.7px;
    color: ${({ theme }) => theme.palette.fonts.black};
  `,
  error: css`
    font-weight: 400;
    font-size: 14px;
    color: ${({ theme }) => theme.palette.fonts.error};
  `,
};

export const Text = styled.span<IText>`
  color: ${({ theme, color }) =>
    color ? theme.palette.fonts[color] : theme.palette.fonts.primary};
  font-family: Comfortaa;
  ${({ style }) => ({ ...style })};
  ${({ type }) => stylesMap[type]};
`;
