import { createContext, useContext, useEffect, useState } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../utils/firebase/index";

const catalogContext = createContext({ user: {} });
const { Provider } = catalogContext;

export function CatalogProvider({ children }) {
  const auth = useCatalogProvider();
  return <Provider value={auth}>{children}</Provider>;
}

const useCatalogProvider = () => {
  const [catalog, setCatalog] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getCatalog = async () => {
    try {
      const catalog = [];
      setIsLoading(true);
      const querySnapshot = await getDocs(collection(db, "catalog"));
      querySnapshot.forEach((doc) => catalog.push(doc.data()));
      setCatalog(catalog);
      setIsLoading(false);
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    getCatalog();
  }, []);

  return { catalog, getCatalog, isLoading };
};

export const useCatalog = () => {
  return useContext(catalogContext);
};
