import { CatalogItem } from "interfaces/catalog";
import React, { FC } from "react";
import { getCatalog } from "services/catalog";
import Home from "./home";

const Index: FC<{ catalog: CatalogItem[] }> = ({ catalog }) => {
  return <Home catalog={catalog} />;
};

export async function getStaticProps({ res, req }) {
  const catalog = await getCatalog();

  return {
    props: { catalog },
  };
}

export default Index;
