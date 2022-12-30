import styled from "styled-components";
import { IProps as ComponentProps } from "./index";

export const StyledAnimationItem = styled.span<{ n: number }>`
  position: absolute;
  width: 25%;
  height: 100%;
  background-color: ${({ theme }) => theme.palette.backgrounds.buttons.green};
  transform: translateY(150%);
  border-radius: 50%;
  left: ${({ n }) => (n - 1) * 25}%;
  transition: 0.5s;
  transition-delay: ${({ n }) => (n - 1) * 0.1}s;
  z-index: -1;
`;

interface IProps
  extends Pick<ComponentProps, "variant" | "useHoverAnimation"> {}

export const StyledButton = styled.button<IProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  min-width: 120px;
  cursor: ${({ variant }) =>
    variant === "disabled" ? "not-allowed" : "pointer"};
  border: ${({ variant, theme }) =>
    variant === "secondary"
      ? `1px solid ${theme.palette.borders.primary}`
      : "none"};
  background-color: ${({ theme, variant }) =>
    theme.palette.backgrounds.buttons[variant]};
  border-radius: 6px;
  text-decoration: none;
  position: relative;
  overflow: hidden;
  z-index: 1;

  & > ${StyledAnimationItem} {
    display: ${({ useHoverAnimation }) =>
      useHoverAnimation ? "block" : "none"};
  }
  &:hover ${StyledAnimationItem} {
    transform: translateY(0) scale(2);
  }
`;
