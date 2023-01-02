import { StyledButton } from "@/components/Button/styled";
import styled from "styled-components";

export const CatalogItemPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  position: relative;
  gap: 32px;
  flex: 1;
  z-index: 1;
`;

export const ImageWrapper = styled.span`
  width: 100%;
  height: 300px;
  position: relative;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const StyledDescriptionWrapper = styled.span`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const DescriptionItem = styled.span`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const StyledButtonWrapper = styled.span`
  display: flex;
  width: 50%;
  margin: 0 auto;

  & > ${StyledButton} {
    flex: 1;
  }
`;
