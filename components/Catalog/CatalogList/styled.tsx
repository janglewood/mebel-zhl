import { Text } from "@/components/Text";
import styled, { css } from "styled-components";

export const CatalogListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 36px;
  padding-top: 40px;
  width: 25%;
`;

const CatalogItemActiveStyles = css`
  background: ${({ theme }) => theme.palette.gradients.mainButtonGradient};
`;

export const CatalogItem = styled.div<{ isActive: boolean }>`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 12px 36px;

  border-radius: 25px;
  cursor: pointer;
  ${({ isActive }) => (isActive ? CatalogItemActiveStyles : "")}

  & > ${Text} {
    color: #757ca5;
  }
`;
