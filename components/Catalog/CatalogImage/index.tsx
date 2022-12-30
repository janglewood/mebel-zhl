import { FC, useState } from "react";

import { CatalogItem } from "interfaces/catalog";

import { StyledImage } from "./styled";

interface IProps {
  imgLink: CatalogItem["imgLink"];
}

export const CatalogImage: FC<IProps> = ({ imgLink }) => {
  return <StyledImage src={imgLink} key={imgLink} alt="Диван" />;
};
