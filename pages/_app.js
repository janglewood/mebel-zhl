import Layout from "../components/layout";
import "fonts.css";
import { useRouter } from "next/router";
import { useMemo } from "react";
import { AuthProvider } from "../hooks/useAuth";
import { CatalogProvider } from "../hooks/useCatalog";

const pagesWithoutLayout = ["/admin", "/login"];

export default function App({ Component, pageProps }) {
  const { pathname } = useRouter();

  return (
    <AuthProvider>
      <CatalogProvider>
        {pagesWithoutLayout.includes(pathname) ? (
          <Component {...pageProps} />
        ) : (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        )}
      </CatalogProvider>
    </AuthProvider>
  );
}
