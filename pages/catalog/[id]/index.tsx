import { Button } from "@/components/Button";
import { Modal } from "@/components/Modal";
import { Text } from "@/components/Text";
import { CatalogItem } from "interfaces/catalog";
import Image from "next/image";
import React, { FC, useState } from "react";
import { getCatalog, getCatalogItem } from "services/catalog";
import OrderModal from "./components/OrderModal";
import {
  CatalogItemPageWrapper,
  DescriptionItem,
  ImageWrapper,
  StyledButtonWrapper,
  StyledDescriptionWrapper,
} from "./styled";

const CatalogItemPage: FC<{ catalogItem: CatalogItem }> = ({
  catalogItem,
}): JSX.Element => {
  const [isOrderModalVisible, setIsOrderModalVisible] =
    useState<boolean>(false);

  return (
    <CatalogItemPageWrapper>
      <Text type="h1">{catalogItem.title}</Text>
      <ImageWrapper>
        <Image src={catalogItem.imgLink} alt={catalogItem.title} fill />
      </ImageWrapper>
      <StyledDescriptionWrapper>
        <DescriptionItem>
          <Text type="h2">Описание</Text>
          <Text type="text">{catalogItem.description}</Text>
        </DescriptionItem>
        <DescriptionItem>
          <Text type="h2">Цена</Text>
          <Text type="text">{catalogItem.price} руб.</Text>
        </DescriptionItem>
        <DescriptionItem>
          <Text type="h2">Размеры</Text>
          <Text type="text">Высота: {catalogItem.height} см.</Text>
          <Text type="text">Ширина: {catalogItem.deep} см.</Text>
          <Text type="text">Длина: {catalogItem.width} см.</Text>
        </DescriptionItem>
      </StyledDescriptionWrapper>
      <StyledButtonWrapper>
        <Button
          type="button"
          variant="secondary"
          useHoverAnimation
          onClick={() => setIsOrderModalVisible(true)}
        >
          ЗАКАЗАТЬ
        </Button>
      </StyledButtonWrapper>
      {isOrderModalVisible && (
        <OrderModal close={() => setIsOrderModalVisible(false)} />
      )}
    </CatalogItemPageWrapper>
  );
};

export async function getStaticProps({ params: { id } }) {
  const catalogItem = await getCatalogItem(id);

  return {
    props: { catalogItem },
  };
}

export async function getStaticPaths() {
  const catalog = await getCatalog();

  return {
    paths: catalog.map(({ id }) => ({ params: { id } })),
    fallback: false,
  };
}
export default CatalogItemPage;
