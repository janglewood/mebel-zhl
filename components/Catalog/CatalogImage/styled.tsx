import styled, { keyframes } from "styled-components";

const appereanceAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const StyledImage = styled.img`
  height: 300px;
  width: auto;
  max-width: 60%;
  object-fit: contain;
  animation: ${appereanceAnimation} 0.25s ease-in;
`;
