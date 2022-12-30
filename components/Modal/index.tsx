import React, { FC, ReactNode } from "react";
import { Button } from "../Button";
import { Text } from "../Text";
import {
  ModalBlur,
  ModalBody,
  ModalContentWrapper,
  ModalFooter,
  ModalHeader,
  ModalWrapper,
  StyledCloseIcon,
} from "./styled";

export interface IProps {
  close: () => void;
  useCloseIcon?: boolean;
  headerTitle?: string;
  children: ReactNode;
  buttonTitle?: string;
  size?: "s" | "l" | "xl";
}

export const Modal: FC<IProps> = ({
  close,
  useCloseIcon,
  headerTitle,
  children,
  buttonTitle,
  size,
}) => {
  return (
    <ModalWrapper>
      <ModalBlur onClick={close} />
      <ModalContentWrapper size="l">
        <ModalHeader reverse={!headerTitle}>
          {headerTitle && <Text type="h2">{headerTitle}</Text>}
          {useCloseIcon && <StyledCloseIcon onClick={close} />}
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
        {buttonTitle && (
          <ModalFooter>
            <Button variant="secondary">{buttonTitle}</Button>
          </ModalFooter>
        )}
      </ModalContentWrapper>
    </ModalWrapper>
  );
};
