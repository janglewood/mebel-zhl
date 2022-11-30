import {
  createContext,
  FC,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  collection,
  onSnapshot,
  deleteDoc,
  doc,
  setDoc,
  addDoc,
  updateDoc,
} from "firebase/firestore";
import { db, storage } from "../utils/firebase/index";
import { CatalogItem } from "interfaces/catalog";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export interface CatalogContext {
  catalog: CatalogItem[];
  isLoading: boolean | null;
  addItem: (data: CatalogItem) => void;
  deleteItem: (id: CatalogItem["id"]) => void;
  uploadFileToStorage: (file: File) => Promise<string>;
  updateItem: (id: CatalogItem["id"], data: CatalogItem) => void;
}

const catalogContext = createContext({ catalog: [] } as CatalogContext);
const { Provider } = catalogContext;

export const CatalogProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const catalog = useCatalogProvider();
  return <Provider value={catalog}>{children}</Provider>;
};

const useCatalogProvider = () => {
  const [catalog, setCatalog] = useState<CatalogItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    const unsubscribe = onSnapshot(collection(db, "catalog"), (docs) => {
      const data = [];
      docs.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });

      setCatalog(data);
    });
    setIsLoading(false);

    return unsubscribe;
  }, []);

  const deleteItem: CatalogContext["deleteItem"] = async (id) => {
    try {
      setIsLoading(true);
      await deleteDoc(doc(db, "catalog", id));
      setIsLoading(false);
    } catch (error) {
      throw new Error(error);
    }
  };

  const addItem: CatalogContext["addItem"] = async (data) => {
    try {
      setIsLoading(true);
      const imgLink = await uploadFileToStorage(data.headImg[0]);
      const { headImg, ...restData } = data;
      await addDoc(collection(db, "catalog"), { ...restData, imgLink });
      setIsLoading(false);
    } catch (error) {
      throw new Error(error);
    }
  };

  const updateItem: CatalogContext["updateItem"] = async (id, data) => {
    try {
      setIsLoading(true);
      const { headImg, ...restData } = data;
      if (headImg.length) {
        const imgLink = await uploadFileToStorage(headImg[0]);
        await updateDoc(doc(db, "catalog", id), { ...restData, imgLink });
      } else {
        await updateDoc(doc(db, "catalog", id), { ...restData });
      }
      setIsLoading(false);
    } catch (error) {
      throw new Error(error);
    }
  };

  const uploadFileToStorage: CatalogContext["uploadFileToStorage"] = async (
    file
  ) => {
    const storageRef = ref(storage, file.name);
    await uploadBytes(storageRef, file);
    return await getDownloadURL(storageRef);
  };

  return {
    catalog,
    isLoading,
    deleteItem,
    addItem,
    uploadFileToStorage,
    updateItem,
  };
};

export const useCatalog = () => {
  return useContext(catalogContext);
};
