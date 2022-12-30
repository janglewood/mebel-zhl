import { Text } from "@/components/Text";
import Image from "next/image";
import styled from "styled-components";

export const HomePageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  position: relative;
  gap: 32px;
  /* background: ${({ theme }) => theme.palette.backgrounds.homepage}; */
`;

export const TopCatalogListBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  gap: 32px;
  width: 100%;
`;
