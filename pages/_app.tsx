import Layout from "../components/layout";
import "fonts.css";
import { Router, useRouter } from "next/router";
import { AuthProvider } from "../hooks/useAuth";
import { CatalogProvider } from "../hooks/useCatalog";
import { AppProps } from "next/app";

const pagesWithoutLayout = ["/admin", "/admin/login"];

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
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
};

export default App;
