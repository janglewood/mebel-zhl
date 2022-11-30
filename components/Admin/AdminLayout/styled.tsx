import { Text } from "@/components/Text";
import styled from "styled-components";

export const AdminHeader = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.palette.borders.primary};
  padding: 8px 0;
`;

export const ContentWrapper = styled.div`
  margin: 64px 0;
`;
