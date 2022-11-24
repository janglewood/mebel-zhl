import { createContext, useContext, useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../utils/firebase/index";
import { Catalog } from "interfaces/catalog";

export interface CatalogContext {
  catalog: Catalog[];
  isLoading: boolean | null;
}

const catalogContext = createContext({ catalog: [] } as CatalogContext);
const { Provider } = catalogContext;

export function CatalogProvider({ children }) {
  const catalog = useCatalogProvider();
  return <Provider value={catalog}>{children}</Provider>;
}

const useCatalogProvider = () => {
  const [catalog, setCatalog] = useState<Catalog[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    const unsubscribe = onSnapshot(collection(db, "catalog"), (docs) => {
      const data = [];
      docs.forEach((doc) => data.push(doc.data()));

      setCatalog(data);
    });
    setIsLoading(false);

    return unsubscribe;
  }, []);

  return { catalog, isLoading };
};

export const useCatalog = () => {
  return useContext(catalogContext);
};
