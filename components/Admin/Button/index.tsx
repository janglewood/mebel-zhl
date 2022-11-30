import { LoadingSpinner } from "@/components/LoadingSpinner";
import { Text } from "@/components/Text";
import { FC } from "react";
import { theme } from "styles/theme";
import { StyledButton } from "./styled";

export interface IProps {
  text?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  type?: "submit" | "reset" | "button";
  isLoading?: boolean;
  variant: "primary" | "disabled" | "secondary";
  style?: React.CSSProperties;
}

export const Button: FC<IProps> = ({
  text,
  onClick,
  type,
  isLoading,
  variant,
  children,
  style,
}) => {
  return (
    <StyledButton
      onClick={onClick}
      type={type || "button"}
      variant={variant}
      style={style}
    >
      {isLoading ? (
        <LoadingSpinner />
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
    </StyledButton>
  );
};
