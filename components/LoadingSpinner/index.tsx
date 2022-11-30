import { Text } from "@/components/Text";
import { FC } from "react";
import { SpinnerWrapper } from "./styled";

export interface IProps {
  size?: number;
  color?: string;
  borderSize?: number;
  style?: React.CSSProperties;
}

export const LoadingSpinner: FC<IProps> = ({
  size,
  color,
  borderSize,
  style,
}) => {
  return (
    <SpinnerWrapper
      size={size || 24}
      color={color}
      borderSize={borderSize}
      style={style}
    >
      <div />
      <div />
      <div />
      <div />
    </SpinnerWrapper>
  );
};
