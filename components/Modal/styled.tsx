import styled, { keyframes } from "styled-components";
import CloseIcon from "@/assets/icons/close.svg";
import { IProps } from ".";

export const ModalWrapper = styled.div`
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
`;

export const ModalBlur = styled.span`
  position: fixed;
  background-color: #80808061;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
`;

export const ModalContentWrapper = styled.span<{ size: IProps["size"] }>`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 10px;
  padding: 16px;
  z-index: 1;
  min-width: ${({ size }) => {
    switch (size) {
      case "s":
        return "480px";
      case "l":
        return "640px";
      case "xl":
        return "768px";
      default:
        return "unset";
    }
  }};
`;

export const ModalHeader = styled.span<{ reverse: boolean }>`
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
  align-items: center;
  justify-content: space-between;
`;

export const ModalBody = styled.span`
  display: flex;
  flex-direction: column;
`;

export const ModalFooter = styled.span`
  display: flex;
  flex-direction: row;
`;

const closeIconHoverAnimation = keyframes`
  0% {
    transform: rotateZ(0deg);
  }
  50% {
    transform: rotateZ(15deg);
  }
  100% {
    transform: rotateZ(0deg);
  }
`;

export const StyledCloseIcon = styled(CloseIcon)`
  width: 24px;
  height: 24px;
  cursor: pointer;

  &:hover {
    animation: ${closeIconHoverAnimation} 0.5s ease-in;
  }
`;
