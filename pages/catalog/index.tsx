import { CatalogImage } from "@/components/Catalog/CatalogImage";
import { CatalogList } from "@/components/Catalog/CatalogList";
import { CatalogListWrapper } from "@/components/Catalog/CatalogList/styled";
import { useCatalog } from "hooks/useCatalog";
import { CatalogItem } from "interfaces/catalog";
import { FC, useMemo, useState } from "react";
import { getCatalog } from "services/catalog";
import {
  CatalogWrapper,
  MaterialsBlock,
  TopCatalogListBlock,
} from "../home/styled";

const Catalog: FC<{ catalog: CatalogItem[] }> = ({ catalog }) => {
  const [currentItemId, setCurrentItemId] = useState(catalog[0].id);

  const currentItem = useMemo(
    () => catalog.find(({ id }) => id === currentItemId),
    [currentItemId]
  );

  return (
    <CatalogWrapper>
      <TopCatalogListBlock>
        <CatalogList
          catalog={catalog}
          currentItemId={currentItemId}
          setCurrentItemId={setCurrentItemId}
        />
        <CatalogImage imgLink={currentItem.imgLink} />
      </TopCatalogListBlock>

      <MaterialsBlock></MaterialsBlock>
    </CatalogWrapper>
  );
};

export async function getStaticProps({ res, req }) {
  //   res.setHeader(
  //     "Cache-Control",
  //     "public, s-maxage=10, stale-while-revalidate=30"
  //   );

  const catalog = await getCatalog();

  return {
    props: { catalog }, // will be passed to the page component as props
  };
}

export default Catalog;
