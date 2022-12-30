import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { CatalogItem } from "interfaces/catalog";
import { db } from "utils/firebase";

export const getCatalog = async (): Promise<CatalogItem[]> => {
  const querySnapshot = await getDocs(collection(db, "catalog"));
  const data: CatalogItem[] = [];
  querySnapshot.forEach((doc) => {
    data.push({ ...doc.data(), id: doc.id } as CatalogItem);
  });
  return data;
};

export const getCatalogItem = async (
  id: CatalogItem["id"]
): Promise<CatalogItem> => {
  const querySnapshot = await getDoc(doc(db, "catalog", id));
  return { ...querySnapshot.data(), id: querySnapshot.id } as CatalogItem;
};
