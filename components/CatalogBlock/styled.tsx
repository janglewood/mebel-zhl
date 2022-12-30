import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { theme } from "styles/theme";

export const CatalogBlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 32px;
`;

export const CatalogBlockListWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 1fr;
  gap: 16px;
`;

export const CatalogBlockListItem = styled.li<{ isHovered?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid ${({ theme }) => theme.palette.borders.primary};
  border-radius: 16px;
  padding: 16px;
  transition: all 0.2s ease-out;
  opacity: ${({ isHovered }) => {
    if (isHovered !== null && isHovered === false) {
      return 0.4;
    }
  }};
  &:hover {
    box-shadow: ${({ theme }) => theme.palette.shadows.itemCard};
    transform: scale(1.01);
  }
`;

export const StyledImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
  margin: 0 auto;
`;

export const StyledLink = styled(Link)`
  display: flex;
  flex: 1;
`;

export const CardDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
