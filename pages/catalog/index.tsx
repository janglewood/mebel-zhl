import { CatalogImage } from "@/components/Catalog/CatalogImage";
import { CatalogList } from "@/components/Catalog/CatalogList";
import { CatalogListWrapper } from "@/components/Catalog/CatalogList/styled";
import CatalogBlock from "@/components/CatalogBlock";
import { useCatalog } from "hooks/useCatalog";
import { CatalogItem } from "interfaces/catalog";
import { FC } from "react";
import { getCatalog } from "services/catalog";
import { TopCatalogListBlock } from "../home/styled";
import { CatalogPageWrapper } from "./styled";

const Catalog: FC<{ catalog: CatalogItem[] }> = ({ catalog }) => {
  return (
    <CatalogPageWrapper>
      <TopCatalogListBlock>
        <CatalogBlock catalog={catalog} />
      </TopCatalogListBlock>
    </CatalogPageWrapper>
  );
};

export async function getStaticProps({ res, req }) {
  const catalog = await getCatalog();

  return {
    props: { catalog },
  };
}

export default Catalog;
