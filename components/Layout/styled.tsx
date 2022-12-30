import styled from "styled-components";

export const StyledLayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 960px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 16px;
  gap: 24px;
  background-color: ${({ theme }) => theme.palette.backgrounds.main};
`;
