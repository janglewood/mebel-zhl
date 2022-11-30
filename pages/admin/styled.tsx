import styled from "styled-components";

import { Text } from "@/components/Text";

import RemoveIcon from "@/assets/icons/remove.svg";
import PlusIcon from "@/assets/icons/plus.svg";

export const AdminPageWrapper = styled.span`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  max-width: 1420px;
  gap: 32px;
`;

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  padding: 0;
  box-sizing: border-box;
`;

export const StyledListItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  border: 1px solid ${({ theme }) => theme.palette.borders.primary};
  border-radius: 6px;

  & > ${Text} {
    user-select: none;
  }
`;

export const StyledRemoveIcon = styled(RemoveIcon)`
  width: 14px;
  height: auto;
  fill: ${({ theme }) => theme.palette.fonts.error};
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const SubHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const StyledPlusIcon = styled(PlusIcon)`
  width: 28px;
  height: auto;
  fill: ${({ theme }) => theme.palette.fonts.white};
`;
