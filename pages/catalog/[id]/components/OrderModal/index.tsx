import { Button } from "@/components/Button";
import { OrderForm } from "@/components/Forms/OrderForm";
import { Modal } from "@/components/Modal";
import { Text } from "@/components/Text";
import React, { FC, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { sendEmail } from "utils";

interface IProps {
  close: () => void;
}

const OrderModal: FC<IProps> = ({ close }) => {
  return (
    <Modal close={close} useCloseIcon size="l">
      <OrderForm />
    </Modal>
  );
};

export default OrderModal;
