import { Text } from "@/components/Text";
import styled from "styled-components";

export const AdminLayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding: 0 32px;
  max-width: 960px;
`;

export const AdminHeader = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.palette.borders.primary};
  padding: 8px 0;
  width: 100%;
`;

export const ContentWrapper = styled.div`
  margin: 64px 0;
  width: 100%;
`;
