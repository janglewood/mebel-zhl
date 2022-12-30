import styled from "styled-components";

export const MaterialBlockWrapper = styled.div<{
  direction: "rtl" | "ltr";
  isConfigurable: boolean;
}>`
  display: flex;
  flex-direction: ${({ direction }) =>
    direction === "rtl" ? "row" : "row-reverse"};
  align-items: flex-start;
  gap: 80px;
  width: 100%;

  & > img {
    ${({ isConfigurable }) =>
      isConfigurable
        ? {
            width: "30%",
            height: "auto",
            borderRadius: "12px",
          }
        : {}}
  }
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
