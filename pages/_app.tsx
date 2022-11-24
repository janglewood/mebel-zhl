import Layout from "../components/layout";
import "../styles/fonts.css";
import { useRouter } from "next/router";
import { AuthProvider } from "../hooks/useAuth";
import { CatalogProvider } from "../hooks/useCatalog";
import { AppProps } from "next/app";
import { FC } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "styles/theme";

const pagesWithoutLayout = ["/admin", "/admin/login"];

const App: FC<AppProps> = ({ Component, pageProps }) => {
  const { pathname } = useRouter();
  return (
    <AuthProvider>
      <CatalogProvider>
        <ThemeProvider theme={theme}>
          {pagesWithoutLayout.includes(pathname) ? (
            <Component {...pageProps} />
          ) : (
            <Layout>
              <Component {...pageProps} />
            </Layout>
          )}
        </ThemeProvider>
      </CatalogProvider>
    </AuthProvider>
  );
};

export default App;
