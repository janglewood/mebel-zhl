import { Button } from "@/components/Button";
import { Modal } from "@/components/Modal";
import { Text } from "@/components/Text";
import React, { FC, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { sendEmail } from "utils";
import { InputWrapper, StyledForm, StyledInput } from "../styled";
import { SuccesInfoWrapper } from "./styled";

export const OrderForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [error, setError] = useState<{}>(null);
  const formRef = useRef();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
  });
  const onSubmit = async () => {
    try {
      setIsLoading(true);
      setError(null);
      await sendEmail(formRef.current);
      setIsLoading(false);
      setIsSubmitted(true);
    } catch (err) {
      setIsLoading(false);
      setError(err.text || err.message);
    }
  };

  return isSubmitted ? (
    <SuccesInfoWrapper>
      <Text type="h1">Спасибо за заказ!</Text>
      <Text type="text">Менеджер свяжется с Вами в ближайшее время</Text>
    </SuccesInfoWrapper>
  ) : (
    <StyledForm onSubmit={handleSubmit(onSubmit)} ref={formRef}>
      <InputWrapper>
        <label htmlFor="name">
          <Text type="text">Имя</Text>
        </label>
        <div>
          <StyledInput
            id="name"
            type="text"
            name="name"
            isError={!!errors.name}
            {...register("name", {
              required: "Введите имя",
            })}
          />
          {errors.name && <Text type="error">{errors.name.message}</Text>}
        </div>
      </InputWrapper>
      <InputWrapper>
        <label htmlFor="phoneNumber">
          <Text type="text">Номер телефона</Text>
        </label>
        <div>
          <StyledInput
            id="phoneNumber"
            type="phone"
            name="phoneNumber"
            isError={!!errors.phoneNumber}
            {...register("phoneNumber", {
              required: "Введите номер",
              pattern: {
                value: /^[\+]?[(]?375[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
                message: "Введите телефон с кодом (напр. +375(xx)xxxxxxx)",
              },
            })}
          />
          {errors.phoneNumber && (
            <Text type="error">{errors.phoneNumber.message}</Text>
          )}
        </div>
      </InputWrapper>
      {error && <Text type="error">{error}</Text>}

      <Button
        text="Отправить"
        type="submit"
        variant="secondary"
        useHoverAnimation
        isLoading={isLoading}
      />
    </StyledForm>
  );
};
