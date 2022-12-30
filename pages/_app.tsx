import { Layout } from "@/components/Layout";
import "../styles/fonts.css";
import { useRouter } from "next/router";
import { CatalogProvider, AuthProvider } from "@/hooks";
import { AppProps } from "next/app";
import { FC } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from "styles/theme";
import { AdminLayout } from "@/components/Admin/AdminLayout";

const adminPages = ["/admin", "/admin/login", "/admin/[id]", "/admin/add"];

const App: FC<AppProps> = ({ Component, pageProps }) => {
  const { pathname } = useRouter();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {adminPages.includes(pathname) ? (
        <AuthProvider>
          <CatalogProvider>
            <AdminLayout>
              <Component {...pageProps} />
            </AdminLayout>
          </CatalogProvider>
        </AuthProvider>
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </ThemeProvider>
  );
};

export default App;
