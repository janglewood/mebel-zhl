import { FC, useEffect, useMemo, useRef, useState } from "react";
import { useAuth } from "@/hooks";
import { useForm } from "react-hook-form";
import { User } from "interfaces/user";
import { Button } from "@/components/Admin/Button";
import { InputWrapper, StyledForm, StyledInput } from "../styled";
import { Text } from "@/components/Text";

interface LoginData {
  email: User["email"];
  password: string;
}

export const LoginForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
  });
  const { signIn } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSubmit = async (data: LoginData) => {
    try {
      setIsLoading(true);
      setError(null);
      await signIn(data);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      setError(err.message);
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <InputWrapper>
        <label htmlFor="email">
          <Text type="text">Email</Text>
        </label>
        <div>
          <StyledInput
            id="email"
            type="email"
            name="email"
            isError={!!errors.email}
            {...register("email", {
              required: "Введите Email",
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Не верный email",
              },
            })}
          />
          {errors.email && <Text type="error">{errors.email.message}</Text>}
        </div>
      </InputWrapper>

      <InputWrapper>
        <label htmlFor="email">
          <Text type="text">Пароль</Text>
        </label>
        <div>
          <StyledInput
            id="password"
            type="password"
            name="password"
            isError={!!errors.password}
            {...register("password", {
              required: "Введите пароль",
              minLength: {
                value: 8,
                message: "Должно быть не менее 8 символов",
              },
            })}
          />
          {errors.password && (
            <Text type="error">{errors.password.message}</Text>
          )}
        </div>
      </InputWrapper>

      {error && <Text type="error">{error}</Text>}

      <Button
        text="Войти"
        type="submit"
        variant="primary"
        isLoading={isLoading}
      />
    </StyledForm>
  );
};
