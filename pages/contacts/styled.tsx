import { Text } from "@/components/Text";
import styled from "styled-components";

export const ContactsPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  position: relative;
  gap: 16px;
  z-index: 1;
`;

export const InfoWrapper = styled.span`
  display: flex;
  flex-direction: column;
  gap: 4px;

  & > ${Text} {
    white-space: break-spaces;
  }
`;
