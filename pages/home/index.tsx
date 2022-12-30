import { CatalogImage } from "@/components/Catalog/CatalogImage";
import { CatalogList } from "@/components/Catalog/CatalogList";
import { CatalogItem } from "interfaces/catalog";
import { FC, useMemo, useState, memo } from "react";
import { HomePageWrapper, TopCatalogListBlock } from "./styled";

import { MaterialsSection } from "@/components/Home/MaterialsSection";
import CatalogBlock from "@/components/CatalogBlock";

const Home: FC<{ catalog: CatalogItem[] }> = ({ catalog }) => {
  const [currentItemId, setCurrentItemId] = useState(catalog[0].id);

  const currentItem = useMemo(
    () => catalog.find(({ id }) => id === currentItemId),
    [currentItemId]
  );

  return (
    <HomePageWrapper>
      <TopCatalogListBlock>
        <CatalogList
          catalog={catalog}
          currentItemId={currentItemId}
          setCurrentItemId={setCurrentItemId}
        />
        <CatalogImage imgLink={currentItem.imgLink} />
      </TopCatalogListBlock>
      <CatalogBlock
        catalog={catalog}
        isLinkButtonVisible
        useHoverButtonAnimation
      />

      <MaterialsSection />
    </HomePageWrapper>
  );
};

export default Home;
