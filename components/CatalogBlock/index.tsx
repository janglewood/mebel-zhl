import { CatalogItem } from "interfaces/catalog";
import Link from "next/link";
import React, { FC, useState } from "react";
import { Button } from "@/components/Button";
import { Text } from "@/components/Text";
import {
  CatalogBlockWrapper,
  CatalogBlockListWrapper,
  CatalogBlockListItem,
  StyledImage,
  StyledLink,
  CardDescriptionWrapper,
} from "./styled";

interface IProps {
  catalog: CatalogItem[];
  isLinkButtonVisible?: boolean;
  useHoverButtonAnimation?: boolean;
}
const CatalogBlock: FC<IProps> = ({
  catalog,
  isLinkButtonVisible,
  useHoverButtonAnimation,
}) => {
  const [hoveredItemId, setHoveredItemId] = useState<CatalogItem["id"] | null>(
    null
  );
  return (
    <CatalogBlockWrapper>
      <CatalogBlockListWrapper onMouseLeave={() => setHoveredItemId(null)}>
        {catalog.map(({ title, price, id, imgLink }) => (
          <StyledLink href={`/catalog/${id}`} key={id}>
            <CatalogBlockListItem
              onMouseEnter={() => setHoveredItemId(id)}
              isHovered={hoveredItemId ? hoveredItemId === id : null}
            >
              <StyledImage src={imgLink} alt={title} />
              <CardDescriptionWrapper>
                <Text type="text">{title}</Text>
                <Text type="text">
                  Цена: <b>{price}</b> руб.
                </Text>
              </CardDescriptionWrapper>
            </CatalogBlockListItem>
          </StyledLink>
        ))}
      </CatalogBlockListWrapper>
      {isLinkButtonVisible && (
        <Link href="/catalog">
          <Button
            variant="secondary"
            text="В каталог"
            useHoverAnimation={useHoverButtonAnimation}
          />
        </Link>
      )}
    </CatalogBlockWrapper>
  );
};

export default CatalogBlock;
