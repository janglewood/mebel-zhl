import { createContext, useContext, useEffect, useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  getAuth,
  signOut,
} from "firebase/auth";
import { db } from "../utils/firebase/index";

const authContext = createContext({ user: {} });
const { Provider } = authContext;

export function AuthProvider({ children }) {
  const auth = useAuthProvider();
  return <Provider value={auth}>{children}</Provider>;
}

const useAuthProvider = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const auth = getAuth();

  const createUser = async (currentUser) => {
    try {
      await addDoc(collection(db, "users"), {
        currentUser,
      });
    } catch (error) {
      throw new Error(error);
    }
  };

  const signUp = async (email, password) => {
    try {
      const data = await createUserWithEmailAndPassword(auth, email, password);

      if (data.user) {
        await createUser({ email: data.user.email, isAdmin: true });
      }
    } catch (error) {
      throw new Error(error);
    }
  };

  const signIn = async (email, password) => {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);

      console.log("data form signin: ", user);
    } catch (error) {
      throw new Error(error);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      throw new Error(error);
    }
  };

  /// We need to get the user data from the Firestore db
  const handleAuthStateChanged = (user) => {
    setIsLoading(true);

    if (user) {
      setUser(user);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Subscribe to user on mount
    const unsubscribe = onAuthStateChanged(auth, handleAuthStateChanged);

    // Unsubscribe on cleanup
    return unsubscribe;
  }, [user]);

  return { user, signUp, signIn, logout, isLoading };
};

export const useAuth = () => {
  return useContext(authContext);
};
