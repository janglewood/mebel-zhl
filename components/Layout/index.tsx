import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LayoutBackground, StyledLayoutWrapper } from "./styled";

export const Layout = ({ children }) => {
  return (
    <StyledLayoutWrapper>
      <Header />
      {children}
      <Footer />
      <LayoutBackground />
    </StyledLayoutWrapper>
  );
};
