import { useEffect } from "react";
import { useRouter } from "next/router";

import { LoginForm } from "@/components/Admin/Forms/LoginForm";
import { Text } from "@/components/Text";

import { useAuth } from "@/hooks";

import { LoginWrapper } from "./styled";

const Login = (): JSX.Element => {
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      router.push("/admin");
    }
  }, [user, router]);

  return (
    <LoginWrapper>
      <Text type="h1">Вход в систему</Text>
      <LoginForm />
    </LoginWrapper>
  );
};

export default Login;
