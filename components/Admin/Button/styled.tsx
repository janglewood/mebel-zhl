import { Text } from "@/components/Text";
import styled from "styled-components";

interface IProps {
  variant: string;
}

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
`;
