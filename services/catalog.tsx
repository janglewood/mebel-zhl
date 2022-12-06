import { collection, getDocs } from "firebase/firestore";
import { CatalogItem } from "interfaces/catalog";
import { db } from "utils/firebase";

export const getCatalog = async (): Promise<CatalogItem[]> => {
  const querySnapshot = await getDocs(collection(db, "catalog"));
  const data: CatalogItem[] = [];
  querySnapshot.forEach((doc) => {
    data.push(doc.data() as CatalogItem);
  });
  return data;
};
