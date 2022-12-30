import { Text } from "@/components/Text";
import Image from "next/image";
import styled from "styled-components";

export const MaterialsBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  gap: 32px;

  & > ${Text} {
    margin-bottom: 32px;
  }
`;

export const CollorPalleteImage = styled(Image)`
  width: 60%;
  height: auto;
  border-radius: 12px;
`;

export const MaterialBlockColumn = styled.div<{ gap: number }>`
  display: flex;
  flex-direction: column;
  gap: ${({ gap }) => gap}px;
  width: 100%;
`;

export const MaterialFeaturesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const PartnersLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  align-self: flex-end;

  & > a {
    text-decoration: underline;
  }
`;
