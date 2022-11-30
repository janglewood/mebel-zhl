import { Text } from "@/components/Text";
import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 640px;
  width: 100%;
  gap: 16px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

export const StyledInput = styled.input<{ isError: boolean }>`
  display: flex;
  padding: 16px;
  border: 1px solid
    ${({ theme, isError }) =>
      isError ? theme.palette.borders.error : theme.palette.borders.primary};
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 4px;
`;

export const StyledFileInput = styled.input`
  opacity: 0;
  width: 0.1px;
  height: 0.1px;
  position: absolute;
`;

export const StyledFileLabel = styled.label<{
  isFileAdded: boolean;
  isError: boolean;
}>`
  display: flex;
  padding: 10px 14px;
  border-radius: 6px;
  width: fit-content;
  border: 1px solid
    ${({ theme, isError }) =>
      isError ? theme.palette.borders.error : theme.palette.borders.primary};
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.2s ease-out;

  & > ${Text} {
    font-size: 14px;
  }

  & > svg {
    width: 34px;
    fill: ${({ theme }) => theme.palette.fonts.primary};
  }
`;

export const ImagePreview = styled.img`
  width: 30%;
  height: auto;
  border-radius: 4px;
`;

export const StyledTextArea = styled.textarea<{ isError: boolean }>`
  display: flex;
  padding: 16px;
  border: 1px solid
    ${({ theme, isError }) =>
      isError ? theme.palette.borders.error : theme.palette.borders.primary};
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 4px;
`;
