import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
