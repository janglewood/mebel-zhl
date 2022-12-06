import styled from "styled-components";

export const StyledLayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding: 16px;
  max-width: 960px;
  gap: 24px;
  background-color: ${({ theme }) => theme.palette.backgrounds.main};
`;
