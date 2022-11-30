import Layout from "../components/layout";
import "../styles/fonts.css";
import { useRouter } from "next/router";
import { CatalogProvider, AuthProvider } from "@/hooks";
import { AppProps } from "next/app";
import { FC } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "styles/theme";
import { AdminLayout } from "@/components/Admin/AdminLayout";

const adminPages = ["/admin", "/admin/login", "/admin/[id]", "/admin/add"];

const App: FC<AppProps> = ({ Component, pageProps }) => {
  const { pathname } = useRouter();

  return (
    <AuthProvider>
      <CatalogProvider>
        <ThemeProvider theme={theme}>
          {adminPages.includes(pathname) ? (
            <AdminLayout>
              <Component {...pageProps} />
            </AdminLayout>
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
