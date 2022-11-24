import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useRouter } from "next/router";
import { User } from "interfaces/user";

const Login = (): JSX.Element => {
  const [email, setEmail] = useState<User["email"]>("");
  const [password, setPassword] = useState<string>("");

  const router = useRouter();
  const { signIn, user } = useAuth();

  useEffect(() => {
    if (user) {
      router.push("/admin");
    }
  }, [user, router]);

  return (
    <div>
      <h1>Login</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("EMAIL: ", email, " PASSWORD: ", password);
          signIn(email, password);
        }}
      >
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={({ target: { value } }) => setEmail(value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={({ target: { value } }) => setPassword(value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
