import { FC } from "react";

interface IProps {
  text: string;
  onClick: () => void;
}
export const Button: FC<IProps> = ({ text, onClick }) => {
  return (
    <div style={{ color: "blue" }} onClick={onClick}>
      {text}
    </div>
  );
};
