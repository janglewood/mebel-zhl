import { AuthContext, useAuth } from "./useAuth";
import { useEffect } from "react";
import { useRouter } from "next/router";

export const useRequireAuth = (
  redirectUrl: string = "/admin/login"
): AuthContext => {
  const auth = useAuth();
  const router = useRouter();

  // If auth.user is false that means we're not
  // logged in and should redirect.
  useEffect(() => {
    if (!auth.user) {
      router.push({
        pathname: redirectUrl,
      });
    }
  }, [auth, redirectUrl, router]);

  return auth;
};
