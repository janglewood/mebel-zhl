import { LoadingSpinner } from "@/components/LoadingSpinner";
import { Text } from "@/components/Text";
import { FC } from "react";
import { useTheme } from "styled-components";
import { StyledAnimationItem, StyledButton } from "./styled";

export interface IProps {
  text?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  type?: "submit" | "reset" | "button";
  isLoading?: boolean;
  variant: "primary" | "disabled" | "secondary";
  style?: React.CSSProperties;
  useHoverAnimation?: boolean;
}

export const Button: FC<IProps> = ({
  text,
  onClick,
  type,
  isLoading,
  useHoverAnimation,
  variant,
  children,
  style,
}) => {
  const theme = useTheme();
  return (
    <StyledButton
      onClick={onClick}
      type={type || "button"}
      variant={variant}
      style={style}
      useHoverAnimation={useHoverAnimation}
    >
      {isLoading ? (
        <LoadingSpinner
          color={
            variant === "primary"
              ? theme.palette.fonts.white
              : theme.palette.fonts.primary
          }
        />
      ) : text ? (
        <Text
          type="button-text"
          color={variant === "secondary" ? "primary" : "white"}
        >
          {text || children}
        </Text>
      ) : (
        children
      )}
      <StyledAnimationItem n={1} />
      <StyledAnimationItem n={2} />
      <StyledAnimationItem n={3} />
      <StyledAnimationItem n={4} />
    </StyledButton>
  );
};
