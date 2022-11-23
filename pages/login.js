import { useCallback, useEffect, useState } from "react";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { auth, db } from "../utils/firebase/index";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useAuth } from "../hooks/useAuth";
import { useRouter } from "next/router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();
  const { signIn, user, isLoading } = useAuth();

  useEffect(() => {
    if (user) {
      router.push("/admin");
    }
  }, [user, router]);

  return isLoading ? (
    <div>blyat</div>
  ) : (
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
